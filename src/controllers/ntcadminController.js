const Ntcadmin = require('../models/ntcadminModel');  // Adjust the path if necessary

// Get all NTC admins
exports.getAllNtcadmins = async (req, res) => {
  try {
    // Fetch all NTC admins and exclude _id and __v fields
    const ntcadmins = await Ntcadmin.find().select('-_id -__v');

    if (ntcadmins.length === 0) {
      return res.status(404).json({ message: 'No NTC Admins found' });
    }

    res.status(200).json(ntcadmins);
  } catch (err) {
    console.error(err);  // Log the error for debugging purposes
    res.status(500).json({ message: 'Error retrieving NTC admins', error: err.message });
  }
};

// Get a specific NTC admin by ntcadminId
exports.getNtcadminById = async (req, res) => {
  try {
    const { ntcadminId } = req.params;
    const ntcadmin = await Ntcadmin.findOne({ ntcadminId }).select('-_id -__v');  // Exclude _id and __v fields

    if (!ntcadmin) {
      return res.status(404).json({ message: 'NTC Admin not found' });
    }

    res.status(200).json(ntcadmin);  // Return the specific NTC admin without _id and __v
  } catch (err) {
    console.error(err);  // Log the error for debugging purposes
    res.status(500).json({ message: 'Error retrieving NTC admin', error: err.message });
  }
};
