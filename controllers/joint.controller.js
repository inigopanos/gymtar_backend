const Joint = require('../models/joint.model');

const addJoint = async (req, res, next) => {
  console.log(req.body, 'addJoint en back');
  try {
    const result = await Joint.create(req.body);
    res.status(201);
    res.json(result);
  } catch (err) {
    next(err, 'no se ha podido crear la ruina especificada.');
  }
};

module.exports = addJoint;
