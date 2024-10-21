// controllers/userBootcamp.controller.js
const { User, Bootcamp, Users_Bootcamps } = require('../models');

exports.addUserToBootcamp = async (req, res) => {
  try {
    const { userId, bootcampId } = req.params;

    const user = await User.findByPk(userId);
    const bootcamp = await Bootcamp.findByPk(bootcampId);

    if (!user || !bootcamp) {
      return res.status(404).json({ message: 'User or Bootcamp not found' });
    }

    await Users_Bootcamps.create({ userId, bootcampId });

    res.status(201).json({ message: 'User added to Bootcamp successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding user to bootcamp', error });
  }
};
