var mongoose = require("mongoose");

var StorySchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  publishedDate: {
    type: Date,
    required: false
  },
  Preview: {
    type: String,
    required: true
  }
});

var Story = mongoose.model("Story", StorySchema);


// Export the Story model
module.exports = Story;