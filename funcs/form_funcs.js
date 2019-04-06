const axios = require("axios");
const formFunctions = {
  // form functions so far
  getForms: async () => {
    const forms = await axios.get("http://localhost:5000/api/forms/");
    return forms;
  },
  getFormByID: async id => {
    const form = await axios.get("http://localhost:5000/api/forms/" + id);
    return form;
  },
  deleteForm: async id => {
    const form = await axios.delete(
      "http://localhost:5000/api/forms/" + id
    );
    return form;
  },
  createForm: async requestBody => {
    const form = await axios.post(
      "http://localhost:5000/api/forms/",
      requestBody
    );
    return form;
  },
  updateForm: async (requestBody, id) => {
    const form = await axios.put(
      "http://localhost:5000/api/forms/" + id,
      requestBody
    );
    return form;
  },
  sendToAdmin: async (idi, ida) => {
    const form = await axios.post(
      "http://localhost:5000/api/forms/sendToAdmin/" + idi + "/" + ida
    );
    return form;
  },
  viewStatus: async id => {
    const form = await axios.get(
      "http://localhost:5000/api/forms/statusByID/" + id
    );
    return form;
  },
   deleteAllForms: async () => {
    const form = await axios.delete(
      "http://localhost:5000/api/forms/deleteAll/" 
    );
    return form;
  },
  lawyerReview: async (idl, id) => {
    const form = await axios.put(
      "http://localhost:5000/api/forms/lawyerReview/" + idl + "/" + id
    );
    return form;
  },
  reviewerReview: async (idr, id) => {
    const form = await axios.put(
      "http://localhost:5000/api/forms/reviewerReview/" + idr + "/" + id
    );
    return form;
  },
   getNextSequenceValue:(sequenceName)=>{

    var sequenceDocument = db.counters.findAndModify({
      query: { _id: sequenceName },
      update: { $inc: { sequence_value: 1 } },
      new: true
    });

return sequenceDocument.sequence_value;
}
};
module.exports = formFunctions;
