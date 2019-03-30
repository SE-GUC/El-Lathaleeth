const axios = require("axios");

const investor_functions = {

    getAllInvestors: async () => {
        const investors = await axios.get("http://localhost:3000/api/investor/get/");
        return investors;
    },

    getInvestorByID: async id => {
        const investor = await axios.get("http://localhost:3000/api/investor/getByID/"+id);
        return investor;
    },

    createNewInvestor: async requestBody => {
        const newInvestor = await axios.post("http://localhost:3000/api/investor/create/", requestBody);
        return newInvestor;
    },

    updateExistingInvestor: async (requestBody, id) => {
        const updatedInvestor = await axios.put("http://localhost:3000/api/investor/update/"+id, requestBody);
        return updatedInvestor;
    },

    deleteExistingInvestor: async id => {
        const deletedInvestor = await axios.delete("http://localhost:3000/api/investor/delete/"+id);
        return deletedInvestor;
    }

};

module.exports = investor_functions;