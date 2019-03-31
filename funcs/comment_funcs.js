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
  createComment: async (body) => {
    const comment = await axios.post("http://localhost:3000/api/comments/",body);
    return comment;
  },
  updateComment: async (id,body) => {
    const comment = await axios.put("http://localhost:3000/api/comments/update/"+id,body);
    return comment;
  },
  deleteAllComment: async (id) => {
    const comment = await axios.delete("http://localhost:3000/api/comments/deleteAll/");
    return comment;
  },
  deleteComment: async (id) => {
    const comment = await axios.delete("http://localhost:3000/api/comments/delete/"+id);
    return comment;
  },
};
module.exports = commentFunctions;
