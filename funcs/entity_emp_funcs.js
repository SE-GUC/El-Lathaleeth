const axios = require('axios');
const functions = {
    add: (x, y) => x + y,
    getEntity_Emp: async () => {
        const emps = await axios.get(
          "http://localhost:3000/api/entity_emp/"
        );
        return emps
    },

};
module.exports = functions;