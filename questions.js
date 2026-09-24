// AP Physics 1 Question Bank
// Each question: { tier, question, options: [A, B, C, D], correct: 0-3 }

const QUESTIONS = [
  // ===== TIER 1: Basic Kinematics, Newton's 1st Law, Scalar vs Vector =====
  {
    tier: 1,
    question: "Which of the following is a vector quantity?",
    options: ["Speed", "Distance", "Velocity", "Time"],
    correct: 2
  },
  {
    tier: 1,
    question: "Which of the following is a scalar quantity?",
    options: ["Displacement", "Force", "Acceleration", "Speed"],
    correct: 3
  },
  {
    tier: 1,
    question: "Newton's First Law states that an object at rest will remain at rest unless:",
    options: [
      "It is heavy enough",
      "An unbalanced force acts on it",
      "It has enough energy",
      "Gravity pulls it"
    ],
    correct: 1
  },
  {
    tier: 1,
    question: "What is the term for the tendency of an object to resist changes in its state of motion?",
    options: ["Gravity", "Friction", "Inertia", "Momentum"],
    correct: 2
  },
  {
    tier: 1,
    question: "Which quantity measures how fast an object moves regardless of direction?",
    options: ["Velocity", "Acceleration", "Speed", "Displacement"],
    correct: 2
  },
  {
    tier: 1,
    question: "A car travels 60 km north and then 60 km south. What is the total displacement?",
    options: ["120 km", "60 km north", "0 km", "60 km south"],
    correct: 2
  },
  {
    tier: 1,
    question: "The SI unit of acceleration is:",
    options: ["m/s", "km/h", "m/s²", "N"],
    correct: 2
  },
  {
    tier: 1,
    question: "An object moving at constant velocity has what net force acting on it?",
    options: ["A large force in the direction of motion", "Zero net force", "A force equal to its weight", "A force equal to its mass"],
    correct: 1
  },
  {
    tier: 1,
    question: "What does the slope of a position-time graph represent?",
    options: ["Acceleration", "Force", "Velocity", "Displacement"],
    correct: 2
  },
  {
    tier: 1,
    question: "A ball is thrown upward. At the highest point, what is its velocity?",
    options: ["Maximum upward velocity", "Zero", "Maximum downward velocity", "Equal to its initial velocity"],
    correct: 1
  },

  // ===== TIER 2: v=at, d=vt+½ат², F=ma, Free Fall =====
  {
    tier: 2,
    question: "A car starts from rest and accelerates at 4 m/s² for 5 seconds. What is its final velocity?",
    options: ["10 m/s", "20 m/s", "25 m/s", "40 m/s"],
    correct: 1
  },
  {
    tier: 2,
    question: "Using F = ma, if a 10 kg object has a net force of 30 N applied to it, what is its acceleration?",
    options: ["0.33 m/s²", "3 m/s²", "20 m/s²", "300 m/s²"],
    correct: 1
  },
  {
    tier: 2,
    question: "An object starts from rest and accelerates at 2 m/s² for 4 seconds. How far does it travel?",
    options: ["8 m", "16 m", "32 m", "4 m"],
    correct: 1
  },
  {
    tier: 2,
    question: "A 5 kg box is pushed with a 25 N net force. What is its acceleration?",
    options: ["0.2 m/s²", "5 m/s²", "125 m/s²", "20 m/s²"],
    correct: 1
  },
  {
    tier: 2,
    question: "An object is in free fall (ignore air resistance). Its acceleration is approximately:",
    options: ["0 m/s²", "5 m/s²", "9.8 m/s²", "15 m/s²"],
    correct: 2
  },
  {
    tier: 2,
    question: "A ball is dropped from rest. After 3 seconds, how fast is it falling? (g = 10 m/s²)",
    options: ["10 m/s", "20 m/s", "30 m/s", "40 m/s"],
    correct: 2
  },
  {
    tier: 2,
    question: "What does the slope of a velocity-time graph represent?",
    options: ["Speed", "Displacement", "Acceleration", "Force"],
    correct: 2
  },
  {
    tier: 2,
    question: "A 3 kg object accelerates at 6 m/s². What net force acts on it?",
    options: ["0.5 N", "2 N", "9 N", "18 N"],
    correct: 3
  },
  {
    tier: 2,
    question: "A car moving at 20 m/s decelerates at 4 m/s². How long until it stops?",
    options: ["2 s", "4 s", "5 s", "8 s"],
    correct: 2
  },
  {
    tier: 2,
    question: "An object dropped from a building takes 4 seconds to hit the ground. How tall is the building? (g = 10 m/s²)",
    options: ["40 m", "80 m", "160 m", "20 m"],
    correct: 1
  },

  // ===== TIER 3: Projectile Motion, Work, KE, PE, Conservation of Energy =====
  {
    tier: 3,
    question: "A projectile is launched horizontally. Which component of its velocity changes during flight?",
    options: ["Horizontal only", "Vertical only", "Both equally", "Neither"],
    correct: 1
  },
  {
    tier: 3,
    question: "How much work is done when a 50 N force moves an object 4 m in the direction of the force?",
    options: ["12.5 J", "54 J", "200 J", "46 J"],
    correct: 2
  },
  {
    tier: 3,
    question: "A 2 kg object moving at 6 m/s has what kinetic energy?",
    options: ["6 J", "12 J", "36 J", "72 J"],
    correct: 2
  },
  {
    tier: 3,
    question: "A 5 kg object is held 3 m above the ground. What is its gravitational PE? (g = 10 m/s²)",
    options: ["15 J", "50 J", "150 J", "8 J"],
    correct: 2
  },
  {
    tier: 3,
    question: "A 4 kg ball falls from a height of 5 m. What is its speed just before hitting the ground? (g = 10 m/s²)",
    options: ["5 m/s", "10 m/s", "20 m/s", "50 m/s"],
    correct: 1
  },
  {
    tier: 3,
    question: "No work is done when a force is applied perpendicular to the direction of motion. This is because:",
    options: [
      "The force is too small",
      "The displacement is zero",
      "The angle between force and displacement is 90°",
      "The object has no mass"
    ],
    correct: 2
  },
  {
    tier: 3,
    question: "A horizontal projectile is launched from a cliff. The time to hit the ground depends on:",
    options: [
      "Initial horizontal speed only",
      "Height of the cliff only",
      "Both height and initial speed",
      "Neither — it's constant"
    ],
    correct: 1
  },
  {
    tier: 3,
    question: "Which best describes conservation of mechanical energy?",
    options: [
      "Energy is created as objects move",
      "KE + PE remains constant (no friction)",
      "PE always equals KE",
      "Faster objects have more energy"
    ],
    correct: 1
  },
  {
    tier: 3,
    question: "A 10 kg object is lifted 2 m. How much work was done against gravity? (g = 10 m/s²)",
    options: ["5 J", "20 J", "200 J", "100 J"],
    correct: 2
  },
  {
    tier: 3,
    question: "A ball is thrown horizontally at 20 m/s. After 2 seconds, what is its horizontal displacement?",
    options: ["10 m", "20 m", "40 m", "80 m"],
    correct: 2
  },

  // ===== TIER 4: Momentum, Impulse, Circular Motion, Torque =====
  {
    tier: 4,
    question: "What is the momentum of a 4 kg object moving at 5 m/s?",
    options: ["0.8 kg·m/s", "9 kg·m/s", "20 kg·m/s", "1.25 kg·m/s"],
    correct: 2
  },
  {
    tier: 4,
    question: "Impulse is defined as:",
    options: ["F × d", "F × Δt", "m × v", "F / m"],
    correct: 1
  },
  {
    tier: 4,
    question: "Two objects collide and stick together. This is an example of:",
    options: [
      "Elastic collision",
      "Perfectly inelastic collision",
      "Elastic explosion",
      "Newton's Third Law violation"
    ],
    correct: 1
  },
  {
    tier: 4,
    question: "A 2 kg ball moving at 10 m/s collides with a stationary 3 kg ball and they stick together. What is their combined velocity?",
    options: ["2 m/s", "4 m/s", "6 m/s", "20 m/s"],
    correct: 1
  },
  {
    tier: 4,
    question: "The centripetal force required for circular motion is given by:",
    options: ["F = mvr", "F = mv²/r", "F = m/vr", "F = v²/mr"],
    correct: 1
  },
  {
    tier: 4,
    question: "Torque is calculated as force times:",
    options: ["Mass", "Velocity", "Lever arm (perpendicular distance)", "Acceleration"],
    correct: 2
  },
  {
    tier: 4,
    question: "A 3 kg object moves in a circle of radius 2 m at 4 m/s. What centripetal force is needed?",
    options: ["6 N", "12 N", "24 N", "48 N"],
    correct: 2
  },
  {
    tier: 4,
    question: "Conservation of momentum applies when:",
    options: [
      "Objects have equal masses",
      "Velocities are constant",
      "No external net force acts on the system",
      "Only elastic collisions occur"
    ],
    correct: 2
  },
  {
    tier: 4,
    question: "A 10 N force is applied 0.5 m from a pivot. What torque does it produce?",
    options: ["0.05 N·m", "5 N·m", "10.5 N·m", "20 N·m"],
    correct: 1
  },
  {
    tier: 4,
    question: "As an object moves in a circle at constant speed, its direction of acceleration points:",
    options: [
      "Tangent to the circle",
      "Outward from the center",
      "Toward the center",
      "Perpendicular to the plane"
    ],
    correct: 2
  },

  // ===== TIER 5: Rotational Motion, SHM, Waves, Complex Collisions =====
  {
    tier: 5,
    question: "The period of a mass-spring system is given by T = 2π√(m/k). If the spring constant doubles, the period:",
    options: [
      "Doubles",
      "Halves",
      "Decreases by factor √2",
      "Increases by factor √2"
    ],
    correct: 2
  },
  {
    tier: 5,
    question: "The speed of a wave is related to frequency and wavelength by:",
    options: ["v = f/λ", "v = λ/f", "v = fλ", "v = f²λ"],
    correct: 2
  },
  {
    tier: 5,
    question: "A wave has a frequency of 200 Hz and a wavelength of 2 m. What is its speed?",
    options: ["100 m/s", "200 m/s", "400 m/s", "50 m/s"],
    correct: 2
  },
  {
    tier: 5,
    question: "In simple harmonic motion, maximum speed occurs when:",
    options: [
      "The object is at maximum displacement",
      "The restoring force is maximum",
      "The object passes through equilibrium",
      "The period is shortest"
    ],
    correct: 2
  },
  {
    tier: 5,
    question: "A 3 kg ball moving at 6 m/s collides elastically with a stationary 3 kg ball. After the collision, the first ball's velocity is:",
    options: ["6 m/s", "3 m/s", "0 m/s", "−6 m/s"],
    correct: 2
  },
  {
    tier: 5,
    question: "The moment of inertia of a solid disk depends on:",
    options: [
      "Mass only",
      "Radius only",
      "Both mass and radius",
      "Neither — it's always the same"
    ],
    correct: 2
  },
  {
    tier: 5,
    question: "Angular momentum is conserved when there is no net:",
    options: ["Force", "Velocity", "Torque", "Kinetic energy"],
    correct: 2
  },
  {
    tier: 5,
    question: "A 1 kg object on a spring (k = 100 N/m) oscillates. What is its period? (Use π ≈ 3.14)",
    options: ["0.2 s", "0.628 s", "1 s", "3.14 s"],
    correct: 1
  },
  {
    tier: 5,
    question: "Two waves with the same amplitude traveling in opposite directions can create:",
    options: [
      "A transverse wave only",
      "A longitudinal wave",
      "A standing wave",
      "No wave — they cancel completely"
    ],
    correct: 2
  },
  {
    tier: 5,
    question: "In an elastic collision between two identical masses where one is at rest, the moving mass stops and the stationary mass moves with:",
    options: [
      "Half the original velocity",
      "The original velocity",
      "Twice the original velocity",
      "Zero velocity"
    ],
    correct: 1
  },
  {
    tier: 5,
    question: "A spinning ice skater pulls in their arms. Angular momentum is conserved, so their angular velocity:",
    options: [
      "Decreases because moment of inertia decreases",
      "Increases because moment of inertia decreases",
      "Stays the same",
      "Decreases because they lose energy"
    ],
    correct: 1
  },
  {
    tier: 5,
    question: "Which describes the relationship between frequency and period?",
    options: ["f = T", "f = 1/T", "f = T²", "f = √T"],
    correct: 1
  }
];

// Utility function to get questions by tier
function getQuestionsByTier(tier) {
  return QUESTIONS.filter(q => q.tier === tier);
}

// Get a random question for the current difficulty
function getRandomQuestion(difficulty, usedIndices) {
  const pool = QUESTIONS.filter(q => q.tier === difficulty);
  if (pool.length === 0) return { question: QUESTIONS[0], globalIndex: 0 };

  // Try to avoid recently used questions
  const available = pool.filter(q => !usedIndices.has(QUESTIONS.indexOf(q)));
  const source = available.length > 0 ? available : pool;

  const q = source[Math.floor(Math.random() * source.length)];
  return { question: q, globalIndex: QUESTIONS.indexOf(q) };
}
