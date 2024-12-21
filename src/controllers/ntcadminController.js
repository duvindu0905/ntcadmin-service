// ntcadminController.js
const Ntcadmin = require('../models/ntcadminModel');  // Adjust the path if necessary

// Get all NTC admins
exports.getAllNtcadmins = async (req, res) => {
  try {
    const ntcadmins = await Ntcadmin.find();
    res.status(200).json(ntcadmins);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving NTC admins', error: err });
  }
};

// Get a specific NTC admin by ntcadminId
exports.getNtcadminById = async (req, res) => {
  try {
    const { ntcadminId } = req.params;
    const ntcadmin = await Ntcadmin.findOne({ ntcadminId });

    if (!ntcadmin) {
      return res.status(404).json({ message: 'NTC Admin not found' });
    }

    res.status(200).json(ntcadmin);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving NTC admin', error: err });
  }
};
