const axios = require("axios");
const functions = {
  getEntity_Emp: async () => {
    const emps = await axios.get("http://localhost:3000/api/entity_emp/");
    return emps;
  },
  getEntity_EmpbyID: async id => {
    const emps = await axios.get(
      "http://localhost:3000/api/entity_emp/byID/" + id
    );
    return emps;
  },
  createEntity_Emp: async requestBody => {
    const emps = await axios.post(
      "http://localhost:3000/api/entity_emp/",
      requestBody
    );
    //  await axios({
    //       method: 'post',
    //      url: "http://localhost:3000/api/entity_emp/",
    //       headers: {},
    //      data: JSON.stringify(requestBody)
    //   });
    return emps;
  },
  updateEntity_Emp: async (requestBody, id) => {
    const emps = await axios.put(
      "http://localhost:3000/api/entity_emp/update/" + id,
      requestBody
    );
    return emps;
  },
  deleteEntity_Emp: async id => {
    const emps = await axios.delete(
      "http://localhost:3000/api/entity_emp/delete/" + id
    );
    return emps;
  },
    assignLawyer: async (lawyerid,investorid,adminid) => {
        const emps = await axios.put(
            "http://localhost:3000/api/entity_emp/assignLawyer/" + lawyerid+'/'+investorid+'/'+adminid
        );
        return emps;
    },
    lawyerFillForm: async (lawyerid, investorid,body) => {
        const emps = await axios.put(
          "http://localhost:3000/api/entity_emp/lawyerfillform/" +lawyerid+'/'+investorid,body
        );
        return emps;
    }
};
module.exports = functions;
