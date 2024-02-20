const contactSchema = {
  id: {
    type: Number,
    required: true
  },
  firstName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },

};

module.exports = contactSchema;
