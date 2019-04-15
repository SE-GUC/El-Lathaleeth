const axios = require("axios");
const functions = {
  getEntity_Emp: async () => {
    const emps = await axios.get("https://lathaleeth.herokuapp.com/api/entity_emp/");
    return emps;
  },
  getEntity_EmpbyID: async id => {
    const emps = await axios.get("https://lathaleeth.herokuapp.com/api/entity_emp/" + id);
    return emps;
  },
  createEntity_Emp: async requestBody => {
    const emps = await axios.post(
      "https://lathaleeth.herokuapp.com/api/entity_emp/",
      requestBody
    );
    //  await axios({
    //       method: 'post',
    //      url: "https://lathaleeth.herokuapp.com/api/entity_emp/",
    //       headers: {},
    //      data: JSON.stringify(requestBody)
    //   });
    return emps;
  },
  updateEntity_Emp: async (requestBody, id) => {
    const emps = await axios.put(
      "https://lathaleeth.herokuapp.com/api/entity_emp/" + id,
      requestBody
    );
    return emps;
  },
  deleteEntity_Emp: async id => {
    const emps = await axios.delete(
      "https://lathaleeth.herokuapp.com/api/entity_emp/" + id
    );
    return emps;
  },
  lawyerFillForm: async (lawyerid, body) => {
    const emps = await axios.post(
      "https://lathaleeth.herokuapp.com/api/entity_emp/lawyerfillform/" + lawyerid,
      body
    );
    return emps;
  },
  deleteAllEntity_Emp: async () => {
    const emps = await axios.post(
      "https://lathaleeth.herokuapp.com/api/entity_emp/deleteAll/"
    );
    return emps;
  },
  lawyerReserveForm: async (idl, id) => {
    const emp = await axios.put(
      "https://lathaleeth.herokuapp.com/api/entity_emp/reserveForm/" +
        idl +
        "/" +
        id
    );

    return emp;
  },
  reviewerReserveForm: async (idl, id) => {
    const emp = await axios.put(
      "https://lathaleeth.herokuapp.com/api/entity_emp/reserveForm/" +
        idl +
        "/" +
        id
    );

    return emp;
  }
};
module.exports = functions;
