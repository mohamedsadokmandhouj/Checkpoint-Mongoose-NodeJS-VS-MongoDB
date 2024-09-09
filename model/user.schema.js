const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Définition du schéma
const userSchema = new Schema({
  FirstName: {
    type: String,},
  LastName: {
    type: String,},
  Age: {
    type: Number,},});
// Création d'un modèle à partir du schéma
const User = mongoose.model('User', userSchema);
module.exports = User;  // Exporter le modèle pour l'utiliser ailleurs dans l'application