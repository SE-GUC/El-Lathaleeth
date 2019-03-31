const form_funcs = require('./funcs/form_funcs');
const emp_funcs = require("./funcs/entity_emp_funcs");

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
test("Testing Getting by id with a correct id", async () =>{
  try{
    expect.assertions(1);
    const allForms  =  await form_funcs.getForms();
    const response = await form_funcs.getFormByID(allForms.data.data[0]._id);
    expect(response.data.data.length).toEqual(1);


  }
  catch(error){
    // expect(error.message).toEqual("Employee does not exist");
  }
},30000);

test("Testing Getting by id with an incorrect id", async () => {
 try{
  expect.assertions(1);
  const response = await form_funcs.getFormByID("5c9e425d2fee3419ac5abd74");
  expect(response.data.data.length).toEqual(0);
 }
 catch(error){
  expect(error.message).toEqual("Request failed with status code 404")
 }
});
test("Creating Form, then deleting a form", async ()=>{
  expect.assertions(1);
  const created = await form_funcs.createForm({
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
  const response = await form_funcs.getForms();
  const oldLength = response.data.data.length;
  const response1 = await form_funcs.deleteForm(created.data.data._id);
  const response2 = await form_funcs.getForms();
  const newLength = response2.data.data.length;
  expect(newLength).toEqual(oldLength - 1);
 
});
test("Creating Form, assign it to lawyer,deleteing the form, and checking it got deleted from lawyer arrays", async ()=>{
  expect.assertions(4);
  const created = await form_funcs.createForm({
    "formType": "SPC",
    "address": "Bouja",
    "arabicName": "???? ???????",
    "englishName": "Lina Productions",
    "phone": "11111111111",
    "fax": "23344",
    "investor": {
      "firstName": "Naka",
      "middleName": "Amr",
      "lastName": "Riad",
      "gender": "male",
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
  const formId= created.data.data._id;
  const response5 = await emp_funcs.getEntity_Emp();
  expect(1).toEqual(1);
  const oldLengthl = response5.data.data.length;
  const createdLawyer =await emp_funcs.createEntity_Emp({
    lawyer_details: {
      pending_forms: [formId],
      reviewed_forms: [formId],
      to_be_filled_for: [],
      filled_forms: [formId],
      speciality: "mo7amy 5ol3",
      education: "Bsc."
    },
    username: "Alsouidan",
    password: "mshwed h2oklmdvol",
    email: "Hwedfdghi@gmail.com",
    dateOfBirth: "1998-02-14T00:00:00.000Z",
    firstName: "Ali",
    middleName: "Amr",
    lastName: "Souidan",
    emp_type: "Lawyer",
    joined_on: "2018-02-15T00:00:00.000Z"
  });
  const response = await form_funcs.getForms();
  const response6 = await emp_funcs.getEntity_Emp();
  const newLengthl = response6.data.data.length;
  expect(newLengthl).toEqual(oldLengthl + 1);
  const oldLength = response.data.data.length;
  const response1 = await form_funcs.deleteForm(created.data.data._id);
  const response2 = await form_funcs.getForms();
  const newLength = response2.data.data.length;
  expect(newLength).toEqual(oldLength - 1);
  const updatedEmp=await emp_funcs.getEntity_EmpbyID(createdLawyer.data.data._id);
  const pArrayLength= updatedEmp.data.data.lawyer_details.pending_forms.length;
  const rArrayLength= updatedEmp.data.data.lawyer_details.reviewed_forms.length;
  const fAarrayLength= updatedEmp.data.data.lawyer_details.filled_forms.length;
  expect(pArrayLength).toEqual(0);
  expect(rArrayLength).toEqual(0);
  expect(fArrayLength).toEqual(0);
  
 
});


