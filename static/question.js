// creating an array and passing the number,question,answer and options
let questions = [
  {
    numb: 1,
    question: " What is the SI unit of electric charge?",
    answer: "Coulomb",
    options: ["Joule", "Ampere", "Coulomb", "Volt"],
  },
  {
    numb: 2,
    question:
      "Which of the following statements is true about Newton's Third Law of Motion?",
    answer: "For every action, there is an equal and opposite reaction.",
    options: [
      "For every action, there is an equal and opposite reaction.",
      "An object in motion tends to stay in motion.",
      "Force equals mass times acceleration.",
      "An object at rest tends to stay at rest.",
    ],
  },
  {
    numb: 3,
    question: "What is the principle behind the working of a transformer?",
    answer: "Faraday's Law",
    options: [
      "Pascal's Principle",
      "Faraday's Law",
      " Archimedes' Principle",
      " Newton's Second Law",
    ],
  },
  {
    numb: 4,
    question:
      "In a concave mirror, if the object is placed between the focal point and the mirror, the image formed is:",
    answer: " Virtual and inverted",
    options: [
      "Virtual and erect",
      "Real and inverted",
      " Virtual and inverted",
      " Real and erect",
    ],
  },
  {
    numb: 5,
    question: "Which of the following is a vector quantity?",
    answer: "Acceleration",
    options: ["Speed", "Distance", "Mass", "Acceleration"],
  },
  {
    numb: 6,
    question: "Which of the following is not a noble gas?",
    answer: "Nitrogen",
    options: [" Argon", "Helium", "Neon", "Nitrogen"],
  },
  {
    numb: 7,
    question:
      "The process of conversion of a liquid into vapor below its boiling point is called:",
    answer: "Evaporation",
    options: ["Boiling", "Sublimation", "Evaporation", "Condensation"],
  },
  {
    numb: 8,
    question:
      "The number of moles in 2 grams of oxygen gas (O₂) is approximately:",
    answer: "0.5 mole",
    options: ["0.125 moles", " 0.25 moles", "1 mole", " 0.5 moles"],
  },
  {
    numb: 9,
    question: "Which of the following elements is a metalloid?",
    answer: " Silicon (Si)",
    options: [" Sodium (Na)", "Carbon (C)", " Iron (Fe)", " Silicon (Si)"],
  },
  {
    numb: 10,
    question: "Which of the following is an example of a chemical change?",
    answer: "Burning wood",
    options: [
      "Melting ice",
      "Dissolving sugar in water",
      "Burning wood",
      "Cutting paper",
    ],
  },
  {
    numb: 11,
    question: "Which of the following elements is a metalloid?",
    answer: " Silicon (Si)",
    options: [" Sodium (Na)", "Carbon (C)", " Iron (Fe)", " Silicon (Si)"],
  },
  {
    numb: 12,
    question:
      " What is the derivative of ( f(x) = 3x^2 - 2x + 5 ) with respect to ( x )?",
    answer: "( 6x - 2 )",
    options: ["( 6x - 2 )", " ( 6x + 2 )", " ( 3x^2 - 2x )", "( 3x - 2 )"],
  },
  {
    numb: 13,
    question:
      " If a fair six-sided die is rolled, what is the probability of rolling an even number?",
    answer: "1/2",
    options: ["1/2", "1/9", " 1/6", " 1/5"],
  },
  {
    numb: 14,
    question:
      " A bag contains 5 red balls, 3 blue balls, and 2 green balls. If a ball is randomly selected from the bag, what is the probability of selecting a blue ball?",
    answer: "3/10",
    options: ["3/10", "1/9", " 1/6", " 1/3"],
  },
  {
    numb: 15,
    question:
      " In a group of 40 students, 25 are boys and 15 are girls. If a student is selected at random from the group, what is the probability of selecting a boy?",
    answer: "2/3",
    options: ["1/2", "1/9", " 1/6", " 2/3"],
  },
  {
    numb: 16,
    question:
      "A box contains 4 red balls, 5 white balls, and 3 blue balls. If two balls are randomly drawn from the box without replacement, what is the probability that both balls are white?",
    answer: "5/33",
    options: ["1/2", "1/9", " 1/7", " 5/33"],
  },
];

let questions1 = [
  {
    numb1: 1,
    question1: " What is the SI unit of electric potential?",
    answer1: "Volt",
    options1: ["Joule", "Volt", "Coulomb", "Watt"],
  },
  {
    numb1: 2,
    question1: "Which of the following is a unit of electric charge?",
    answer1: "Coulomb",
    options1: ["Newton", "Ampere", "Coulomb", "Ohm"],
  },
  {
    numb1: 3,
    question1: "What is the SI unit of power?",
    answer1: "Watt",
    options1: ["Watt", "Joule", "Volt", "Ampere"],
  },
  {
    numb1: 4,
    question1:
      "Which of the following statements is true about Newton's Third Law of Motion?",
    answer1: "For every action, there is an equal and opposite reaction.",
    options1: [
      "For every action, there is an equal and opposite reaction.",
      "An object in motion tends to stay in motion.",
      "Force equals mass times acceleration.",
      "An object at rest tends to stay at rest.",
    ],
  },
  {
    numb1: 5,
    question1: "Which of the following is a vector quantity?",
    answer1: "Acceleration",
    options1: ["Speed", "Distance", "Mass", "Acceleration"],
  },
  {
    numb1: 6,
    question1: "Which of the following is NOT a noble gas?",
    answer1: "Nitrogen",
    options1: ["Neon", "Argon", "Helium", "Nitrogen"],
  },
  {
    numb1: 7,
    question1: "Which of the following elements is a halogen?",
    answer1: "Fluorine",
    options1: ["Oxygen", "Fluorine", "Sodium", "Calcium"],
  },
  {
    numb1: 8,
    question1:
      "The number of moles in 2 grams of oxygen gas (O₂) is approximately:",
    answer1: "0.5 mole",
    options1: ["0.125 moles", " 0.25 moles", "1 mole", " 0.5 moles"],
  },
  {
    numb1: 9,
    question1: "Which of the following elements is a metalloid?",
    answer1: " Silicon (Si)",
    options1: [" Sodium (Na)", "Carbon (C)", " Iron (Fe)", " Silicon (Si)"],
  },
  {
    numb1: 10,
    question1: "Which of the following is a strong acid?",
    answer1: "H2SO4 (Sulfuric acid)",
    options1: [
      "HCl (Hydrochloric acid)",
      "CH3COOH (Acetic acid)",
      "H2SO4 (Sulfuric acid)",
      "HNO3 (Nitric acid)",
    ],
  },
  {
    numb1: 11,
    question1:
      " What is the derivative of ( f(x) = 3x^2 - 2x + 5 ) with respect to ( x )?",
    answer1: "( 6x - 2 )",
    options1: ["( 6x - 2 )", " ( 6x + 2 )", " ( 3x^2 - 2x )", "( 3x - 2 )"],
  },
  {
    numb1: 12,
    question1:
      "In how many different ways can the letters of the word ENGINEERING be arranged such that all vowels come together?",
    answer1: "5! × 6!",
    options1: ["5! × 6!", "  6! × 5!", " 7! × 5!", " 6! × 6!"],
  },
  {
    numb1: 13,
    question1:
      "How many 3-digit numbers can be formed using the digits 1, 2, 3, 4, and 5 if digits can be repeated?",
    answer1: " 120",
    options1: ["90", "70", "0", " 120"],
  },
  {
    numb1: 14,
    question1:
      "In how many different ways can the letters of the word INDEPENDENCE be arranged if all the vowels must come together?",
    answer1: "10! ÷ 3!",
    options1: ["11! ÷ 3!", "10! ÷ 3!", "11! ÷ 4!", "10! ÷ 4!"],
  },
  {
    numb1: 15,
    question1:
      " How many 4-letter words can be formed using the letters of the word TRIANGLE?",
    answer1: "8P4",
    options1: ["8P4", "3!", "4!", "7!"],
  },
];

//

let questions2 = [
  {
    numb2: 1,
    question2: " What is the SI unit of electric potential?",
    answer2: "Volt",
    options2: ["Joule", "Volt", "Coulomb", "Watt"],
  },
  {
    numb2: 2,
    question2: "Which of the following is a unit of electric charge?",
    answer2: "Coulomb",
    options2: ["Newton", "Ampere", "Coulomb", "Ohm"],
  },
  {
    numb2: 3,
    question2: "What is the SI unit of power?",
    answer2: "Watt",
    options2: ["Watt", "Joule", "Volt", "Ampere"],
  },
  {
    numb2: 4,
    question2: "In which type of lens does light converge to a focal point?",
    answer2: "Convex lens",
    options2: [
      "Concave lens",
      "Convex lens",
      "Plano-concave lens",
      "Plano-convex lens",
    ],
  },
  {
    numb2: 5,
    question2:
      "Which law of thermodynamics states that energy cannot be created or destroyed, only transformed from one form to another?",
    answer2: "First law",
    options2: ["Zeroth law", "First law", "Second law", "Third law"],
  },
  {
    numb2: 6,
    question2: "Which of the following is NOT a noble gas?",
    answer2: "Nitrogen",
    options2: ["Neon", "Argon", "Helium", "Nitrogen"],
  },
  {
    numb2: 7,
    question2: "Which of the following elements is a halogen?",
    answer2: "Fluorine",
    options2: ["Oxygen", "Fluorine", "Sodium", "Calcium"],
  },
  {
    numb2: 8,
    question2: "Which of the following is an example of a chemical change?",
    answer2: "Burning wood",
    options2: ["Boiling water", "Burning wood", "Cutting paper", "Melting ice"],
  },
  {
    numb2: 9,
    question2: "What is the chemical symbol for gold?",
    answer2: "Au",
    options2: ["Go", "Ag", "Au", "Go"],
  },
  {
    numb2: 10,
    question2: "Which of the following is a strong acid?",
    answer2: "H2SO4 (Sulfuric acid)",
    options2: [
      "HCl (Hydrochloric acid)",
      "CH3COOH (Acetic acid)",
      "H2SO4 (Sulfuric acid)",
      "HNO3 (Nitric acid)",
    ],
  },
  {
    numb2: 11,
    question2:
      "Which organelle is responsible for producing ATP in eukaryotic cells?",
    answer2: "Mitochondrion",
    options2: ["Nucleus", "Ribosome", "Mitochondrion", "Golgi apparatus"],
  },
  {
    numb2: 12,
    question2: "What is the main function of red blood cells?",
    answer2: "Transporting oxygen",
    options2: [
      "Transporting oxygen",
      "Fighting infections",
      "Producing antibodies",
      "Digesting food",
    ],
  },
  {
    numb2: 13,
    question2: "What is the process by which green plants make their own food?",
    answer2: "Photosynthesis",
    options2: [
      "Respiration",
      "Photosynthesis",
      "Fermentation",
      "Transpiration",
    ],
  },
  {
    numb2: 14,
    question2:
      "Which of the following is NOT a type of tissue in the human body?",
    answer2: "Bone tissue",
    options2: [
      "Epithelial tissue",
      "Muscle tissue",
      "Nerve tissue",
      "Bone tissue",
    ],
  },
  {
    numb2: 15,
    question2: "What is the basic unit of heredity in living organisms?",
    answer2: "Gene",
    options2: ["Chromosome", "Gene", "DNA", "Allele"],
  },
];
