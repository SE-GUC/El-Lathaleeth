const uuid = require('uuid');
class comments {
    constructor(id,RoL,author,text,postedOn,read){
        this.id = uuidv4()
        this.RoL=RoL
        this.author=author
        this.text=text
        this.postedOn=new Date()
        this.read=read
    }
}
module.exports = comments