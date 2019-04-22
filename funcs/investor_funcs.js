const axios = require("axios");

const investor_functions = {

    getAllInvestors: async () => {
        const investors = await axios.get("https://lathaleeth.herokuapp.com/api/investor/");
        return investors;
    },

    getInvestorByID: async id => {
        const investor = await axios.get("https://lathaleeth.herokuapp.com/api/investor/"+id);
        return investor;
    },

    createNewInvestor: async requestBody => {
        const newInvestor = await axios.post("https://lathaleeth.herokuapp.com/api/investor/", requestBody);
        return newInvestor;
    },

    updateExistingInvestor: async (requestBody, id) => {
        const updatedInvestor = await axios.put("https://lathaleeth.herokuapp.com/api/investor/"+id, requestBody);
        return updatedInvestor;
    },

    deleteExistingInvestor: async id => {
        const deletedInvestor = await axios.delete("https://lathaleeth.herokuapp.com/api/investor/"+id);
        return deletedInvestor;
    },
    deleteAllInvestor: async () => {
        const deletedInvestors = await axios.post("https://lathaleeth.herokuapp.com/api/investor/deleteAll/");
        return deletedInvestors;
    }
};

module.exports = investor_functions;