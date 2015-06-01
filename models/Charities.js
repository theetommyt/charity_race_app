var mongoose = require('mongoose');

var CharitySchema = new mongoose.Schema({
  name: String,
  amount: Number,
  inc_entry: Boolean,
  updated_at: { type: Date, default: Date.now },
});

// export!
module.exports = mongoose.model('Charity', CharitySchema);
