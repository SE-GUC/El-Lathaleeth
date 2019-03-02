const uuid = require('uuid');
class Comment {
    constructor(author_type,author,text,read){
        this.id = uuid.v4()
        this.author_type=author_type
        this.author=author
        this.text=text
        this.postedOn=new Date(new Date())
        this.read=read
    }
}
module.exports = Comment
