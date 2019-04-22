const axios = require("axios");
const commentFunctions = {
  // comment functions so far
  getComments: async () => {
    const comments = await axios.get("https://lathaleeth.herokuapp.com/api/comments/");
    return comments;
  },
  getComment: async id => {
    const comment = await axios.get(
      "https://lathaleeth.herokuapp.com/api/comments/byID/" + id
    );
    return comment;
  },
  createComment: async (body) => {
    const comment = await axios.post("https://lathaleeth.herokuapp.com/api/comments/",body);
    return comment;
  },
  updateComment: async (id,body) => {
    const comment = await axios.put("https://lathaleeth.herokuapp.com/api/comments/"+id,body);
    return comment;
  },
  deleteAllComment: async () => {
    const comment = await axios.post("https://lathaleeth.herokuapp.com/api/comments/deleteAll/");
    return comment;
  },
  deleteComment: async (id) => {
    const comment = await axios.delete("https://lathaleeth.herokuapp.com/api/comments/"+id);
    return comment;
  }
};
module.exports = commentFunctions;
