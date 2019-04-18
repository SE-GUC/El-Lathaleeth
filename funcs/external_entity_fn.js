const axios = require('axios')
const external_entity_functions = {
	getExternal_entity: async () => {
                const external_entity = await axios.get("http://localhost:5000/api/external_entity/")
                return external_entity
        },
        getExternal_entityByID: async id => {
                const external_entity = await axios.get("http://localhost:5000/api/external_entity/" + id);
                return external_entity;
              },
        createExternal_entity: async requestBody => {
                const external_entity = await axios.post("http://localhost:5000/api/external_entity/",requestBody);
                return external_entity;
              },
        deleteExternal_entity: async id => {
                const external_entity = await axios.delete("http://localhost:5000/api/external_entity/" + id);
                return external_entity;
              },
        deleteAllExternal_entity: async () => {
                const external_entity = await axios.post("http://localhost:5000/api/external_entity/deleteAll/");
                return external_entity;
        },
        updateExternal_entity: async (requestBody, id) => {
                const external_entity = await axios.put("http://localhost:5000/api/external_entity/" + id, requestBody);
                return external_entity;
              }
              
};
module.exports = external_entity_functions;