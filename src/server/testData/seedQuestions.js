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
  }
];

// seeds entries table with example data
entriesData.forEach((entry, index) => {
  setTimeout(() => triviaCtrl.addQuizQuestion({ body: entry }, null), index * 200);
});

setTimeout(process.exit, entriesData.length * 200);
