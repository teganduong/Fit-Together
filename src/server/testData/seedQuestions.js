const triviaCtrl = require('../controllers/triviaCtrl.js');
const entriesData = [
  {
    category: 'Nutrition',
    question: 'Carrots contain a rich source of what vitamin?',
    options: ['C', 'D', 'A', 'B'],
    answer: 'A'
  },
  {
    category: 'Nutrition',
    question: 'Oranges contain a rich source of what vitamin?',
    options: ['C', 'A', 'E', 'K'],
    answer: 'C'
  },
  {
    category: 'Nutrition',
    question: 'Fish is a good source of:',
    options: ['vitamin C', 'carbs', 'beta carotene', 'omega-3 fats'],
    answer: 'omega-3 fats'
  },
  {
    category: 'Nutrition',
    question: 'A label that lists trans fats as 0 means:',
    options: [
      'the food contains no trans fat', 
      'it contains no partially hydrogenated oil', 
      'it has less than 0.5 grams of trans fat per serving', 
      'it is healthy for you'
    ],
    answer: 'it has less than 0.5 grams of trans fat per serving'
  },
  {
    category: 'Nutrition',
    question: 'How much fiber should you aim for every day?',
    options: [
      '5 grams', 
      '10 to 15 grams', 
      '21 to 35 grams', 
      '50 grams'
    ],
    answer: '21 to 35 grams'
  },
  {
    category: 'Nutrition',
    question: 'Which does not contain fiber?',
    options: ['steak', 'broccoli', 'an apple', 'baked beans'],
    answer: 'steak'
  },
  {
    category: 'Nutrition',
    question: 'Which juice is high in iron?',
    options: [' orange', 'prune', 'carrot', 'apricot'],
    answer: 'prune'
  },
  {
    category: 'Nutrition',
    question: 'If you are looking for the most fiber in a loaf of bread, the operative words are:',
    options: ['unbleached', 'enriched wheat flour', 'twelve-grain', 'whole-wheat flour'],
    answer: 'whole-wheat flour'
  },
  {
    category: 'Nutrition',
    question: 'On a nutrition label, what does "% DV" stand for?',
    options: [
      'Percent daily value', 
      'Percent dietary value', 
      'Percent dietetic value', 
      'Percent daily variety'
    ],
    answer: 'Percent daily value'
  },
  {
    category: 'Nutrition',
    question: 'How many calories are in 1 gram of sugar?',
    options: [5, 8, 4, 3],
    answer: 4
  },
  {
    category: 'Fitness',
    question: 'The expression of power can best be described as:',
    options: [
      'Force x Speed x Time x Effort',
      'Speed x Force divided by Momentum',
      'Distance moved divided by Speed x Volume',
      'Force x Distance divided by Time'
    ],
    answer: 'Force x Distance divided by Time'
  },
  {
    category: 'Fitness',
    question: 'If you do both weight training and cardio in the same session, which should come first?',
    options: [
      'weight training',
      'cardio'
    ],
    answer: 'weight training'
  },
  {
    category: 'Fitness',
    question: 'If you just train the quads while ignoring the opposing muscle, you might:',
    options: [
      'tear your achilles',
      'get a stinger',
      'pull your hamstring and end up with severe muscle imbalance',
      'end up with a hip pointer'
    ],
    answer: 'pull your hamstring and end up with severe muscle imbalance'
  },
  {
    category: 'Fitness',
    question: 'Which of the following situations should be avoided when programming resistance training for children?',
    options: [
      'performing overhead lifting activities',
      'utilizing free weights for resistance',
      'lifting resistance loads greater than 10RM'
    ],
    answer: 'lifting resistance loads greater than 10RM'
  },
  {
    category: 'Fitness',
    question: 'If you are performing plyometric exercises while training, you are performing:',
    options: [
      'explosive movements',
      'slow deliberate movements',
      'twisting movements',
      'slow breathing techniques'
    ],
    answer: 'explosive movements'
  },
  {
    category: 'Fitness',
    question: 'Initial strength gains seen during the first few weeks of a resistance-training program are primarily attributed to:',
    options: [
      'changes in Type I muscle fiber to Type II muscle fibers',
      'increases in the cross sectional size of the muscle',
      'neural adaptations',
      'weight gain'
    ],
    answer: 'neural adaptations'
  },
  {
    category: 'Fitness',
    question: 'What is the name of the diamond shaped muscle in the back that is worked when rowing?',
    options: [
      'Biceps',
      'Trapezius',
      'Abdominals',
      'Hamstrings'
    ],
    answer: 'Trapezius'
  },
  {
    category: 'Fitness',
    question: 'What type of exercise uses body weight for resistance in a rhythmic manner?',
    options: [
      'Calisthenics',
      'Yoga',
      'Pilates',
      'Weight Lifting'
    ],
    answer: 'Calisthenics'
  },
  {
    category: 'Fitness',
    question: 'What is hypertrophy?',
    options: [
      'Increasing Calorie Intake',
      'Increasing Muscle Fiber',
      'Increasing Fat',
      'Increasing Your Workout'
    ],
    answer: 'Increasing Muscle Fiber'
  },
  {
    category: 'Fitness',
    question: 'What is it called when your body converts fat into energy?',
    options: [
      'Overtraining',
      'Hypertrophy',
      'Flexibility',
      'Ketosis'
    ],
    answer: 'Ketosis'
  }
];

// seeds entries table with example data
entriesData.forEach((entry, index) => {
  setTimeout(() => triviaCtrl.addQuizQuestion({ body: entry }, null), index * 200);
});

setTimeout(process.exit, entriesData.length * 200);
