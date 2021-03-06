const mongoose = require('mongoose');  //dependency does the heavier lifting to do the stuff on this page

const ArtworkSchema = new mongoose.Schema({
  artName: { type: String, default: ""},
  imageUrl: { type: String, default: "" },
  tags: [{ type: String, default: "" }],
  location: { type: String, default: "" },
  artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Artist',
      default: 'noartist' }
});

const Artwork = mongoose.model('Artwork', ArtworkSchema); // lets make a model a thing

module.exports = {  // lets export that model
  Artwork: Artwork
}
