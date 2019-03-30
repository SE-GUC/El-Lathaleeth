const axios = require("axios");
const commentFunctions = {
  // comment functions so far
  getComments: async () => {
    const comments = await axios.get("http://localhost:3000/api/comments/");
    return comments;
  },
  getComment: async id => {
    const comment = await axios.get(
      "http://localhost:3000/api/comments/byID/" + id
    );
    return comment;
  },
  createComment: async () => {
    const comment = await axios.post("http://localhost:3000/api/comments/");
    return comment;
  },
  updateComment: async (id) => {
    const comment = await axios.put("http://localhost:3000/api/comments/update/"+id);
    return comment;
  },
  deleteComment: async (id) => {
    const comment = await axios.delete("http://localhost:3000/api/comments/delete"+id);
    return comment;
  },
};
module.exports = commentFunctions;
