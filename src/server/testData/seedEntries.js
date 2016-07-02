const entriesCtrl = require('../controllers/entriesCtrl.js');
const entriesData = [
  {
    question: 'Do you prefer yoga or pilates?',
    option1: {
      option: 'Yoga', 
      votes: 0,
      img: 'http://static1.squarespace.com/static/554a7cece4b0037c64932115/t/55526bf2e4b0da857ce3414c/1431464951121/three_new_yoga_poses.jpg?format=1500w'
    },
    option2: {
      option: 'Pilates', 
      votes: 0,
      img: 'http://balancedbeingonline.com/wp-content/uploads/2015/07/pilates.jpg'
    }
  },
  {
    question: 'At the gym, is it best to do cardio first or weights first?',
    option1: {
      option: 'cardio', 
      votes: 0,
      img: 'http://cdn-mf1.heartyhosting.com/sites/mensfitness.com/files/styles/photo_gallery_full/public/am_cardio_rotator.jpg?itok=vTy79Czs'
    },
    option2: {
      option: 'weights', 
      votes: 0,
      img: 'http://www.reaxxion.com/wp-content/uploads/2014/11/weight-lifting-decalartscom-1137x793-667x465.jpg'
    }
  },
  {
    question: 'What do you enjoy more?',
    option1: {
      option: 'Leg day', 
      votes: 0,
      img: 'https://s-media-cache-ak0.pinimg.com/564x/82/4d/55/824d55bf410c1ee2950551e8a9fb7c85.jpg'
    },
    option2: {
      option: 'Upper body day', 
      votes: 0,
      img: 'http://gladstonenews.com.au/wordpress/wp-content/uploads/2016/02/cb3cda3c62bfa20055781bd89673ced0.gif'
    }
  },
  {
    question: 'When do you prefer to workout?',
    option1: {
      option: 'morning', 
      votes: 0,
      img: 'http://images.askmen.com/1080x540/top_10/fitness/top-10-reasons-to-train-in-the-morning-1035717-TwoByOne.jpg'
    },
    option2: {
      option: 'afternoon/evening', 
      votes: 0,
      img: 'http://bellybanish.s3-us-west-2.amazonaws.com/wp-content/uploads/2015/07/07015600/Lose-20-Pounds-Don%E2%80%99t-skip-your-evening-workout-3.jpg'
    }
  },
  {
    question: 'Which one do you prefer more?',
    option1: {
      option: 'biking', 
      votes: 0,
      img: 'http://cdn1.bostonmagazine.com/wp-content/uploads/2013/06/bostonbikinglarge.jpg'
    },
    option2: {
      option: 'running', 
      votes: 0,
      img: 'http://semois-semoy.org/inc/uploads/2015/12/The-Best-Running-Shoes-for-Plantar-Fasciitis-1.jpg'
    }
  },
  {
    question: 'How often do you workout?',
    option1: {
      option: '1-3 times/week', 
      votes: 0,
      img: 'http://cliparts.co/cliparts/6Ty/55g/6Ty55g47c.jpg'
    },
    option2: {
      option: '4 or more times/week', 
      votes: 0,
      img: 'http://4.bp.blogspot.com/-MinNE4NoZjc/T2qehlTU21I/AAAAAAAAAU0/SMhis-1yfB0/s1600/Workout_1_tnb.png'
    }
  },
  {
    question: 'Do you prefer working out at the gym or outdoors?',
    option1: {
      option: 'gym', 
      votes: 0,
      img: 'http://www.qarmazi.com/5/2015/07/3-gym-gym-inside-a-house-black.jpg'
    },
    option2: {
      option: 'outdoors', 
      votes: 0,
      img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSQIHFyaCVXxW8-wm8ctNpOt-ZDB4sKohG1iWIaBdklHXR3Paum'
    }
  },
  {
    question: 'Are you trying to lose weight or gain muscle/get bulkier?',
    option1: {
      option: 'Lose weight', 
      votes: 0,
      img: 'http://www.nylabone.com/assets/010/41473.jpg'
    },
    option2: {
      option: 'Gain muscle/get bulkier', 
      votes: 0,
      img: 'https://s-media-cache-ak0.pinimg.com/236x/64/ab/ec/64abece034bd8b81dcd98a1b9f62c183.jpg'
    }
  },
  {
    question: 'A "cheat day" is a day where people can eat whatever they want once a week. Good or bad idea?',
    option1: {
      option: 'Good idea', 
      votes: 0,
      img: 'http://clipartix.com/wp-content/uploads/2016/04/Smile-thumbs-up-clip-art-clipart-image-0.jpg'
    },
    option2: {
      option: 'Bad idea', 
      votes: 0,
      img: 'http://www.clipartbest.com/cliparts/MiL/kAz/MiLkAzLgT.png'
    }
  },
  {
    question: 'How far would you run for your favorite food?',
    option1: {
      option: '< 3 miles', 
      votes: 0,
      img: 'https://www.uwosh.edu/ploneprojects/plone-activities-blog/plone-slow-jog-4-friday-august-1-2008-idea-lab/image'
    },
    option2: {
      option: '4 or more miles', 
      votes: 0,
      img: 'http://1.bp.blogspot.com/-CZZcmwrptkM/Th3ZcsCiArI/AAAAAAAAAFg/UaY1W8vQ5rk/s1600/RUNNING%20CARTOON.jpg'
    }
  }
];

// seeds entries table with example data
entriesData.forEach((entry, index) => {
  setTimeout(() => entriesCtrl.addEntry({ body: entry }, null), index * 200);
});

setTimeout(process.exit, entriesData.length * 200);
