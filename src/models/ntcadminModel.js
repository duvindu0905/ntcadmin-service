// ntcadminModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ntcadminSchema = new Schema({
  ntcadminId: { 
    type: Number, 
    required: true, 
    unique: true 
  },
  userName: { 
    type: String, 
    required: true, 
    minlength: 3 
  },
  passWord: { 
    type: String, 
    required: true, 
    minlength: 6 
  },
  fullName: { 
    type: String, 
    required: true 
  },
  address: { 
    type: String, 
    required: true 
  },
  phoneNumber: { 
    type: Number, 
    required: true,
    validate: {
      validator: function(v) {
        return /\d{10}/.test(v);  // Validates a 10-digit phone number
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  nic: { 
    type: String, 
    required: true,
    validate: {
      validator: function(v) {
        return /^[0-9]{9}[vV]$/.test(v);  // NIC number validation (9 digits followed by 'v' or 'V')
      },
      message: props => `${props.value} is not a valid NIC number!`
    }
  },
  email: { 
    type: String, 
    required: true,
    match: [/\S+@\S+\.\S+/, 'Please use a valid email address.']
  }
});

const Ntcadmin = mongoose.model('Ntcadmin', ntcadminSchema);

module.exports = Ntcadmin;
