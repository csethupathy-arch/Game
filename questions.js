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
    question: "A 10 kg box slides on a surface with coefficient of kinetic friction μk = 0.3. What is the friction force? (g = 10 m/s²)",
    options: ["3 N", "30 N", "0.3 N", "100 N"],
    correct: 1,
    explanation: "Friction force = μk × N = μk × mg = 0.3 × 10 × 10 = 30 N."
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
    question: "The centripetal acceleration of an object moving in a circle of radius r at speed v is:",
    options: ["v/r", "v²/r", "vr", "r/v²"],
    correct: 1,
    explanation: "Centripetal acceleration a = v²/r, always pointing toward the center of the circle."
  },

  // Tier 5 (new — electricity-free)
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
    question: "An object accelerates from rest at 5 m/s² for 6 seconds. How far does it travel? (x = ½at²)",
    answer: 90,
    tolerance: 2,
    unit: "m",
    explanation: "x = ½at² = ½ × 5 × 36 = 90 m"
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
    question: "A 1 kg mass on a spring (k = 25 N/m) oscillates. What is its period? (T = 2π√(m/k), use π ≈ 3.14)",
    answer: 1.26,
    tolerance: 0.05,
    unit: "s",
    explanation: "T = 2π√(1/25) = 2π/5 ≈ 1.257 s ≈ 1.26 s"
  },

  // ===== NEW QUESTIONS FROM PDF SOURCES =====

  // ----- KINEMATICS (5 new questions) -----
  {
    tier: 1,
    type: 'multiple-choice',
    question: "A cargo plane flying horizontally at 140 m/s drops one package, then drops a second package exactly 2 seconds later from the same altitude. Ignoring air resistance, how far apart do the two packages land on the ground?",
    options: ["70 m", "140 m", "280 m", "420 m"],
    correct: 2,
    explanation: "Both packages share the plane's horizontal velocity of 140 m/s. The second package is released 2 s after the first, so it starts 2 s behind. The horizontal gap when they land is 140 × 2 = 280 m."
  },
  {
    tier: 2,
    type: 'multiple-choice',
    question: "A cargo plane drops two packages 2 seconds apart while flying at constant horizontal velocity. Ignoring air resistance, what happens to the vertical separation between the two packages as they fall?",
    options: [
      "The separation decreases as both packages accelerate equally.",
      "The separation increases because the first package has been accelerating longer.",
      "The separation remains constant because both experience the same gravitational acceleration.",
      "The separation depends on the mass of each package."
    ],
    correct: 1,
    explanation: "Both packages accelerate at g downward. After the second is dropped, the first already has downward velocity v₁ = gΔt while the second starts at rest. The first continues to pull ahead vertically, so the gap grows."
  },
  {
    tier: 2,
    type: 'multiple-choice',
    question: "Bobby and Sandy each start from rest at the top of frictionless slides of equal height h. Bobby's slide curves steeply at the top before flattening, while Sandy's is a uniform straight incline. Which statement correctly describes their speeds at the bottom?",
    options: [
      "Bobby reaches the bottom faster, so he has a greater average speed.",
      "Both reach the bottom with the same final speed, since both slides have the same height.",
      "Sandy reaches the bottom faster because her straight slide is a shorter path.",
      "Bobby has a higher final speed because his slide is steeper at the top."
    ],
    correct: 1,
    explanation: "By conservation of energy on a frictionless surface, all of the gravitational PE (mgh) converts to kinetic energy regardless of the slide's shape. Both reach the bottom with the same speed v = √(2gh)."
  },
  {
    tier: 3,
    type: 'multiple-choice',
    question: "An eagle flies north at 30 m/s relative to the ground. A turtle walks south at 5 m/s relative to the ground. What is the speed of the eagle as measured by the turtle?",
    options: ["25 m/s", "30 m/s", "35 m/s", "150 m/s"],
    correct: 2,
    explanation: "The eagle moves north at +30 m/s and the turtle moves south at −5 m/s (taking north as positive). Relative velocity of eagle with respect to turtle = 30 − (−5) = 35 m/s northward."
  },
  {
    tier: 1,
    type: 'true-false',
    question: "When two skaters on a frictionless ice rink push off each other from rest, the internal forces between them can change the total momentum of the two-skater system.",
    correct: false,
    explanation: "False. Internal forces appear as Newton's Third Law pairs that cancel within the system. Only an external net force changes a system's total momentum. On frictionless ice, no external horizontal force acts, so total momentum remains zero."
  },

  // ----- DYNAMICS (5 new questions) -----
  {
    tier: 1,
    type: 'multiple-choice',
    question: "A martial artist kicks a target with a force of 200 N. According to Newton's Third Law, which statement correctly describes the target's effect on the foot during the kick?",
    options: [
      "The target exerts no force on the foot.",
      "The target exerts a 100 N force on the foot in the same direction as the kick.",
      "The target exerts a 400 N force on the foot in the opposite direction.",
      "The target exerts an equal 200 N force on the foot in the opposite direction."
    ],
    correct: 3,
    explanation: "Newton's Third Law: action-reaction pairs are equal in magnitude and opposite in direction. The target pushes back on the foot with exactly 200 N."
  },
  {
    tier: 2,
    type: 'multiple-choice',
    question: "A sled of mass m is pulled at constant velocity along a flat surface by a force F applied at an angle θ above the horizontal. Which expression correctly gives the coefficient of kinetic friction μk?",
    options: [
      "μk = mg / F",
      "μk = F cosθ / (mg − F sinθ)",
      "μk = F sinθ / mg",
      "μk = F / mg"
    ],
    correct: 1,
    explanation: "At constant velocity, net force = 0. Horizontal: F cosθ = μkN. Vertical: N = mg − F sinθ. Therefore μk = F cosθ / (mg − F sinθ)."
  },
  {
    tier: 2,
    type: 'short-answer',
    question: "An Atwood machine has a 3 kg mass and a 5 kg mass connected by a massless string over a frictionless pulley. What is the tension in the string during the motion? (g = 10 m/s²)",
    answer: 37.5,
    tolerance: 0.5,
    unit: "N",
    explanation: "Acceleration: a = (m₂ − m₁)g / (m₁ + m₂) = (2 × 10) / 8 = 2.5 m/s². Tension: T = m₁(g + a) = 3 × 12.5 = 37.5 N."
  },
  {
    tier: 2,
    type: 'multiple-choice',
    question: "Three identical closed jars sit on separate scales. Jar A contains 3 fireflies flying inside. Jar B contains 1 firefly flying inside. Jar C contains 1 firefly resting on the bottom. Rank the scale readings from greatest to least.",
    options: [
      "A = B = C, since the total weight of fireflies is what matters",
      "A > B = C",
      "A > B > C, since flying fireflies push harder on the air",
      "C > B, because the resting firefly adds weight directly to the jar floor"
    ],
    correct: 1,
    explanation: "In a closed jar, a flying insect pushes air downward, and the air pressure pushes down on the jar floor with a force equal to the fly's weight. Whether flying or resting, one fly contributes the same to the scale. Jar A has 3 flies, B and C each have 1: A > B = C."
  },
  {
    tier: 3,
    type: 'multiple-choice',
    question: "A 20 kg sled slides down a 30° slope at constant velocity. What is the coefficient of kinetic friction between the sled and the slope? (g = 10 m/s², sin30° = 0.50, cos30° = 0.87)",
    options: ["0.29", "0.50", "0.58", "0.87"],
    correct: 2,
    explanation: "At constant velocity, net force = 0. Along the slope: mg sin30° = μk mg cos30°. Dividing: μk = tan30° = 0.50 / 0.87 ≈ 0.58."
  },

  // ----- WORK / ENERGY / POWER (5 new questions) -----
  {
    tier: 1,
    type: 'multiple-choice',
    question: "After a single push on a frictionless horizontal surface, can a block slide up a frictionless inclined plane at constant speed?",
    options: [
      "No — on a frictionless incline the block must accelerate or decelerate; constant speed requires a continuous applied force.",
      "Yes — if pushed with just the right initial speed, it moves at constant speed.",
      "Yes — inertia keeps its speed constant on any frictionless surface.",
      "No — the block will immediately stop at the base of the incline."
    ],
    correct: 0,
    explanation: "On a frictionless incline, gravity's component along the slope (mg sinθ) acts unopposed after the push ends. The block must decelerate while going up. Constant speed requires a continuously applied force to balance mg sinθ."
  },
  {
    tier: 2,
    type: 'multiple-choice',
    question: "Under what condition can a block slide DOWN a frictionless inclined plane at constant velocity?",
    options: [
      "Only if an external force pushes it up the slope at just the right magnitude.",
      "It is impossible: a block on a frictionless incline always accelerates downward.",
      "It can happen if the incline angle is exactly 45°.",
      "Only if the block's weight equals the normal force."
    ],
    correct: 1,
    explanation: "On a frictionless incline, the net force along the slope is always mg sinθ downward (nonzero for any angle > 0°). Nothing balances this, so the block always accelerates. Constant speed needs friction to oppose gravity — impossible without friction."
  },
  {
    tier: 2,
    type: 'short-answer',
    question: "Bob pushes a 30 kg box across a horizontal floor at constant speed v = 1.0 m/s. The coefficient of kinetic friction is μk = 0.30. What power does Bob exert on the box? (g = 10 m/s²)",
    answer: 90,
    tolerance: 1,
    unit: "W",
    explanation: "At constant speed, applied force = friction force = μk mg = 0.30 × 30 × 10 = 90 N. Power = F × v = 90 × 1.0 = 90 W."
  },
  {
    tier: 2,
    type: 'multiple-choice',
    question: "A roller coaster car must maintain contact with the track at the top of a circular loop of radius R. Starting from rest, what is the minimum height h (measured from the bottom of the loop) needed to barely complete the loop? (Ignore friction.)",
    options: ["h ≥ R", "h ≥ 3R/2", "h ≥ 2R", "h ≥ 5R/2"],
    correct: 3,
    explanation: "At the top of the loop (height 2R), minimum speed gives mg = mv²/R → v² = gR. Energy conservation: mgh = ½mv² + mg(2R) → h = v²/(2g) + 2R = R/2 + 2R = 5R/2."
  },
  {
    tier: 1,
    type: 'true-false',
    question: "Ball A is dropped from half the height of Ball B. Ball A strikes the ground with half the speed of Ball B.",
    correct: false,
    explanation: "False. By energy conservation v = √(2gh). If h_A = h_B/2, then v_A = √(g h_B) = v_B / √2 ≈ 0.71 v_B. Ball A reaches about 71% of Ball B's speed, not 50%."
  },

  // ----- MOMENTUM (5 new questions) -----
  {
    tier: 1,
    type: 'multiple-choice',
    question: "A cart rolls freely on a frictionless surface at constant speed while water slowly leaks out through a hole in the bottom (the water falls straight down). What happens to the cart's speed and kinetic energy?",
    options: [
      "Speed increases; kinetic energy increases.",
      "Speed stays constant; kinetic energy decreases.",
      "Speed decreases; kinetic energy stays constant.",
      "Speed and kinetic energy both stay constant."
    ],
    correct: 1,
    explanation: "Leaking water falls straight down, carrying away mass but leaving with the same horizontal velocity as the cart. By momentum conservation, the cart's horizontal speed remains constant. Since KE = ½mv² and mass m decreases while v is constant, the cart's KE decreases."
  },
  {
    tier: 2,
    type: 'multiple-choice',
    question: "A cart of mass m moving at speed v collides and sticks with an identical stationary cart (perfectly inelastic collision). What fraction of the original kinetic energy is retained after the collision?",
    options: [
      "All kinetic energy is retained (100%).",
      "50% of the kinetic energy is retained.",
      "25% of the kinetic energy is retained.",
      "None — all kinetic energy is lost (0%)."
    ],
    correct: 1,
    explanation: "Momentum conservation: mv = 2m v'. So v' = v/2. KE_final = ½(2m)(v/2)² = mv²/4 = 50% of KE_initial = ½mv². Half the kinetic energy is lost."
  },
  {
    tier: 3,
    type: 'multiple-choice',
    question: "Ball A (elastic, bounces back) and Ball B (clay, sticks) of equal mass and equal speed are each thrown at an identical stationary block. Ball A reverses with its original speed; Ball B sticks to the block. Which ball delivers greater impulse to the block, and which collision results in greater kinetic energy loss?",
    options: [
      "Ball B delivers greater impulse; Ball B causes greater KE loss.",
      "Ball A delivers greater impulse; Ball B causes greater KE loss.",
      "Ball A delivers greater impulse; Ball A causes greater KE loss.",
      "Both deliver equal impulse; Ball B causes greater KE loss."
    ],
    correct: 1,
    explanation: "Ball A: Δp = m(v − (−v)) = 2mv. Ball B: Δp = m(v − 0) = mv. Ball A delivers twice the impulse. Ball B's perfectly inelastic collision causes maximum KE loss, while Ball A's elastic collision conserves KE."
  },
  {
    tier: 2,
    type: 'short-answer',
    question: "A 2 kg sphere initially at rest receives an impulse of 10 N·s. What is its final speed?",
    answer: 5,
    tolerance: 0.2,
    unit: "m/s",
    explanation: "Impulse = change in momentum: J = mΔv. 10 = 2 × v → v = 5 m/s."
  },
  {
    tier: 2,
    type: 'true-false',
    question: "In a perfectly inelastic collision between two objects, kinetic energy is conserved.",
    correct: false,
    explanation: "False. In a perfectly inelastic collision, the objects stick together and maximum kinetic energy is converted to internal energy (heat, sound, deformation). Only momentum is conserved."
  },

  // ----- GRAVITY (5 new questions) -----
  {
    tier: 2,
    type: 'multiple-choice',
    question: "A satellite orbits Earth in a circular orbit at altitude h = 2R above the surface (where R is Earth's radius, M is Earth's mass, G is the gravitational constant). What is the satellite's orbital speed?",
    options: ["v = √(GM/R)", "v = √(GM/2R)", "v = √(GM/3R)", "v = √(2GM/3R)"],
    correct: 2,
    explanation: "Orbital radius = R + 2R = 3R. Setting gravitational force equal to centripetal force: GMm/(3R)² = mv²/(3R). Solving: v² = GM/(3R) → v = √(GM/3R)."
  },
  {
    tier: 2,
    type: 'multiple-choice',
    question: "Which combination of changes would increase the gravitational field strength g at the surface of a planet?",
    options: [
      "Increasing the planet's mass and increasing its radius.",
      "Decreasing the planet's mass and decreasing its radius.",
      "Increasing the planet's mass and decreasing its radius.",
      "Decreasing the planet's mass and increasing its radius."
    ],
    correct: 2,
    explanation: "g = GM/R². Increasing M (numerator) raises g; decreasing R makes R² smaller, also raising g. Both changes together increase g."
  },
  {
    tier: 2,
    type: 'multiple-choice',
    question: "A spaceship in a low circular orbit around Earth wants to move to a higher orbit. In which direction should it fire its engines to most efficiently achieve this?",
    options: [
      "Opposite to the direction of motion (retrograde).",
      "In the direction of motion (prograde).",
      "Directly toward Earth.",
      "Directly away from Earth."
    ],
    correct: 1,
    explanation: "Firing prograde (in the direction of motion) increases orbital energy and speed, raising the apoapsis to a higher altitude. This is the first burn of a Hohmann transfer. Retrograde firing would lower the orbit."
  },
  {
    tier: 4,
    type: 'multiple-choice',
    question: "Planet Unicorn has mass M = 1.0 × 10²⁵ kg and radius R = 4.0 × 10⁶ m. A rock is thrown horizontally at 20 m/s from the top of a 100 m cliff on this planet. How far from the base of the cliff does the rock land? (G = 6.67 × 10⁻¹¹ N·m²/kg²)",
    options: ["0.044 m", "22 m", "43.8 m", "90 m"],
    correct: 2,
    explanation: "Surface gravity: g = GM/R² = (6.67×10⁻¹¹)(10²⁵)/(4×10⁶)² ≈ 41.7 m/s². Fall time: t = √(2h/g) = √(200/41.7) ≈ 2.19 s. Horizontal distance: x = 20 × 2.19 ≈ 43.8 m."
  },
  {
    tier: 4,
    type: 'true-false',
    question: "According to Newton's Law of Universal Gravitation, if the distance between two masses is tripled, the gravitational force between them becomes one-ninth of its original value.",
    correct: true,
    explanation: "True. F = Gm₁m₂/r². Tripling r replaces r² with (3r)² = 9r², reducing the force by a factor of 9."
  },

  // ----- ROTATION (5 new questions) -----
  {
    tier: 1,
    type: 'short-answer',
    question: "A 3 m seesaw has a 50 kg boy sitting at one end and a 40 kg girl sitting at the other end. How far from the girl's end should the fulcrum be placed so the seesaw is balanced? (g = 10 m/s²)",
    answer: 1.67,
    tolerance: 0.05,
    unit: "m",
    explanation: "Torque balance about the fulcrum: 40 × d = 50 × (3 − d). 40d = 150 − 50d → 90d = 150 → d = 5/3 ≈ 1.67 m from the girl."
  },
  {
    tier: 2,
    type: 'multiple-choice',
    question: "A disk of mass M and radius R rotates freely on a frictionless axle. Jean stands at the center; when she walks to the rim, the disk's angular speed decreases to one-quarter of its original value. What can you conclude about Jean's mass?",
    options: [
      "Jean's mass is less than M/2.",
      "Jean's mass equals M.",
      "Jean's mass is between M and 2M.",
      "Jean's mass is greater than 2M."
    ],
    correct: 2,
    explanation: "Conservation of angular momentum: ½MR² × ω = (½MR² + m_J R²) × ω/4. Solving: 2MR² = ½MR² + m_J R² → m_J = 3M/2, which lies between M and 2M."
  },
  {
    tier: 2,
    type: 'multiple-choice',
    question: "A solid ball (rolling without slipping) and a frictionless block are released from rest at the same height on identical ramps. They then travel onto a second frictionless ramp. Which reaches a greater height on the second ramp?",
    options: [
      "The ball, because it has additional rotational kinetic energy at the bottom.",
      "They reach the same height because both started from the same height.",
      "The block, because all its kinetic energy at the bottom is translational.",
      "They reach the same height because mechanical energy is conserved for both."
    ],
    correct: 2,
    explanation: "The rolling ball stores some energy as rotational KE, leaving it with less translational KE at the ramp's base. On the frictionless second ramp, only translational KE converts to PE. The block (all KE translational) rises higher."
  },
  {
    tier: 2,
    type: 'multiple-choice',
    question: "A hoop (I = 0.10 kg·m²) spins at ω = 5.0 rad/s. A tangential force F = 2.0 N is applied for t = 3.0 s, accelerating it to ω = 10 rad/s. At what radius from the center was the force applied?",
    options: ["8.3 cm", "12.5 cm", "16.7 cm", "25.0 cm"],
    correct: 0,
    explanation: "Angular impulse = ΔL: τ × t = I × Δω. (F × r) × 3.0 = 0.10 × 5 = 0.50. F × r = 0.50/3.0 ≈ 0.167 N·m. r = 0.167/2.0 ≈ 0.083 m = 8.3 cm."
  },
  {
    tier: 3,
    type: 'short-answer',
    question: "A uniform 8.0 m ladder of mass 20 kg leans against a frictionless vertical wall at 60° above the horizontal. What minimum coefficient of static friction μs between the ladder and the floor prevents slipping? (g = 10 m/s², sin60° = 0.866, cos60° = 0.500)",
    answer: 0.29,
    tolerance: 0.02,
    unit: "",
    explanation: "Torque about the foot: N_wall × 8 sin60° = mg × 4 cos60°. N_wall = (200 × 4 × 0.5)/(8 × 0.866) ≈ 57.7 N. Horizontal equilibrium: friction = N_wall = 57.7 N. N_floor = mg = 200 N. μs = 57.7/200 ≈ 0.29."
  },

  // ----- OSCILLATIONS (5 new questions) -----
  {
    tier: 2,
    type: 'multiple-choice',
    question: "Which of the following statements about a spring-block system undergoing simple harmonic motion is FALSE?",
    options: [
      "The restoring force is proportional to the block's displacement from equilibrium.",
      "The acceleration and velocity vectors of the block always point in the same direction.",
      "At maximum displacement, the block's speed is zero.",
      "The total mechanical energy remains constant throughout the oscillation."
    ],
    correct: 1,
    explanation: "False: Acceleration points toward equilibrium (opposite to displacement), while velocity points in the direction of motion. At equilibrium the speed is maximum but acceleration is zero; at maximum displacement speed is zero but acceleration is maximum. They are not always in the same direction."
  },
  {
    tier: 2,
    type: 'short-answer',
    question: "A spring with k = 40 N/m has a 0.25 kg block attached to it. What is the period of oscillation? (Use π ≈ 3.14)",
    answer: 0.50,
    tolerance: 0.02,
    unit: "s",
    explanation: "T = 2π√(m/k) = 2π√(0.25/40) = 2π × 0.0791 ≈ 0.497 s ≈ 0.50 s."
  },
  {
    tier: 2,
    type: 'short-answer',
    question: "A spring with k = 50 N/m supports a 0.50 kg block hanging vertically in equilibrium. How far does the spring stretch from its natural length? (g = 10 m/s²)",
    answer: 0.10,
    tolerance: 0.005,
    unit: "m",
    explanation: "At equilibrium, spring force = weight: kx = mg → x = mg/k = (0.50 × 10)/50 = 0.10 m."
  },
  {
    tier: 3,
    type: 'multiple-choice',
    question: "A student measures the period of a pendulum at small angles and finds T = 1.00 s. When released from 45°, the measured period is about 5% longer. What is the best explanation?",
    options: [
      "Air resistance is stronger at larger amplitudes, slowing the pendulum.",
      "The gravitational field weakens slightly as the pendulum swings higher.",
      "At large angles, the small-angle approximation breaks down; the actual restoring force is smaller than predicted by T = 2π√(L/g).",
      "The pendulum bob gains inertia when moving faster at large angles."
    ],
    correct: 2,
    explanation: "T = 2π√(L/g) assumes sinθ ≈ θ. At 45°, sin45° ≈ 0.707 while θ ≈ 0.785 rad, so the actual restoring force is smaller than the linear approximation predicts, yielding a longer period."
  },
  {
    tier: 1,
    type: 'true-false',
    question: "For an ideal spring-mass system undergoing simple harmonic motion, the period increases when the amplitude of oscillation increases.",
    correct: false,
    explanation: "False. For SHM, T = 2π√(m/k), which is independent of amplitude. The period depends only on mass and spring constant."
  },

  // ----- WAVES (5 new questions) -----
  {
    tier: 1,
    type: 'multiple-choice',
    question: "A fire truck is driving away from a stationary observer with its siren on. Compared to the siren's emitted frequency and intensity, what does the stationary observer perceive?",
    options: [
      "Higher frequency and higher intensity than emitted.",
      "Lower frequency and lower intensity than emitted.",
      "The same frequency but lower intensity.",
      "Higher frequency but lower intensity."
    ],
    correct: 1,
    explanation: "Doppler effect: a receding source produces a lower observed frequency (red-shift). As the truck moves away, distance increases, reducing intensity (intensity ∝ 1/r²). Both frequency and intensity are lower than emitted."
  },
  {
    tier: 1,
    type: 'multiple-choice',
    question: "A guitar string produces 2 beats per second when sounded with a 110 Hz tuning fork. The player tightens the string to bring it into tune. What was the string's original frequency?",
    options: ["108 Hz", "110 Hz", "112 Hz", "Cannot be determined"],
    correct: 0,
    explanation: "Beat frequency = |f_string − f_fork| = 2 Hz, so the string is at 108 Hz or 112 Hz. Tightening raises frequency; since tightening brings it to 110 Hz, the string must have been below 110 Hz — i.e., 108 Hz."
  },
  {
    tier: 1,
    type: 'short-answer',
    question: "A wave travels at 16 m/s in medium 1 with a wavelength of 4 m. It enters medium 2 where its speed doubles to 32 m/s. What is the wavelength of the wave in medium 2? (Frequency is unchanged.)",
    answer: 8,
    tolerance: 0.2,
    unit: "m",
    explanation: "Frequency is constant: f = v₁/λ₁ = 16/4 = 4 Hz. In medium 2: λ₂ = v₂/f = 32/4 = 8 m."
  },
  {
    tier: 2,
    type: 'multiple-choice',
    question: "A guitar string of length L = 0.30 m carries waves at speed v = 450 m/s. What is the fundamental (lowest) frequency of vibration?",
    options: ["375 Hz", "750 Hz", "900 Hz", "1500 Hz"],
    correct: 1,
    explanation: "For the fundamental mode, L = λ/2 → λ = 2L = 0.60 m. Frequency: f = v/λ = 450/0.60 = 750 Hz."
  },
  {
    tier: 2,
    type: 'true-false',
    question: "When a wave travels from one medium into another, its frequency changes to match the new medium's properties.",
    correct: false,
    explanation: "False. The frequency of a wave is set by its source and remains constant as it crosses a boundary. What changes is the wave speed (and therefore wavelength, since v = fλ). Frequency is invariant across media."
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
