const axios = require("axios");
const formFunctions = {

// form functions so far
  getForms: async () => {
    const forms = await axios.get("http://localhost:3000/api/forms/");
    return forms;
  },
  getFormByID: async id => {
    const form = await axios.get("http://localhost:3000/api/forms/byID/" + id);
    return form;
  },
  deleteForm: async id => {
    const form = await axios.delete(
      "http://localhost:3000/api/forms/delete/" + id
    );
    return form;
  },
  createForm: async () => {
    const form = await axios.post("http://localhost:3000/api/forms/create/");
    return form;
  },
  updateForm: async id => {
    const form = await axios.put(
      "http://localhost:3000/api/forms/update/" + id
    );
    return form;
  },
  sendToAdmin: async () => {
    const form = await axios.post(
      "http://localhost:3000/api/forms/sendToAdmin/"
    );
    return form;
  },
  viewStatus: async id => {
    const form = await axios.get(
      "http://localhost:3000/api/forms/statusByID/" + id
    );
    return form;
  },
  getForm: async () => {
    const forms = await axios.get(
      "http://localhost:3000/api/forms/"
    );
    return forms
  },
  createForm: async requestBody => {
    const createdForm = await axios.post(
      "http://localhost:3000/api/forms/create/",
      requestBody
    );
    return createdForm
  },
};
module.exports = formFunctions;
