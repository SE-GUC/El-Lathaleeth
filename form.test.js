const form_funcs = require('./funcs/form_funcs');

test("Creating Form", async ()=>{
  expect.assertions(1);
  const response = await form_funcs.getForms();
  const oldLength = response.data.data.length;
  const create = await form_funcs.createForm({
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
      "gender": "female",
      "nationality": "Egyptian",
      "investorType": "individual",
      "typeOfID": "id",
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
  });
  const response1 = await form_funcs.getForms();
  expect(response1.data.data.length).toEqual(oldLength + 1);
 
});

