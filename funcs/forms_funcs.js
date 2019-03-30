const axios = require('axios');
const functions = {
    
    getForm: async () => {
        const forms = await axios.get(
          "http://localhost:3000/api/forms/"
        );
        return forms
    },
    createSSCForm: async (body) => {
        const createdSSCForm = await axios.post(
            "http://localhost:3000/api/forms/SSC/", body
        )
    return createdSSCForm
    },
    createSPCForm: async (body) => {
        const createdSPCForm = await axios.post(
          "http://localhost:3000/api/forms/SPC/", body
            )
        return createdSPCForm
     },

};
module.exports = functions;