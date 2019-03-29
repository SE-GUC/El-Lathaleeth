const axios = require('axios');
const functions = {
    getComment: async () => {
        const comments = await axios.get(
          "http://localhost:3000/api/comments/"
        );
        return comments
    },

};
module.exports = functions;