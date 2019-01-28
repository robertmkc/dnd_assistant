var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var SpellSchema   = new Schema({
    name: String,
    url: String,
    level: Number,
    "school.name" : String
});

module.exports = mongoose.model('Spell', SpellSchema, 'spells');