const db = require('../db/connection.js');

exports.getDoctors = (req, res) => {
  db.any('select * from doctors')
    .then((data) => {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL doctors'
        });
    })
    .catch((err) => {
      console.error('error in retrieving doctors: ', err);
    });
};

exports.addDoctor = (req, res) => {
  db.none('insert into doctors(name, dob, office, phone, sex)' +
      'values(${name}, ${dob}, ${office}, ${phone}, ${sex})',
    req.body)
    .then(() => {
      res.status(201)
        .json({
          status: 'success',
          message: 'Inserted doctor into db'
        });
    })
    .catch((err) => {
      console.error('error in adding doctor: ', err);
    });
};
