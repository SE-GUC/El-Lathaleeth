const emp_funcs = require('./funcs/entity_emp_funcs');
const forms_func = require('./funcs/forms_funcs');
const Form = require("./models/Form");
const comment_funcs = require('./funcs/comment_funcs');
const form_funcs = require('./funcs/form_funcs');

test('', async () => {
    expect.assertions(1)
    const response = await emp_funcs.getEntity_Emp()
    expect(response.data.data[0].username).toEqual("ALIouidan");
});


test("Create Form", async ()=>{
  const formsLength = await Form.getForm();
  var form = {
    "formType": "SSC",
    "address": "Bouja",
    "arabicName": "???? ???????",
    "englishName": "Lina Productions",
    "phone": "11111111111",
    "fax": "23344",
    "investorId": "5c9cc93a90007226344b97a0",
    "capitalCurr": "Euro",
    "capitalVal": 500000,
    "law": "Laws drop down menu",
    "legalForm": "Legal form of company drop down",
    "createdOn": "2019-03-02T19:55:25.722Z",
    "lastTouch": "_iddddd",
    "status": "active",
    "deadline": "2019-06-06",
    "bitIL": 0,
    "boardOfDirectors": ["5c9297b87061c221a85c7d15"]
  }
  const response = await forms_func.createSSCForm(form);
  const formsLengthPlusOne = await Form.
  expect(formsLength.data.data.length + 1).toEqual(formsLengthPlusOne.data.data.length)
});

