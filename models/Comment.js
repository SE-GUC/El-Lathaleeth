const uuid = require('uuid');
class Comment {
    constructor(id,author_type,author,text,postedOn,read){
        this.id = uuidv4()
        this.author_type=author_type
        this.author=author
        this.text=text
        this.postedOn=new Date(postedOn)
        this.read=read
    }
}
module.exports = Comment
