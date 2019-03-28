const axios = require('axios');
const functions = {
    getForms: async () => {
        const forms = await axios.get(
          "http://localhost:3000/api/forms/"
        );
        return forms
    },

};
module.exports = functions;
