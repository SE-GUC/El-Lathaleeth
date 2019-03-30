const forms_func = require('./funcs/forms_funcs');
const Form = require("./models/Form");

test("Create Form", async ()=>{
  const formsLength = await Form.getForm();
  var form = {
    "formType": "SPC",
    "address": "Bouja",
    "arabicName": "???? ???????",
    "englishName": "Lina Productions",
    "phone": "11111111111",
    "fax": "23344",
    "investor": {
      "firstName": "Nadeen",
      "middleName": "Amr",
      "lastName": "Riad",
      "gender": "Female",
      "nationality": "Egyptian",
      "investorType": "Individual",
      "typeOfID": "Id",
      "IDNumber": "1234567890",
      "dateOfBirth": "1970-03-21",
      "address": "Some place",
      "phoneNumber": "01117208627",
      "faxNumber": "1234A1234",
      "creditCardNumber": "4024007158885060",
      "email": "hello@gmail.com",
      "capital": "1000000",
      "capitalCurrency": "Euro"
     },
    "capitalCurr": "Euro",
    "capitalVal": 500000,
    "law": "Laws drop down menu",
    "legalForm": "Legal form of company drop down",
    "createdOn": "2019-03-02T19:55:25.722Z",
    "lastTouch": "_iddddd",
    "status": "active",
    "deadline": "2019-06-06",
    "bitIL": 0
  }
  const response = await forms_func.createSSCForm(form);
  const formsLengthPlusOne = await Form.
  expect(formsLength.data.data.length + 1).toEqual(formsLengthPlusOne.data.data.length)
});

