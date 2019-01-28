var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var EquipmentSchema   = new Schema({
    name: String,
    url: String,
    equipment_category: String, 
    vehicle_category: String,
    weapon_category: String,
    gear_category: String,
    armor_category: String,
    tool_category: String
});

module.exports = mongoose.model('Equipment', EquipmentSchema, 'equipment');