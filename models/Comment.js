const uuid = require("uuid");
class Comment {
  constructor(author_type, author, text, read_at) {
    this.id = uuid.v4();
    this.author_type = author_type;
    this.author = author;
    this.text = text;
    this.postedOn = new Date();
    this.read_at = new Date(read_at);
  }
}
module.exports = Comment;
