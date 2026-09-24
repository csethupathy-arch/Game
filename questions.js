// AP Physics 1 Question Bank
// Each question: { tier, type, question, options: [A,B,C,D], correct: 0-3 }
// Also supports type:'true-false' (correct: boolean) and type:'short-answer' (answer, tolerance, unit)

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

  // ===== TIER 2: v=at, d=vt+½at², F=ma, Free Fall =====
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
  },

  // ===== NEW MULTIPLE-CHOICE QUESTIONS =====

  // Tier 1 (new)
  {
    tier: 1,
    type: 'multiple-choice',
    question: "According to Newton's Third Law, when a horse pulls a cart forward, the cart:",
    options: [
      "Does not exert any force on the horse",
      "Pulls the horse forward with equal force",
      "Pulls the horse backward with equal force",
      "Pulls the horse backward with greater force"
    ],
    correct: 2,
    explanation: "Newton's 3rd Law: every action has an equal and opposite reaction. The cart pulls back on the horse with the same magnitude force."
  },
  {
    tier: 1,
    type: 'multiple-choice',
    question: "Average velocity is defined as:",
    options: [
      "Total distance divided by time",
      "Total displacement divided by time",
      "Change in speed over time",
      "The maximum speed reached"
    ],
    correct: 1,
    explanation: "Average velocity = total displacement / total time elapsed. It accounts for direction, unlike average speed."
  },
  {
    tier: 1,
    type: 'multiple-choice',
    question: "Which of the following is the correct SI unit for measuring force?",
    options: ["Joule", "Watt", "Newton", "Pascal"],
    correct: 2,
    explanation: "The Newton (N = kg·m/s²) is the SI unit of force, defined by F = ma."
  },

  // Tier 2 (new)
  {
    tier: 2,
    type: 'multiple-choice',
    question: "A 10 kg box slides on a surface with coefficient of kinetic friction μₖ = 0.3. What is the friction force? (g = 10 m/s²)",
    options: ["3 N", "30 N", "0.3 N", "100 N"],
    correct: 1,
    explanation: "Friction force = μₖ × N = μₖ × mg = 0.3 × 10 × 10 = 30 N."
  },
  {
    tier: 2,
    type: 'multiple-choice',
    question: "What is the weight of a 12 kg object on Earth? (g = 10 m/s²)",
    options: ["12 N", "1.2 N", "120 N", "1200 N"],
    correct: 2,
    explanation: "Weight = mg = 12 × 10 = 120 N."
  },
  {
    tier: 2,
    type: 'multiple-choice',
    question: "A block sits on an inclined plane at angle θ. The component of gravity along the incline is:",
    options: ["mg", "mg·cosθ", "mg·sinθ", "mg·tanθ"],
    correct: 2,
    explanation: "The gravitational component parallel to the incline is mg·sinθ. The component perpendicular (into the surface) is mg·cosθ."
  },

  // Tier 3 (new)
  {
    tier: 3,
    type: 'multiple-choice',
    question: "A machine does 600 J of work in 12 seconds. What is its power output?",
    options: ["7200 W", "588 W", "50 W", "612 W"],
    correct: 2,
    explanation: "Power = Work / time = 600 / 12 = 50 W."
  },
  {
    tier: 3,
    type: 'multiple-choice',
    question: "A roller coaster car starts from rest at the top of a 20 m hill. What is its speed at the bottom? (g = 10 m/s²)",
    options: ["10 m/s", "20 m/s", "14.1 m/s", "200 m/s"],
    correct: 1,
    explanation: "Conservation of energy: mgh = ½mv², so v = √(2gh) = √(2×10×20) = √400 = 20 m/s."
  },
  {
    tier: 3,
    type: 'multiple-choice',
    question: "For a projectile launched at an angle, maximum horizontal range is achieved at a launch angle of:",
    options: ["30°", "45°", "60°", "90°"],
    correct: 1,
    explanation: "Maximum range occurs at 45° because this optimally balances horizontal velocity and time of flight."
  },

  // Tier 4 (new)
  {
    tier: 4,
    type: 'multiple-choice',
    question: "According to the Law of Universal Gravitation, if the distance between two masses doubles, the gravitational force:",
    options: ["Doubles", "Halves", "Quadruples", "Is reduced by a factor of 4"],
    correct: 3,
    explanation: "F = Gm₁m₂/r². Doubling r makes r² four times larger, so force is reduced by a factor of 4."
  },
  {
    tier: 4,
    type: 'multiple-choice',
    question: "Two charged particles each with charge q are separated by distance r. If both charges are doubled, the electric force:",
    options: ["Doubles", "Stays the same", "Quadruples", "Is halved"],
    correct: 2,
    explanation: "Coulomb's law: F = kq₁q₂/r². Doubling both q₁ and q₂ multiplies the force by 2 × 2 = 4."
  },
  {
    tier: 4,
    type: 'multiple-choice',
    question: "The centripetal acceleration of an object moving in a circle of radius r at speed v is:",
    options: ["v/r", "v²/r", "vr", "r/v²"],
    correct: 1,
    explanation: "Centripetal acceleration a = v²/r, always pointing toward the center of the circle."
  },

  // Tier 5 (new)
  {
    tier: 5,
    type: 'multiple-choice',
    question: "Two resistors of 4 Ω and 6 Ω are connected in series to a 20 V battery. What is the current?",
    options: ["2 A", "5 A", "1.2 A", "0.5 A"],
    correct: 0,
    explanation: "Total resistance = 4 + 6 = 10 Ω. I = V/R = 20/10 = 2 A."
  },
  {
    tier: 5,
    type: 'multiple-choice',
    question: "According to Ohm's Law, if resistance triples while voltage stays constant, the current:",
    options: ["Triples", "Stays the same", "Is cut to one-third", "Doubles"],
    correct: 2,
    explanation: "I = V/R. If R triples, I = V/(3R) = one-third of the original current."
  },
  {
    tier: 5,
    type: 'multiple-choice',
    question: "The period of a pendulum is T = 2π√(L/g). If the length increases by a factor of 4, the period:",
    options: ["Quadruples", "Doubles", "Stays the same", "Is halved"],
    correct: 1,
    explanation: "T ∝ √L. If L → 4L, then T → √(4L/g) × 2π = 2 × original period. The period doubles."
  },

  // ===== TRUE/FALSE QUESTIONS =====

  // Tier 1
  {
    tier: 1,
    type: 'true-false',
    question: "An object moving at constant speed must have zero acceleration.",
    correct: false,
    explanation: "False. If the object's direction changes (e.g., circular motion), velocity changes even at constant speed, so acceleration is nonzero."
  },
  {
    tier: 1,
    type: 'true-false',
    question: "The SI unit of force is the Newton (N).",
    correct: true,
    explanation: "True. One Newton equals 1 kg·m/s², defined by Newton's Second Law F = ma."
  },
  {
    tier: 1,
    type: 'true-false',
    question: "Distance traveled is always greater than or equal to the magnitude of displacement.",
    correct: true,
    explanation: "True. Displacement is the straight-line distance between start and end; the actual path length (distance) is always ≥ the displacement magnitude."
  },

  // Tier 2
  {
    tier: 2,
    type: 'true-false',
    question: "In free fall, a heavier object falls faster than a lighter one (ignoring air resistance).",
    correct: false,
    explanation: "False. Galileo demonstrated that all objects fall with the same acceleration g ≈ 9.8 m/s² regardless of mass."
  },
  {
    tier: 2,
    type: 'true-false',
    question: "A net force of zero means an object must be at rest.",
    correct: false,
    explanation: "False. Zero net force means zero acceleration (Newton's 1st Law). The object could be moving at constant velocity."
  },
  {
    tier: 2,
    type: 'true-false',
    question: "The area under a velocity-time graph gives the displacement of the object.",
    correct: true,
    explanation: "True. Displacement = ∫v dt, which is geometrically the area under the v-t curve."
  },

  // Tier 3
  {
    tier: 3,
    type: 'true-false',
    question: "A projectile's horizontal velocity remains constant throughout its flight (ignoring air resistance).",
    correct: true,
    explanation: "True. With no air resistance, no horizontal force acts on the projectile, so horizontal velocity stays constant."
  },
  {
    tier: 3,
    type: 'true-false',
    question: "A force perpendicular to an object's displacement does zero work on the object.",
    correct: true,
    explanation: "True. W = Fd·cosθ. When θ = 90°, cos90° = 0, so W = 0. The normal force and centripetal force are examples."
  },
  {
    tier: 3,
    type: 'true-false',
    question: "An object's kinetic energy can be negative.",
    correct: false,
    explanation: "False. KE = ½mv² ≥ 0 always, since mass is positive and v² is always non-negative."
  },

  // Tier 4
  {
    tier: 4,
    type: 'true-false',
    question: "In a perfectly elastic collision, both kinetic energy and momentum are conserved.",
    correct: true,
    explanation: "True. Elastic collisions conserve both momentum (always) and kinetic energy (defining property of elastic collisions)."
  },
  {
    tier: 4,
    type: 'true-false',
    question: "An object moving in a circle at constant speed has no acceleration.",
    correct: false,
    explanation: "False. The direction of velocity continuously changes, so there is centripetal acceleration pointing toward the center."
  },
  {
    tier: 4,
    type: 'true-false',
    question: "Impulse and change in momentum have equivalent units.",
    correct: true,
    explanation: "True. Impulse = F·Δt (N·s) and Δp = m·Δv (kg·m/s). Since 1 N = 1 kg·m/s², N·s = kg·m/s."
  },

  // Tier 5
  {
    tier: 5,
    type: 'true-false',
    question: "The period of a simple pendulum depends on the mass of the bob.",
    correct: false,
    explanation: "False. T = 2π√(L/g). The period depends only on length L and gravitational acceleration g, not on mass."
  },
  {
    tier: 5,
    type: 'true-false',
    question: "Angular momentum is conserved when no net external torque acts on a system.",
    correct: true,
    explanation: "True. This is the rotational analogue of Newton's 1st Law — no net torque means L = Iω remains constant."
  },
  {
    tier: 5,
    type: 'true-false',
    question: "In a DC circuit, resistors connected in parallel all have the same voltage across them.",
    correct: true,
    explanation: "True. In parallel, each branch connects the same two nodes, so each resistor experiences the same potential difference."
  },

  // ===== SHORT-ANSWER (NUMERIC) QUESTIONS =====

  // Tier 2
  {
    tier: 2,
    type: 'short-answer',
    question: "A 5 kg object accelerates at 3 m/s². What is the net force acting on it? (F = ma)",
    answer: 15,
    tolerance: 0.5,
    unit: "N",
    explanation: "F = ma = 5 × 3 = 15 N"
  },
  {
    tier: 2,
    type: 'short-answer',
    question: "An object starts from rest and falls freely for 4 seconds. What is its speed? (g = 10 m/s²)",
    answer: 40,
    tolerance: 1,
    unit: "m/s",
    explanation: "v = gt = 10 × 4 = 40 m/s"
  },
  {
    tier: 2,
    type: 'short-answer',
    question: "A 20 kg object rests on Earth's surface. What is its weight? (g = 10 m/s²)",
    answer: 200,
    tolerance: 2,
    unit: "N",
    explanation: "Weight = mg = 20 × 10 = 200 N"
  },
  {
    tier: 2,
    type: 'short-answer',
    question: "An object accelerates from rest at 5 m/s² for 6 seconds. How far does it travel? (x = ½atl²)",
    answer: 90,
    tolerance: 2,
    unit: "m",
    explanation: "x = ½atl² = ½ × 5 × 36 = 90 m"
  },

  // Tier 3
  {
    tier: 3,
    type: 'short-answer',
    question: "How much work is done by a 30 N force moving an object 8 m in the direction of the force?",
    answer: 240,
    tolerance: 2,
    unit: "J",
    explanation: "W = Fd = 30 × 8 = 240 J"
  },
  {
    tier: 3,
    type: 'short-answer',
    question: "A 4 kg object moves at 5 m/s. What is its kinetic energy?",
    answer: 50,
    tolerance: 1,
    unit: "J",
    explanation: "KE = ½mv² = ½ × 4 × 25 = 50 J"
  },
  {
    tier: 3,
    type: 'short-answer',
    question: "A 3 kg object is lifted 4 m above the ground. What is its gravitational potential energy? (g = 10 m/s²)",
    answer: 120,
    tolerance: 2,
    unit: "J",
    explanation: "PE = mgh = 3 × 10 × 4 = 120 J"
  },
  {
    tier: 3,
    type: 'short-answer',
    question: "A 500 J task is completed in 25 seconds. What is the power output?",
    answer: 20,
    tolerance: 0.5,
    unit: "W",
    explanation: "P = W/t = 500 / 25 = 20 W"
  },

  // Tier 4
  {
    tier: 4,
    type: 'short-answer',
    question: "A 3 kg object moves at 8 m/s. What is its momentum?",
    answer: 24,
    tolerance: 0.5,
    unit: "kg·m/s",
    explanation: "p = mv = 3 × 8 = 24 kg·m/s"
  },
  {
    tier: 4,
    type: 'short-answer',
    question: "A 15 N force is applied at the end of a 0.6 m wrench. What torque does it produce?",
    answer: 9,
    tolerance: 0.2,
    unit: "N·m",
    explanation: "τ = F × r = 15 × 0.6 = 9 N·m"
  },
  {
    tier: 4,
    type: 'short-answer',
    question: "A 2 kg object moves in a circle of radius 4 m at 6 m/s. What is the centripetal force?",
    answer: 18,
    tolerance: 0.5,
    unit: "N",
    explanation: "F = mv²/r = 2 × 36 / 4 = 18 N"
  },
  {
    tier: 4,
    type: 'short-answer',
    question: "A force of 8 N acts on an object for 5 seconds. What impulse is delivered to the object?",
    answer: 40,
    tolerance: 0.5,
    unit: "N·s",
    explanation: "J = FΔt = 8 × 5 = 40 N·s"
  },

  // Tier 5
  {
    tier: 5,
    type: 'short-answer',
    question: "A wave has frequency 50 Hz and wavelength 6 m. What is its speed?",
    answer: 300,
    tolerance: 2,
    unit: "m/s",
    explanation: "v = fλ = 50 × 6 = 300 m/s"
  },
  {
    tier: 5,
    type: 'short-answer',
    question: "Two 6 Ω resistors are connected in series across a 24 V battery. What is the current through the circuit?",
    answer: 2,
    tolerance: 0.1,
    unit: "A",
    explanation: "Total R = 6 + 6 = 12 Ω; I = V/R = 24/12 = 2 A"
  },
  {
    tier: 5,
    type: 'short-answer',
    question: "A 1 kg mass on a spring (k = 25 N/m) oscillates. What is its period? (T = 2π√(m/k), use π ≈ 3.14)",
    answer: 1.26,
    tolerance: 0.05,
    unit: "s",
    explanation: "T = 2π√(1/25) = 2π/5 ≈ 1.257 s ≈ 1.26 s"
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
