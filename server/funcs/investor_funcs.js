const axios = require("axios");

const investor_functions = {

    getAllInvestors: async () => {
        const investors = await axios.get("http://localhost:5000/api/investor/");
        return investors;
    },

    getInvestorByID: async id => {
        const investor = await axios.get("http://localhost:5000/api/investor/"+id);
        return investor;
    },

    createNewInvestor: async requestBody => {
        const newInvestor = await axios.post("http://localhost:5000/api/investor/", requestBody);
        return newInvestor;
    },

    updateExistingInvestor: async (requestBody, id) => {
        const updatedInvestor = await axios.put("http://localhost:5000/api/investor/"+id, requestBody);
        return updatedInvestor;
    },

    deleteExistingInvestor: async id => {
        const deletedInvestor = await axios.delete("http://localhost:5000/api/investor/"+id);
        return deletedInvestor;
    },
    deleteAllInvestor: async () => {
        const deletedInvestors = await axios.delete("http://localhost:5000/api/investor/deleteAll/");
        return deletedInvestors;
    }
};

module.exports = investor_functions;