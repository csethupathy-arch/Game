// AP Physics 1 Farm Study Game - Main Game Logic

Animal.nextId = 0;

function Animal(type, x, y) {
  this.id = ++Animal.nextId;
  this.type = type;
  this.x = x;
  this.y = y;
  this.vx = (Math.random() - 0.5) * 0.3;
  this.vy = (Math.random() - 0.5) * 0.1;
  this.isBaby = false;
  this.babyTimer = 0;
  this.wobble = Math.random() * Math.PI * 2;
  this.facing = 1;
  this.isCombusting = false;
  this.combustTimer = 0;
  this.opacity = 1;
  this.sparkles = [];
}

const QUESTION_PANEL_HEIGHT = 220;

const state = {
  goats: 2,
  sheep: 0,
  cows: 0,
  horses: 0,
  phase: 'goat',
  // Stack of stage names we need to re-enter after reversion.
  // Each entry is 'sheep', 'cow', or 'horse'.
  // Most-recently-reverted stage is pushed last (top = last element).
  rebuildingStack: [],
  animals: [],
  hearts: [],
  confetti: [],
  questionAnswered: false,
  currentQuestion: null,
  currentQuestionIndex: -1,
  recentQuestions: new Set(),
  gameOver: false,
  won: false,
  totalEverSpawned: 2,
  totoroAngle: 0,
  restartCooldown: 0
};

let canvas, ctx, questionPanel;
let lastTime = 0;
let clouds = [];

// --- Initialization ---
function init() {
  canvas = document.getElementById('gameCanvas');
  ctx = canvas.getContext('2d');
  questionPanel = document.getElementById('questionPanel');

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Generate clouds
  for (let i = 0; i < 6; i++) {
    clouds.push({
      x: Math.random() * canvas.width,
      y: 20 + Math.random() * 80,
      speed: 0.05 + Math.random() * 0.1,
      size: 30 + Math.random() * 40
    });
  }

  // Spawn initial goats
  state.animals = [];
  for (let i = 0; i < 2; i++) {
    const b = getPastureBounds();
    const x = b.left + Math.random() * (b.right - b.left);
    const y = b.top + Math.random() * (b.bottom - b.top);
    state.animals.push(new Animal('goat', x, y));
  }

  loadNewQuestion();
  requestAnimationFrame(gameLoop);
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - QUESTION_PANEL_HEIGHT;
  questionPanel.style.height = QUESTION_PANEL_HEIGHT + 'px';
}

function getPastureBounds() {
  const h = canvas.height;
  const w = canvas.width;
  return {
    left: 20,
    right: w - 20,
    top: h * 0.45,
    bottom: h - 10
  };
}

function getAnimalSize(type) {
  const counts = {
    goat: state.animals.filter(a => a.type === 'goat').length,
    sheep: state.animals.filter(a => a.type === 'sheep').length,
    cow: state.animals.filter(a => a.type === 'cow').length,
    horse: state.animals.filter(a => a.type === 'horse').length
  };
  const count = counts[type] || 1;
  const base = type === 'goat' ? 18 : type === 'sheep' ? 20 : type === 'cow' ? 24 : 26;
  return Math.max(8, Math.min(base, base - Math.log10(Math.max(1, count)) * 3));
}

function spawnAnimal(type, x, y) {
  const b = getPastureBounds();
  const ax = x !== undefined ? x : b.left + Math.random() * (b.right - b.left);
  const ay = y !== undefined ? y : b.top + Math.random() * (b.bottom - b.top);
  const a = new Animal(type, ax, ay);
  state.animals.push(a);
  state.totalEverSpawned++;
  updateCounts();
  return a;
}

function updateCounts() {
  state.goats = state.animals.filter(a => a.type === 'goat' && !a.isCombusting).length;
  state.sheep = state.animals.filter(a => a.type === 'sheep' && !a.isCombusting).length;
  state.cows = state.animals.filter(a => a.type === 'cow' && !a.isCombusting).length;
  state.horses = state.animals.filter(a => a.type === 'horse' && !a.isCombusting).length;
}

function removeAnimal(animal) {
  const idx = state.animals.indexOf(animal);
  if (idx > -1) state.animals.splice(idx, 1);
  updateCounts();
}

// --- Question Logic ---
function getDifficulty() {
  const total = state.goats + state.sheep + state.cows + state.horses;
  if (total < 20) return 1;
  if (total < 50) return 2;
  if (total < 150) return 3;
  if (total < 300) return 4;
  return 5;
}

function loadNewQuestion() {
  if (state.gameOver || state.won) return;
  state.questionAnswered = false;

  const diff = getDifficulty();
  const result = getRandomQuestion(diff, state.recentQuestions);
  state.currentQuestion = result.question;
  state.currentQuestionIndex = result.globalIndex;

  if (state.recentQuestions.size > 20) {
    const first = state.recentQuestions.values().next().value;
    state.recentQuestions.delete(first);
  }
  state.recentQuestions.add(result.globalIndex);

  renderQuestion();
}

function renderQuestion() {
  const q = state.currentQuestion;
  if (!q) return;

  const phase = state.phase;
  const phaseLabel = phase.charAt(0).toUpperCase() + phase.slice(1);
  const diff = getDifficulty();

  let thresholdLabel = '';
  let progress = 0;
  if (phase === 'goat') {
    progress = state.goats / 100;
    thresholdLabel = `${state.goats}/100 goats → Sheep Phase`;
  } else if (phase === 'sheep') {
    progress = state.sheep / 200;
    thresholdLabel = `${state.sheep}/200 sheep → Cow Phase`;
  } else if (phase === 'cow') {
    progress = state.cows / 300;
    thresholdLabel = `${state.cows}/300 cows → Horse Phase`;
  } else if (phase === 'horse') {
    progress = state.horses / 400;
    thresholdLabel = `${state.horses}/400 horses → WIN!`;
  }

  const qType = q.type || 'multiple-choice';
  let answerHTML = '';

  if (qType === 'multiple-choice') {
    answerHTML = `<div class="options-grid" id="optionsGrid">
      ${q.options.map((opt, i) => `<button class="option-btn" data-idx="${i}" onclick="handleAnswer(${i})">${['A','B','C','D'][i]}. ${opt}</button>`).join('')}
    </div>`;
  } else if (qType === 'true-false') {
    answerHTML = `<div class="tf-grid" id="optionsGrid">
      <button class="option-btn tf-btn" onclick="handleTrueFalse(true)">True</button>
      <button class="option-btn tf-btn" onclick="handleTrueFalse(false)">False</button>
    </div>`;
  } else if (qType === 'short-answer') {
    answerHTML = `<div class="short-answer-row" id="optionsGrid">
      <input type="text" id="shortAnswerInput" class="short-answer-input" placeholder="Enter your answer..." inputmode="decimal">
      <span class="unit-label">${q.unit}</span>
      <button class="option-btn submit-btn" id="shortAnswerSubmit" onclick="handleShortAnswer()">Submit</button>
    </div>
    <div class="explanation-text" id="explanationText" style="display:none;"></div>`;
  }

  const qp = document.getElementById('questionPanel');
  qp.innerHTML = `
    <div class="phase-bar-row">
      <span class="phase-label">${phaseLabel} Phase · Tier ${diff}</span>
      <div class="progress-wrap">
        <div class="progress-fill" style="width:${Math.min(1, progress) * 100}%"></div>
      </div>
      <span class="progress-text">${thresholdLabel}</span>
    </div>
    <div class="question-text">${q.question}</div>
    ${answerHTML}
  `;

  if (qType === 'short-answer') {
    const input = document.getElementById('shortAnswerInput');
    if (input) {
      input.focus();
      input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') handleShortAnswer();
      });
    }
  }
}

function handleAnswer(idx) {
  if (state.questionAnswered || state.gameOver || state.won) return;
  state.questionAnswered = true;

  const correct = state.currentQuestion.correct;
  const buttons = document.querySelectorAll('.option-btn:not(.tf-btn):not(.submit-btn)');
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.classList.add('correct');
    if (i === idx && i !== correct) btn.classList.add('wrong');
  });

  if (idx === correct) {
    handleCorrect();
  } else {
    handleWrong();
  }

  setTimeout(() => {
    if (!state.gameOver && !state.won) loadNewQuestion();
  }, 1500);
}

function handleTrueFalse(playerAnswer) {
  if (state.questionAnswered || state.gameOver || state.won) return;
  state.questionAnswered = true;

  const correct = state.currentQuestion.correct; // boolean
  const buttons = document.querySelectorAll('.tf-btn');
  buttons.forEach(btn => {
    btn.disabled = true;
    const btnValue = btn.textContent.trim() === 'True';
    if (btnValue === correct) btn.classList.add('correct');
    if (btnValue === playerAnswer && playerAnswer !== correct) btn.classList.add('wrong');
  });

  if (playerAnswer === correct) {
    handleCorrect();
  } else {
    handleWrong();
  }

  setTimeout(() => {
    if (!state.gameOver && !state.won) loadNewQuestion();
  }, 1500);
}

function handleShortAnswer() {
  if (state.questionAnswered || state.gameOver || state.won) return;

  const input = document.getElementById('shortAnswerInput');
  if (!input) return;

  const raw = input.value.trim();
  const val = parseFloat(raw);

  if (raw === '' || isNaN(val)) {
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 500);
    return;
  }

  state.questionAnswered = true;
  input.disabled = true;
  const submitBtn = document.getElementById('shortAnswerSubmit');
  if (submitBtn) submitBtn.disabled = true;

  const q = state.currentQuestion;
  const isCorrect = Math.abs(val - q.answer) <= q.tolerance;

  input.classList.add(isCorrect ? 'input-correct' : 'input-wrong');

  const explanationEl = document.getElementById('explanationText');
  if (explanationEl && q.explanation) {
    explanationEl.textContent = (isCorrect ? '✓ ' : '✗ ') + q.explanation;
    explanationEl.style.display = 'block';
    explanationEl.style.color = isCorrect ? '#1a5a1a' : '#7a1010';
  }

  if (isCorrect) {
    handleCorrect();
  } else {
    handleWrong();
  }

  setTimeout(() => {
    if (!state.gameOver && !state.won) loadNewQuestion();
  }, 1500);
}

// --- Core answer handlers ---

function handleCorrect() {
  // Rebuilding mode: a correct answer immediately re-enters the most-recently
  // reverted stage by spawning 2 of it and setting the phase back to it.
  if (state.rebuildingStack.length > 0) {
    const rebuildTarget = state.rebuildingStack.pop();
    state.phase = rebuildTarget;
    spawnAnimal(rebuildTarget);
    spawnAnimal(rebuildTarget);
    checkThresholds();
    return;
  }

  // Normal mode: breed one animal of the current phase.
  const phase = state.phase;
  const currentAnimals = state.animals.filter(a => a.type === phase && !a.isBaby && !a.isCombusting);
  if (currentAnimals.length >= 2) {
    const shuffled = shuffle(currentAnimals);
    const parents = shuffled.slice(0, 2);
    const bx = (parents[0].x + parents[1].x) / 2;
    const by = (parents[0].y + parents[1].y) / 2;
    const baby = spawnAnimal(phase, bx, by);
    baby.isBaby = true;
    baby.babyTimer = 10000;
    showHearts(parents[0], parents[1]);
  }
  checkThresholds();
}

function handleWrong() {
  const killType = state.phase;
  // 'win' phase should never reach here, but guard anyway.
  if (killType === 'win') return;

  // Kill one non-baby, non-combusting animal of the CURRENT stage.
  const targets = state.animals.filter(a => a.type === killType && !a.isBaby && !a.isCombusting);
  if (targets.length > 0) {
    const victim = targets[Math.floor(Math.random() * targets.length)];
    startCombustion(victim);
  }

  updateCounts();

  // Count remaining alive (non-combusting) animals of the current stage.
  const aliveCount = state.animals.filter(a => a.type === killType && !a.isCombusting).length;

  if (killType === 'goat') {
    // Goats are the last line of defence. When they drop to 1 the game is over.
    if (aliveCount <= 1) {
      // Combust the surviving goat (if any) for the visual effect.
      if (aliveCount === 1) {
        const lastOne = state.animals.find(a => a.type === 'goat' && !a.isCombusting);
        if (lastOne) startCombustion(lastOne);
      }
      setTimeout(() => triggerGameOver(), 1600);
    }
  } else {
    // For sheep / cow / horse: dropping to 1 triggers a stage reversion.
    if (aliveCount <= 1) {
      // Combust the surviving animal (if any) for the visual effect.
      if (aliveCount === 1) {
        const lastOne = state.animals.find(a => a.type === killType && !a.isCombusting);
        if (lastOne) startCombustion(lastOne);
      }
      // Revert to the previous stage.
      revertToPreviousStage(killType);
    }
  }
}

// Revert from `fromStage` to the stage below it.
// Pushes `fromStage` onto rebuildingStack so the next correct answer
// (or natural threshold re-hit) re-enters it.
function revertToPreviousStage(fromStage) {
  state.rebuildingStack.push(fromStage);

  let prevStage, threshold;
  if (fromStage === 'sheep')  { prevStage = 'goat';  threshold = 100; }
  else if (fromStage === 'cow')   { prevStage = 'sheep'; threshold = 200; }
  else if (fromStage === 'horse') { prevStage = 'cow';   threshold = 300; }
  else return;

  state.phase = prevStage;
  restoreStage(prevStage, threshold);
}

// Ensure the count of alive (non-combusting) `animalType` animals equals
// `targetCount`, spawning or removing extras as needed.
function restoreStage(animalType, targetCount) {
  const alive = state.animals.filter(a => a.type === animalType && !a.isCombusting);
  const current = alive.length;
  const needed = targetCount - current;
  const b = getPastureBounds();

  if (needed > 0) {
    for (let i = 0; i < needed; i++) {
      const x = b.left + Math.random() * (b.right - b.left);
      const y = b.top + Math.random() * (b.bottom - b.top);
      const a = new Animal(animalType, x, y);
      state.animals.push(a);
    }
    state.totalEverSpawned += needed;
    updateCounts();
  } else if (needed < 0) {
    // Remove the excess animals (oldest first).
    const toRemove = alive.slice(0, -needed);
    for (const a of toRemove) {
      const idx = state.animals.indexOf(a);
      if (idx > -1) state.animals.splice(idx, 1);
    }
    updateCounts();
  }
}

function startCombustion(animal) {
  animal.isCombusting = true;
  animal.combustTimer = 1500;
  for (let i = 0; i < 12; i++) {
    animal.sparkles.push({
      x: animal.x,
      y: animal.y,
      vx: (Math.random() - 0.5) * 3,
      vy: -Math.random() * 3 - 1,
      life: 1,
      color: Math.random() < 0.5 ? '#FF6B35' : '#FFD700'
    });
  }
  updateCounts();
}

function checkThresholds() {
  updateCounts();
  const goats  = state.animals.filter(a => a.type === 'goat'  && !a.isBaby && !a.isCombusting).length;
  const sheep  = state.animals.filter(a => a.type === 'sheep' && !a.isBaby && !a.isCombusting).length;
  const cows   = state.animals.filter(a => a.type === 'cow'   && !a.isBaby && !a.isCombusting).length;
  const horses = state.animals.filter(a => a.type === 'horse' && !a.isBaby && !a.isCombusting).length;

  if (state.phase === 'goat' && goats >= 100) {
    state.phase = 'sheep';
    spawnAnimal('sheep');
    spawnAnimal('sheep');
    // If we were rebuilding sheep (threshold re-hit via breeding rather than
    // an immediate-correct shortcut), pop from the stack silently.
    const idx = state.rebuildingStack.lastIndexOf('sheep');
    if (idx > -1) {
      state.rebuildingStack.splice(idx, 1);
    } else {
      showPhaseTransition('SHEEP PHASE!', '🐑 You unlocked sheep!');
    }
  } else if (state.phase === 'sheep' && sheep >= 200) {
    state.phase = 'cow';
    spawnAnimal('cow');
    spawnAnimal('cow');
    const idx = state.rebuildingStack.lastIndexOf('cow');
    if (idx > -1) {
      state.rebuildingStack.splice(idx, 1);
    } else {
      showPhaseTransition('COW PHASE!', '🐄 Moo! You unlocked cows!');
    }
  } else if (state.phase === 'cow' && cows >= 300) {
    state.phase = 'horse';
    spawnAnimal('horse');
    spawnAnimal('horse');
    const idx = state.rebuildingStack.lastIndexOf('horse');
    if (idx > -1) {
      state.rebuildingStack.splice(idx, 1);
    } else {
      showPhaseTransition('HORSE PHASE!', '🐴 Galloping to victory!');
    }
  } else if (state.phase === 'horse' && horses >= 400) {
    state.phase = 'win';
    triggerWin();
  }
}

function showPhaseTransition(title, subtitle) {
  const overlay = document.getElementById('overlay');
  overlay.innerHTML = `<div class="overlay-box phase-transition"><h2>${title}</h2><p>${subtitle}</p></div>`;
  overlay.style.display = 'flex';
  setTimeout(() => { overlay.style.display = 'none'; }, 2500);
}

function triggerGameOver() {
  state.gameOver = true;
  const overlay = document.getElementById('overlay');
  overlay.innerHTML = `<div class="overlay-box"><h2>💀 You Lose!</h2><p>Your last goat is gone! The farm is empty...</p><button onclick="restartGame()" class="restart-btn">Try Again 🐐</button></div>`;
  overlay.style.display = 'flex';
}

function triggerWin() {
  state.won = true;
  spawnConfetti();
  const overlay = document.getElementById('overlay');
  overlay.innerHTML = `<div class="overlay-box win-box"><h2>🎉 YOU WIN! 🎉</h2><p>Totoro has blessed your farm!</p><p>You mastered AP Physics 1!</p><button onclick="restartGame()" class="restart-btn">Play Again 🌟</button></div>`;
  overlay.style.display = 'flex';
  document.getElementById('questionPanel').innerHTML = '<div style="text-align:center;font-size:1.5em;padding:20px;">🎊 Congratulations! 🎊</div>';
}

function restartGame() {
  state.goats = 2;
  state.sheep = 0;
  state.cows = 0;
  state.horses = 0;
  state.phase = 'goat';
  state.rebuildingStack = [];
  state.animals = [];
  state.hearts = [];
  state.confetti = [];
  state.questionAnswered = false;
  state.currentQuestion = null;
  state.gameOver = false;
  state.won = false;
  state.totalEverSpawned = 2;
  state.recentQuestions.clear();
  Animal.nextId = 0;

  document.getElementById('overlay').style.display = 'none';

  const b = getPastureBounds();
  for (let i = 0; i < 2; i++) {
    const x = b.left + Math.random() * (b.right - b.left);
    const y = b.top + Math.random() * (b.bottom - b.top);
    state.animals.push(new Animal('goat', x, y));
  }

  loadNewQuestion();
}

// --- Heart & Confetti Effects ---
function showHearts(a, b) {
  for (let i = 0; i < 5; i++) {
    state.hearts.push({
      x: (a.x + b.x) / 2 + (Math.random() - 0.5) * 20,
      y: (a.y + b.y) / 2,
      vy: -1 - Math.random() * 0.5,
      life: 1,
      size: 10 + Math.random() * 8
    });
  }
}

function spawnConfetti() {
  for (let i = 0; i < 80; i++) {
    state.confetti.push({
      x: Math.random() * canvas.width,
      y: -20,
      vx: (Math.random() - 0.5) * 4,
      vy: 2 + Math.random() * 3,
      color: ['#FF6B6B','#4ECDC4','#45B7D1','#96CEB4','#FFEAA7','#DDA0DD','#98D8C8'][Math.floor(Math.random()*7)],
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.2,
      life: 1
    });
  }
}

// --- Drawing ---
function drawBackground(ts) {
  const w = canvas.width, h = canvas.height;

  // Sky gradient
  const skyGrad = ctx.createLinearGradient(0, 0, 0, h * 0.55);
  skyGrad.addColorStop(0, '#87CEEB');
  skyGrad.addColorStop(1, '#B0E2FF');
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, w, h);

  // Clouds
  for (const cloud of clouds) {
    cloud.x += cloud.speed;
    if (cloud.x > w + cloud.size * 2) cloud.x = -cloud.size * 2;
    drawCloud(cloud.x, cloud.y, cloud.size);
  }

  // Rolling hills
  drawHills(w, h);
}

function drawCloud(cx, cy, size) {
  ctx.save();
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.beginPath();
  ctx.arc(cx, cy, size * 0.6, 0, Math.PI * 2);
  ctx.arc(cx + size * 0.6, cy + size * 0.1, size * 0.45, 0, Math.PI * 2);
  ctx.arc(cx - size * 0.5, cy + size * 0.1, size * 0.4, 0, Math.PI * 2);
  ctx.arc(cx + size * 0.2, cy - size * 0.2, size * 0.35, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawHills(w, h) {
  // Back hill
  const grad1 = ctx.createLinearGradient(0, h * 0.3, 0, h * 0.65);
  grad1.addColorStop(0, '#5DBB63');
  grad1.addColorStop(1, '#4CAF50');
  ctx.fillStyle = grad1;
  ctx.beginPath();
  ctx.moveTo(0, h * 0.65);
  ctx.bezierCurveTo(w * 0.1, h * 0.3, w * 0.35, h * 0.38, w * 0.5, h * 0.42);
  ctx.bezierCurveTo(w * 0.65, h * 0.46, w * 0.85, h * 0.3, w, h * 0.4);
  ctx.lineTo(w, h * 0.65);
  ctx.closePath();
  ctx.fill();

  // Front pasture
  const grad2 = ctx.createLinearGradient(0, h * 0.45, 0, h);
  grad2.addColorStop(0, '#6DC16D');
  grad2.addColorStop(1, '#55A355');
  ctx.fillStyle = grad2;
  ctx.beginPath();
  ctx.moveTo(0, h * 0.6);
  ctx.bezierCurveTo(w * 0.15, h * 0.5, w * 0.4, h * 0.55, w * 0.55, h * 0.52);
  ctx.bezierCurveTo(w * 0.7, h * 0.49, w * 0.88, h * 0.56, w, h * 0.5);
  ctx.lineTo(w, h);
  ctx.lineTo(0, h);
  ctx.closePath();
  ctx.fill();
}

// --- Animal Drawing ---
function drawGoat(x, y, size, wobble, facing, opacity, isBaby, babyTimer) {
  const scale = isBaby ? 0.5 + 0.5 * (1 - babyTimer / 10000) : 1;
  const s = size * scale;
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.translate(x, y);
  ctx.scale(facing, 1);

  const bob = Math.sin(wobble * 2) * 1.5;

  // Body (fluffy - multiple circles)
  ctx.fillStyle = '#F5F0E8';
  ctx.beginPath(); ctx.arc(0, bob, s * 0.7, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#EDE8DC';
  ctx.beginPath(); ctx.arc(s * 0.3, bob - s * 0.1, s * 0.5, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(-s * 0.3, bob + s * 0.1, s * 0.45, 0, Math.PI * 2); ctx.fill();

  // Head
  ctx.fillStyle = '#F5F0E8';
  ctx.beginPath(); ctx.arc(s * 0.7, bob - s * 0.5, s * 0.38, 0, Math.PI * 2); ctx.fill();

  // Horns
  ctx.strokeStyle = '#C4A882';
  ctx.lineWidth = s * 0.12;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(s * 0.58, bob - s * 0.78);
  ctx.quadraticCurveTo(s * 0.45, bob - s * 1.05, s * 0.55, bob - s * 1.1);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(s * 0.82, bob - s * 0.78);
  ctx.quadraticCurveTo(s * 0.95, bob - s * 1.05, s * 0.85, bob - s * 1.1);
  ctx.stroke();

  // Eyes
  ctx.fillStyle = '#333';
  ctx.beginPath(); ctx.arc(s * 0.78, bob - s * 0.52, s * 0.07, 0, Math.PI * 2); ctx.fill();

  // Blush
  ctx.fillStyle = 'rgba(255,150,150,0.4)';
  ctx.beginPath(); ctx.ellipse(s * 0.62, bob - s * 0.42, s * 0.12, s * 0.07, 0, 0, Math.PI * 2); ctx.fill();

  // Legs
  ctx.strokeStyle = '#C4A882';
  ctx.lineWidth = s * 0.1;
  const legY = bob + s * 0.6;
  [[-s*0.3, 0], [-s*0.1, 0.1], [s*0.1, 0], [s*0.3, 0.1]].forEach(([lx, phase]) => {
    const legBob = Math.sin(wobble * 3 + phase * Math.PI) * s * 0.1;
    ctx.beginPath();
    ctx.moveTo(lx, legY - s * 0.2);
    ctx.lineTo(lx + legBob, legY + s * 0.45);
    ctx.stroke();
  });

  // Beard
  ctx.strokeStyle = '#D4C8B0';
  ctx.lineWidth = s * 0.08;
  ctx.beginPath();
  ctx.moveTo(s * 0.7, bob - s * 0.18);
  ctx.lineTo(s * 0.72, bob + s * 0.1);
  ctx.stroke();

  ctx.restore();
}

function drawSheep(x, y, size, wobble, facing, opacity, isBaby, babyTimer) {
  const scale = isBaby ? 0.5 + 0.5 * (1 - babyTimer / 10000) : 1;
  const s = size * scale;
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.translate(x, y);
  ctx.scale(facing, 1);

  const bob = Math.sin(wobble * 2) * 1.5;

  // Fluffy pom-pom wool body
  const woolColors = ['#FAFAFA', '#F5F5F5', '#EFEFEF'];
  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * Math.PI * 2;
    const rx = Math.cos(angle) * s * 0.65;
    const ry = Math.sin(angle) * s * 0.42;
    ctx.fillStyle = woolColors[i % 3];
    ctx.beginPath();
    ctx.arc(rx, ry + bob, s * 0.38, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = '#F0F0F0';
  ctx.beginPath(); ctx.arc(0, bob, s * 0.55, 0, Math.PI * 2); ctx.fill();

  // Black face
  ctx.fillStyle = '#2C2C2C';
  ctx.beginPath(); ctx.arc(s * 0.75, bob - s * 0.4, s * 0.32, 0, Math.PI * 2); ctx.fill();

  // White eyes
  ctx.fillStyle = 'white';
  ctx.beginPath(); ctx.arc(s * 0.82, bob - s * 0.44, s * 0.1, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#333';
  ctx.beginPath(); ctx.arc(s * 0.84, bob - s * 0.44, s * 0.06, 0, Math.PI * 2); ctx.fill();

  // Ears
  ctx.fillStyle = '#1A1A1A';
  ctx.beginPath(); ctx.ellipse(s * 0.58, bob - s * 0.55, s * 0.1, s * 0.07, -0.4, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(s * 0.92, bob - s * 0.55, s * 0.1, s * 0.07, 0.4, 0, Math.PI*2); ctx.fill();

  // Black legs
  ctx.fillStyle = '#2C2C2C';
  const legY = bob + s * 0.55;
  [[-s*0.35, 0], [-s*0.12, 0.2], [s*0.12, 0], [s*0.35, 0.2]].forEach(([lx, phase]) => {
    const legBob = Math.sin(wobble * 3 + phase * Math.PI) * s * 0.08;
    ctx.fillRect(lx - s*0.06 + legBob, legY - s*0.1, s * 0.12, s * 0.55);
  });

  ctx.restore();
}

function drawCow(x, y, size, wobble, facing, opacity, isBaby, babyTimer) {
  const scale = isBaby ? 0.5 + 0.5 * (1 - babyTimer / 10000) : 1;
  const s = size * scale;
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.translate(x, y);
  ctx.scale(facing, 1);

  const bob = Math.sin(wobble * 1.5) * 1.5;

  // Body (white with patches)
  ctx.fillStyle = '#FAFAFA';
  ctx.beginPath(); ctx.ellipse(0, bob, s * 0.9, s * 0.62, 0, 0, Math.PI * 2); ctx.fill();

  // Brown/black patches
  ctx.fillStyle = '#5C3317';
  ctx.beginPath(); ctx.ellipse(-s*0.2, bob - s*0.15, s*0.35, s*0.28, -0.3, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(s*0.5, bob + s*0.1, s*0.28, s*0.22, 0.4, 0, Math.PI*2); ctx.fill();

  // Head
  ctx.fillStyle = '#FAFAFA';
  ctx.beginPath(); ctx.ellipse(s*0.95, bob - s*0.35, s*0.38, s*0.32, 0.2, 0, Math.PI*2); ctx.fill();

  // Snout
  ctx.fillStyle = '#FFB6C1';
  ctx.beginPath(); ctx.ellipse(s*1.18, bob - s*0.22, s*0.18, s*0.13, 0, 0, Math.PI*2); ctx.fill();

  // Nostrils
  ctx.fillStyle = '#D47F8F';
  ctx.beginPath(); ctx.arc(s*1.12, bob - s*0.2, s*0.04, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(s*1.24, bob - s*0.2, s*0.04, 0, Math.PI*2); ctx.fill();

  // Eyes
  ctx.fillStyle = '#333';
  ctx.beginPath(); ctx.arc(s*0.9, bob - s*0.48, s*0.08, 0, Math.PI*2); ctx.fill();

  // Horns
  ctx.strokeStyle = '#C4A882';
  ctx.lineWidth = s * 0.1;
  ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(s*0.82, bob-s*0.6); ctx.quadraticCurveTo(s*0.7, bob-s*0.82, s*0.78, bob-s*0.88); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(s*1.02, bob-s*0.6); ctx.quadraticCurveTo(s*1.14, bob-s*0.82, s*1.06, bob-s*0.88); ctx.stroke();

  // Udder
  ctx.fillStyle = '#FFB6C1';
  ctx.beginPath(); ctx.ellipse(s*0.15, bob + s*0.52, s*0.25, s*0.15, 0, 0, Math.PI*2); ctx.fill();
  ctx.strokeStyle = '#FF9DAB';
  ctx.lineWidth = s * 0.06;
  [-s*0.08, s*0.08, s*0.22, s*0.36].forEach(tx => {
    ctx.beginPath(); ctx.moveTo(tx + s*0.05, bob + s*0.62); ctx.lineTo(tx + s*0.05, bob + s*0.72); ctx.stroke();
  });

  // Legs
  ctx.strokeStyle = '#8B7355';
  ctx.lineWidth = s * 0.13;
  const legY = bob + s * 0.65;
  [[-s*0.5, 0], [-s*0.2, 0.15], [s*0.2, 0], [s*0.5, 0.15]].forEach(([lx, phase]) => {
    const legBob = Math.sin(wobble * 2 + phase * Math.PI) * s * 0.06;
    ctx.beginPath(); ctx.moveTo(lx, legY-s*0.15); ctx.lineTo(lx+legBob, legY+s*0.45); ctx.stroke();
  });

  // Tail
  ctx.strokeStyle = '#C4A882';
  ctx.lineWidth = s * 0.08;
  ctx.beginPath();
  ctx.moveTo(-s*0.88, bob - s*0.1);
  ctx.quadraticCurveTo(-s*1.1, bob + s*0.2, -s*1.0, bob + s*0.4);
  ctx.stroke();

  ctx.restore();
}

function drawHorse(x, y, size, wobble, facing, opacity, isBaby, babyTimer) {
  const scale = isBaby ? 0.5 + 0.5 * (1 - babyTimer / 10000) : 1;
  const s = size * scale;
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.translate(x, y);
  ctx.scale(facing, 1);

  const bob = Math.sin(wobble * 2) * 1.5;

  // Body (chestnut)
  ctx.fillStyle = '#8B4513';
  ctx.beginPath(); ctx.ellipse(0, bob, s * 1.0, s * 0.55, 0, 0, Math.PI * 2); ctx.fill();

  // Neck
  ctx.fillStyle = '#7A3B10';
  ctx.beginPath();
  ctx.moveTo(s*0.5, bob - s*0.3);
  ctx.lineTo(s*0.85, bob - s*0.75);
  ctx.lineTo(s*1.1, bob - s*0.6);
  ctx.lineTo(s*0.75, bob - s*0.15);
  ctx.closePath();
  ctx.fill();

  // Head
  ctx.fillStyle = '#8B4513';
  ctx.beginPath(); ctx.ellipse(s*1.05, bob - s*0.88, s*0.25, s*0.38, -0.2, 0, Math.PI*2); ctx.fill();

  // Snout
  ctx.fillStyle = '#A0522D';
  ctx.beginPath(); ctx.ellipse(s*1.2, bob - s*0.68, s*0.12, s*0.1, 0.4, 0, Math.PI*2); ctx.fill();

  // Nostril
  ctx.fillStyle = '#6B2E08';
  ctx.beginPath(); ctx.arc(s*1.24, bob - s*0.65, s*0.04, 0, Math.PI*2); ctx.fill();

  // Eye
  ctx.fillStyle = '#1A0A00';
  ctx.beginPath(); ctx.arc(s*0.98, bob - s*1.02, s*0.08, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  ctx.beginPath(); ctx.arc(s*1.01, bob - s*1.05, s*0.03, 0, Math.PI*2); ctx.fill();

  // Ear
  ctx.fillStyle = '#8B4513';
  ctx.beginPath(); ctx.moveTo(s*0.88, bob-s*1.2); ctx.lineTo(s*0.94, bob-s*1.38); ctx.lineTo(s*1.0, bob-s*1.22); ctx.closePath(); ctx.fill();

  // Mane
  ctx.strokeStyle = '#4A1800';
  ctx.lineWidth = s * 0.1;
  ctx.lineCap = 'round';
  const maneWobble = Math.sin(wobble * 1.5);
  for (let i = 0; i < 5; i++) {
    const mx = s * 0.65 - i * s * 0.1;
    const my = bob - s * 0.65 + i * s * 0.05;
    ctx.beginPath();
    ctx.moveTo(mx, my);
    ctx.quadraticCurveTo(mx + s*0.12 + maneWobble*s*0.05, my + s*0.22, mx + s*0.05, my + s*0.38);
    ctx.stroke();
  }

  // Tail
  ctx.strokeStyle = '#3A1200';
  ctx.lineWidth = s * 0.1;
  const tailWobble = Math.sin(wobble * 2 + 1);
  for (let i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.moveTo(-s*0.98, bob - s*0.1 + i*s*0.08);
    ctx.quadraticCurveTo(-s*1.25 + tailWobble*s*0.1, bob + s*0.3 + i*s*0.08, -s*1.2 + tailWobble*s*0.12, bob + s*0.55 + i*s*0.08);
    ctx.stroke();
  }

  // Legs
  ctx.strokeStyle = '#5C2E08';
  ctx.lineWidth = s * 0.12;
  const legY = bob + s * 0.55;
  [[-s*0.6, 0], [-s*0.3, 0.3], [s*0.25, 0.1], [s*0.55, 0.4]].forEach(([lx, phase]) => {
    const legBob = Math.sin(wobble * 3 + phase * Math.PI) * s * 0.08;
    ctx.beginPath(); ctx.moveTo(lx, legY-s*0.1); ctx.lineTo(lx+legBob, legY+s*0.55); ctx.stroke();
    ctx.strokeStyle = '#2C1504';
    ctx.lineWidth = s * 0.18;
    ctx.beginPath(); ctx.moveTo(lx+legBob, legY+s*0.5); ctx.lineTo(lx+legBob, legY+s*0.6); ctx.stroke();
    ctx.strokeStyle = '#5C2E08';
    ctx.lineWidth = s * 0.12;
  });

  ctx.restore();
}

function drawTotoro(ts) {
  const w = canvas.width, h = canvas.height;
  const cx = w / 2;
  const cy = h * 0.5;
  const s = Math.min(w, h) * 0.22;

  const bounce = Math.sin(ts * 0.002) * s * 0.04;
  const sway = Math.sin(ts * 0.0015) * s * 0.06;

  ctx.save();
  ctx.translate(cx + sway, cy + bounce);

  // Shadow
  ctx.fillStyle = 'rgba(0,0,0,0.15)';
  ctx.beginPath();
  ctx.ellipse(0, s * 0.85, s * 0.55, s * 0.12, 0, 0, Math.PI * 2);
  ctx.fill();

  // Main body (gray)
  ctx.fillStyle = '#6B7280';
  ctx.beginPath();
  ctx.arc(0, 0, s * 0.75, 0, Math.PI * 2);
  ctx.fill();

  // White belly
  ctx.fillStyle = '#F0F0EC';
  ctx.beginPath();
  ctx.ellipse(0, s * 0.18, s * 0.5, s * 0.58, 0, 0, Math.PI * 2);
  ctx.fill();

  // Belly markings
  ctx.strokeStyle = '#D4D4CC';
  ctx.lineWidth = s * 0.04;
  ctx.lineCap = 'round';
  for (let i = 0; i < 4; i++) {
    const my = s * (0.05 + i * 0.18);
    ctx.beginPath();
    ctx.arc(0, my + s*0.12, s * (0.18 + i*0.06), Math.PI * 0.2, Math.PI * 0.8);
    ctx.stroke();
  }

  // Ears (pointy)
  ctx.fillStyle = '#6B7280';
  ctx.beginPath();
  ctx.moveTo(-s * 0.35, -s * 0.65);
  ctx.lineTo(-s * 0.5, -s * 1.15);
  ctx.lineTo(-s * 0.12, -s * 0.75);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(s * 0.35, -s * 0.65);
  ctx.lineTo(s * 0.5, -s * 1.15);
  ctx.lineTo(s * 0.12, -s * 0.75);
  ctx.closePath();
  ctx.fill();

  // Inner ear
  ctx.fillStyle = '#8B9299';
  ctx.beginPath();
  ctx.moveTo(-s*0.32, -s*0.72); ctx.lineTo(-s*0.44, -s*1.05); ctx.lineTo(-s*0.18, -s*0.78); ctx.closePath(); ctx.fill();
  ctx.beginPath();
  ctx.moveTo(s*0.32, -s*0.72); ctx.lineTo(s*0.44, -s*1.05); ctx.lineTo(s*0.18, -s*0.78); ctx.closePath(); ctx.fill();

  // Eyes (wide white)
  ctx.fillStyle = 'white';
  ctx.beginPath(); ctx.ellipse(-s*0.25, -s*0.28, s*0.2, s*0.25, 0, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(s*0.25, -s*0.28, s*0.2, s*0.25, 0, 0, Math.PI*2); ctx.fill();

  // Pupils
  ctx.fillStyle = '#1A1A1A';
  ctx.beginPath(); ctx.ellipse(-s*0.25, -s*0.26, s*0.13, s*0.17, 0, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(s*0.25, -s*0.26, s*0.13, s*0.17, 0, 0, Math.PI*2); ctx.fill();

  // Eye shine
  ctx.fillStyle = 'white';
  ctx.beginPath(); ctx.arc(-s*0.2, -s*0.32, s*0.05, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(s*0.3, -s*0.32, s*0.05, 0, Math.PI*2); ctx.fill();

  // Nose
  ctx.fillStyle = '#4A4A50';
  ctx.beginPath(); ctx.arc(0, -s*0.1, s*0.05, 0, Math.PI*2); ctx.fill();

  // Whiskers
  ctx.strokeStyle = '#4A4A50';
  ctx.lineWidth = s * 0.025;
  [[-1, -0.5], [-1, -0.15], [-1, 0.2], [1, -0.5], [1, -0.15], [1, 0.2]].forEach(([dir, angle]) => {
    ctx.beginPath();
    ctx.moveTo(dir * s * 0.06, s * 0.01);
    ctx.lineTo(dir * s * 0.42, s * (angle * 0.15));
    ctx.stroke();
  });

  // Dancing arms
  const armAngle = Math.sin(ts * 0.003) * 0.5;
  ctx.strokeStyle = '#6B7280';
  ctx.lineWidth = s * 0.12;
  ctx.lineCap = 'round';

  ctx.save();
  ctx.translate(-s * 0.72, -s * 0.05);
  ctx.rotate(-0.6 + armAngle);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(-s * 0.4, s * 0.1);
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.translate(s * 0.72, -s * 0.05);
  ctx.rotate(0.6 - armAngle);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(s * 0.4, s * 0.1);
  ctx.stroke();
  ctx.restore();

  // Chest markings
  ctx.fillStyle = '#9BA3AD';
  for (let i = -2; i <= 2; i++) {
    ctx.beginPath();
    ctx.arc(i * s * 0.14, s * 0.55, s * 0.04, 0, Math.PI * 2);
    ctx.fill();
  }

  // Feet
  ctx.fillStyle = '#5A6270';
  ctx.beginPath(); ctx.ellipse(-s*0.28, s*0.75, s*0.22, s*0.13, -0.2, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(s*0.28, s*0.75, s*0.22, s*0.13, 0.2, 0, Math.PI*2); ctx.fill();

  ctx.restore();
}

function drawAnimal(animal, ts) {
  const size = getAnimalSize(animal.type);
  if (animal.isCombusting) {
    animal.sparkles.forEach(sp => {
      ctx.save();
      ctx.globalAlpha = sp.life * 0.9;
      ctx.fillStyle = sp.color;
      ctx.beginPath();
      ctx.arc(sp.x, sp.y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    const progress = animal.combustTimer / 1500;
    ctx.save();
    ctx.globalAlpha = progress * 0.8;
    if (progress < 0.3) {
      ctx.fillStyle = `rgba(100,100,100,${progress * 2})`;
      ctx.beginPath();
      ctx.arc(animal.x, animal.y, size * progress * 3, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
    return;
  }

  if (animal.type === 'goat') drawGoat(animal.x, animal.y, size, animal.wobble, animal.facing, animal.opacity, animal.isBaby, animal.babyTimer);
  else if (animal.type === 'sheep') drawSheep(animal.x, animal.y, size, animal.wobble, animal.facing, animal.opacity, animal.isBaby, animal.babyTimer);
  else if (animal.type === 'cow') drawCow(animal.x, animal.y, size, animal.wobble, animal.facing, animal.opacity, animal.isBaby, animal.babyTimer);
  else if (animal.type === 'horse') drawHorse(animal.x, animal.y, size, animal.wobble, animal.facing, animal.opacity, animal.isBaby, animal.babyTimer);
}

function drawHUD() {
  const padding = 12;
  const hudText = `🐐 ${state.goats}  🐑 ${state.sheep}  🐄 ${state.cows}  🐴 ${state.horses}`;

  ctx.save();
  ctx.fillStyle = 'rgba(0,0,0,0.35)';
  ctx.beginPath();
  ctx.roundRect(padding, padding, 280, 40, 8);
  ctx.fill();

  ctx.fillStyle = 'white';
  ctx.font = 'bold 18px Arial';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText(hudText, padding + 10, padding + 20);
  ctx.restore();
}

function drawHearts(dt) {
  state.hearts = state.hearts.filter(h => h.life > 0);
  for (const h of state.hearts) {
    h.y += h.vy;
    h.life -= dt * 0.001;
    ctx.save();
    ctx.globalAlpha = h.life;
    ctx.fillStyle = '#FF69B4';
    ctx.font = `${h.size}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('♥', h.x, h.y);
    ctx.restore();
  }
}

function drawConfetti(dt) {
  state.confetti = state.confetti.filter(c => c.life > 0);
  for (const c of state.confetti) {
    c.x += c.vx;
    c.y += c.vy;
    c.rotation += c.rotSpeed;
    c.life -= dt * 0.0003;
    if (c.y > canvas.height + 20) { c.life = 0; continue; }
    ctx.save();
    ctx.globalAlpha = Math.min(1, c.life * 2);
    ctx.translate(c.x, c.y);
    ctx.rotate(c.rotation);
    ctx.fillStyle = c.color;
    ctx.fillRect(-6, -4, 12, 8);
    ctx.restore();
  }
}

// --- Main Game Loop ---
function gameLoop(timestamp) {
  const dt = Math.min(100, timestamp - lastTime);
  lastTime = timestamp;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground(timestamp);

  const b = getPastureBounds();

  for (const animal of [...state.animals]) {
    if (animal.isCombusting) {
      animal.combustTimer -= dt;
      animal.sparkles.forEach(sp => {
        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.vy += 0.05;
        sp.life -= dt * 0.001;
      });
      animal.sparkles = animal.sparkles.filter(s => s.life > 0);
      if (animal.combustTimer <= 0) {
        removeAnimal(animal);
        continue;
      }
      animal.opacity = animal.combustTimer / 1500;
    } else {
      animal.wobble += dt * 0.002;

      if (Math.random() < 0.005) {
        animal.vx += (Math.random() - 0.5) * 0.15;
        animal.vy += (Math.random() - 0.5) * 0.08;
        const speed = Math.sqrt(animal.vx**2 + animal.vy**2);
        if (speed > 0.4) { animal.vx *= 0.4/speed; animal.vy *= 0.4/speed; }
      }

      animal.x += animal.vx;
      animal.y += animal.vy * 0.4;

      if (animal.x < b.left + 10) { animal.vx = Math.abs(animal.vx); }
      if (animal.x > b.right - 10) { animal.vx = -Math.abs(animal.vx); }
      if (animal.y < b.top + 5) { animal.vy = Math.abs(animal.vy); }
      if (animal.y > b.bottom - 5) { animal.vy = -Math.abs(animal.vy); }

      animal.facing = animal.vx >= 0 ? 1 : -1;

      if (animal.isBaby) {
        animal.babyTimer -= dt;
        if (animal.babyTimer <= 0) {
          animal.isBaby = false;
          animal.babyTimer = 0;
        }
      }
    }
  }

  // Depth sort
  state.animals.sort((a, b) => a.y - b.y);

  for (const animal of state.animals) {
    drawAnimal(animal, timestamp);
  }

  if (state.phase === 'win' || state.won) {
    drawTotoro(timestamp);
    if (state.confetti.length < 40) spawnConfetti();
  }

  drawHearts(dt);
  drawConfetti(dt);
  drawHUD();

  requestAnimationFrame(gameLoop);
}

// --- Utility ---
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Start game when DOM is ready
window.addEventListener('DOMContentLoaded', init);
