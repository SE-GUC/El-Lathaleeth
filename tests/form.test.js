const form_funcs = require("../funcs/form_funcs");
const emp_funcs = require("../funcs/entity_emp_funcs");

test("Creating Form", async () => {
  expect.assertions(1);
  const response = await form_funcs.getForms();
  const oldLength = response.data.data.length;
  const create = await form_funcs.createForm({
    formType: "SPC",
    address: "Bouja",
    arabicName: "???? ???????",
    englishName: "Lina Productions",
    phone: "11111111111",
    fax: "23344",
    investor: {
      firstName: "Nadeen",
      middleName: "Amr",
      lastName: "Riad",
      gender: "female",
      nationality: "Egyptian",
      investorType: "individual",
      typeOfID: "id",
      IDNumber: "1234567890",
      dateOfBirth: "1970-03-21",
      address: "Some place",
      phoneNumber: "01117208627",
      faxNumber: "1234A1234",
      creditCardNumber: "4024007158885060",
      email: "hello@gmail.com",
      capital: "1000000",
      capitalCurrency: "Euro"
    },
    capitalCurr: "Euro",
    capitalVal: 500000,
    law: "Laws drop down menu",
    legalForm: "Legal form of company drop down",
    createdOn: "2019-03-02T19:55:25.722Z",
    lastTouch: "_iddddd",
    status: "active",
    deadline: "2019-06-06",
    bitIL: 0,
    comments: []
  });
  const response1 = await form_funcs.getForms();
  expect(response1.data.data.length).toEqual(oldLength + 1);
}, 100000);

test("Testing Create Actually Creates with correct values", async () => {
  expect.assertions(3);
  const created = await form_funcs.createForm({
    formType: "SPC",
    address: "Bouja",
    arabicName: "???? ???????",
    englishName: "Lina Productions",
    phone: "11111111111",
    fax: "23344",
    investor: {
      firstName: "Nadeen",
      middleName: "Amr",
      lastName: "Riad",
      gender: "female",
      nationality: "Egyptian",
      investorType: "individual",
      typeOfID: "id",
      IDNumber: "1234567890",
      dateOfBirth: "1970-03-21",
      address: "Some place",
      phoneNumber: "01117208627",
      faxNumber: "1234A1234",
      creditCardNumber: "4024007158885060",
      email: "hello@gmail.com",
      capital: "1000000",
      capitalCurrency: "Euro"
    },
    capitalCurr: "Euro",
    capitalVal: 500000,
    law: "Laws drop down menu",
    legalForm: "Legal form of company drop down",
    createdOn: "2019-03-02T19:55:25.722Z",
    lastTouch: "_iddddd",
    status: "active",
    deadline: "2019-06-06",
    bitIL: 0,
    comments: []
  });
  const response1 = await form_funcs.getFormByID(created.data.data._id);
  expect(response1.data.data.englishName).toEqual(
    created.data.data.englishName
  );
  expect(response1.data.data.phone).toEqual(created.data.data.phone);
  expect(response1.data.data.bitIL).toEqual(created.data.data.bitIL);
}, 100000);

test("Testing Creating with wrong data types", async () => {
  expect.assertions(1);
  try {
    const created = await form_funcs.createForm({
      formType: "SPC",
      address: "Bouja",
      arabicName: "???? ???????",
      englishName: "Lina Productions",
      phone: "11111111111",
      fax: "23344",
      investor: {
        firstName: "Nadeen",
        middleName: "Amr",
        lastName: "Riad",
        gender: "female",
        nationality: "Egyptian",
        investorType: "individual",
        typeOfID: "id",
        IDNumber: "1234567890",
        dateOfBirth: "1970-03-21",
        address: "Some place",
        phoneNumber: "01117208627",
        faxNumber: "1234A1234",
        creditCardNumber: "4024007158885060",
        email: "hello@gmail.com",
        capital: "1000000",
        capitalCurrency: "Euro"
      },
      capitalCurr: "Euro",
      capitalVal: 500000,
      law: "Laws drop down menu",
      legalForm: "Legal form of company drop down",
      createdOn: "2019-03-02T19:55:25.722Z",
      lastTouch: "_iddddd",
      status: "active",
      deadline: "2019-06-06",
      bitIL: "INVALID DATA",
      comments: []
    });
  } catch (error) {
    expect(error.message).toEqual("Request failed with status code 400");
    //400 bad request that we send when joi validation fails
  }
}, 100000);
// test view Status
test("Testing view status after creating ", async () => {
  expect.assertions(1);
  const created = await form_funcs.createForm({
    formType: "SPC",
    address: "Bouja",
    arabicName: "???? ???????",
    englishName: "Lina Productions",
    phone: "11111111111",
    fax: "23344",
    investor: {
      firstName: "Nadeen",
      middleName: "Amr",
      lastName: "Riad",
      gender: "female",
      nationality: "Egyptian",
      investorType: "individual",
      typeOfID: "id",
      IDNumber: "1234567890",
      dateOfBirth: "1970-03-21",
      address: "Some place",
      phoneNumber: "01117208627",
      faxNumber: "1234A1234",
      creditCardNumber: "4024007158885060",
      email: "hello@gmail.com",
      capital: "1000000",
      capitalCurrency: "Euro"
    },
    capitalCurr: "Euro",
    capitalVal: 500000,
    law: "Laws drop down menu",
    legalForm: "Legal form of company drop down",
    createdOn: "2019-03-02T19:55:25.722Z",
    lastTouch: "_iddddd",
    status: "active",
    deadline: "2019-06-06",
    bitIL: 0,
    comments: []
  });
  const responseStatus = await form_funcs.viewStatus(created.data.data._id);
  expect(responseStatus.data.data).toEqual(created.data.data.status);
}, 100000);
//test update after creating
test("Testing after creating existing and updated values", async () => {
  expect.assertions(3);
  const newForm = await form_funcs.createForm({
    formType: "SPC",
    address: "Bouja",
    arabicName: "???? ???????",
    englishName: "Lina Productions",
    phone: "11111111111",
    fax: "23344",
    investor: {
      firstName: "Nadeen",
      middleName: "Amr",
      lastName: "Riad",
      gender: "female",
      nationality: "Egyptian",
      investorType: "individual",
      typeOfID: "id",
      IDNumber: "1234567890",
      dateOfBirth: "1970-03-21",
      address: "Some place",
      phoneNumber: "01117208627",
      faxNumber: "1234A1234",
      creditCardNumber: "4024007158885060",
      email: "hello@gmail.com",
      capital: "1000000",
      capitalCurrency: "Euro"
    },
    capitalCurr: "Euro",
    capitalVal: 500000,
    law: "Laws drop down menu",
    legalForm: "Legal form of company drop down",
    createdOn: "2019-03-02T19:55:25.722Z",
    lastTouch: "_iddddd",
    status: "active",
    deadline: "2019-06-06",
    bitIL: 0,
    comments: []
  });
  const updateForm = await form_funcs.updateForm(
    {
      formType: "SPC",
      address: "Bouja",
      arabicName: "NewArabicName",
      englishName: "Lina Productions",
      phone: "11111111111",
      fax: "23344",
      investor: {
        firstName: "Nadeen",
        middleName: "Amr",
        lastName: "Riad",
        gender: "female",
        nationality: "Egyptian",
        investorType: "individual",
        typeOfID: "id",
        IDNumber: "1234567890",
        dateOfBirth: "1970-03-21",
        address: "Some place",
        phoneNumber: "01117208627",
        faxNumber: "1234A1234",
        creditCardNumber: "4024007158885060",
        email: "hello@gmail.com",
        capital: "1000000",
        capitalCurrency: "Euro"
      },
      capitalCurr: "Dollar",
      capitalVal: 500000,
      law: "Laws drop down menu",
      legalForm: "Legal form of company drop down",
      createdOn: "2019-03-02T19:55:25.722Z",
      lastTouch: "_iddddd",
      status: "active",
      deadline: "2019-06-06",
      bitIL: 0,
      comments: []
    },
    newForm.data.data._id
  );
  const getForm = await form_funcs.getFormByID(newForm.data.data._id);
  expect(getForm.data.data.arabicName).toEqual(updateForm.data.data.arabicName);
  expect(getForm.data.data.capitalCurr).toEqual(
    updateForm.data.data.capitalCurr
  );
  expect(getForm.data.data.status).toEqual(updateForm.data.data.status);
}, 100000);
//Test update form with invalid info
test("Testing updating with invalid info", async () => {
  expect.assertions(1);
  try {
    const newForm = await form_funcs.createForm({
      formType: "SPC",
      address: "Bouja",
      arabicName: "???? ???????",
      englishName: "Lina Productions",
      phone: "11111111111",
      fax: "23344",
      investor: {
        firstName: "Nadeen",
        middleName: "Amr",
        lastName: "Riad",
        gender: "female",
        nationality: "Egyptian",
        investorType: "individual",
        typeOfID: "id",
        IDNumber: "1234567890",
        dateOfBirth: "1970-03-21",
        address: "Some place",
        phoneNumber: "01117208627",
        faxNumber: "1234A1234",
        creditCardNumber: "4024007158885060",
        email: "hello@gmail.com",
        capital: "1000000",
        capitalCurrency: "Euro"
      },
      capitalCurr: "Euro",
      capitalVal: 500000,
      law: "Laws drop down menu",
      legalForm: "Legal form of company drop down",
      createdOn: "2019-03-02T19:55:25.722Z",
      lastTouch: "_iddddd",
      status: "active",
      deadline: "2019-06-06",
      bitIL: 0,
      comments: []
    });
    const updateForm = await form_funcs.updateForm(
      {
        formType: "SPC",
        address: "Bouja",
        arabicName: "NewArabicName",
        englishName: "Lina Productions",
        phone: "11111111111",
        fax: "23344",
        investor: {
          firstName: "Nadeen",
          middleName: "Amr",
          lastName: "Riad",
          gender: "female",
          nationality: "Egyptian",
          investorType: "individual",
          typeOfID: "id",
          IDNumber: "1234567890",
          dateOfBirth: "1970-03-21",
          address: "Some place",
          phoneNumber: "01117208627",
          faxNumber: "1234A1234",
          creditCardNumber: "4024007158885060",
          email: "hello@gmail.com",
          capital: "1000000",
          capitalCurrency: "Euro"
        },
        capitalCurr: "Dollar",
        capitalVal: 500000,
        law: "Laws drop down menu",
        legalForm: "Legal form of company drop down",
        createdOn: "2019-03-02T19:55:25.722Z",
        lastTouch: "_iddddd",
        status: "active",
        deadline: "Hello I am wrong data!",
        bitIL: 0,
        comments: []
      },
      newForm.data.data._id
    );
  } catch (error) {
    expect(error.message).toEqual("Request failed with status code 400");
  }
}, 100000);
//Test update non existant form
test("Testing updating a none form existing form", async () => {
  expect.assertions(1);
  try {
    const fakeID = "5c9f5c4e3fda262b68e756fb";
    const updateForm = await form_funcs.updateForm(
      {
        formType: "SPC",
        address: "Bouja",
        arabicName: "NewArabicName",
        englishName: "Lina Productions",
        phone: "11111111111",
        fax: "23344",
        investor: {
          firstName: "Nadeen",
          middleName: "Amr",
          lastName: "Riad",
          gender: "female",
          nationality: "Egyptian",
          investorType: "individual",
          typeOfID: "id",
          IDNumber: "1234567890",
          dateOfBirth: "1970-03-21",
          address: "Some place",
          phoneNumber: "01117208627",
          faxNumber: "1234A1234",
          creditCardNumber: "4024007158885060",
          email: "hello@gmail.com",
          capital: "1000000",
          capitalCurrency: "Euro"
        },
        capitalCurr: "Dollar",
        capitalVal: 500000,
        law: "Laws drop down menu",
        legalForm: "Legal form of company drop down",
        createdOn: "2019-03-02T19:55:25.722Z",
        lastTouch: "_iddddd",
        status: "active",
        deadline: "Hello I am wrong data!",
        bitIL: 0,
        comments: []
      },
      fakeID
    );
  } catch (error) {
    expect(error.message).toEqual("Request failed with status code 404");
  }
}, 100000);

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
  try {
    expect.assertions(1);
    const response = await form_funcs.getFormByID(
      "5c9e425d2fee3419ac5abd70"
    );
    expect(response.data.data.length).toEqual(0);
  } catch (error) {
    expect(error.message).toEqual("Request failed with status code 404");
  }
}, 30000);

test("testing delete with incorrect id", async () => {
  try {
    expect.assertions(1);
    const response = await form_funcs.deleteForm(
      "5c9e425d2fee3419ac5abd71"
    );
  } catch (error) {
    expect(error.message).toEqual("Request failed with status code 404");
  }
}, 30000);

test("Creating Form, then deleting a form", async ()=>{
  expect.assertions(1);
  const created = await form_funcs.createForm({
    formType: "SPC",
    address: "Bouja",
    arabicName: "???? ???????",
    englishName: "Lina Productions",
    phone: "11111111111",
    fax: "23344",
    investor: {
      firstName: "Nadeen",
      middleName: "Amr",
      lastName: "Riad",
      gender: "female",
      nationality: "Egyptian",
      investorType: "individual",
      typeOfID: "id",
      IDNumber: "1234567890",
      dateOfBirth: "1970-03-21",
      address: "Some place",
      phoneNumber: "01117208627",
      faxNumber: "1234A1234",
      creditCardNumber: "4024007158885060",
      email: "hello@gmail.com",
      capital: "1000000",
      capitalCurrency: "Euro"
    },
    capitalCurr: "Euro",
    capitalVal: 500000,
    law: "Laws drop down menu",
    legalForm: "Legal form of company drop down",
    createdOn: "2019-03-02T19:55:25.722Z",
    lastTouch: "_iddddd",
    status: "active",
    deadline: "2019-06-06",
    bitIL: 0,
    comments: []
  });
  const response = await form_funcs.getForms();
  const oldLength = response.data.data.length;
  const response1 = await form_funcs.deleteForm(created.data.data._id);
  const response2 = await form_funcs.getForms();
  const newLength = response2.data.data.length;
  expect(newLength).toEqual(oldLength - 1);
 
},
100000
);
test("Creating Form, assign it to lawyer,deleteing the form, and checking it got deleted from lawyer arrays", async ()=>{
  expect.assertions(5);
  const created = await form_funcs.createForm({
    formType: "SPC",
    address: "Bouja",
    arabicName: "???? ???????",
    englishName: "Lina Productions",
    phone: "11111111111",
    fax: "23344",
    investor: {
      firstName: "Naka",
      middleName: "Amr",
      lastName: "Riad",
      gender: "male",
      nationality: "Egyptian",
      investorType: "individual",
      typeOfID: "id",
      IDNumber: "1234567890",
      dateOfBirth: "1970-03-21",
      address: "Some place",
      phoneNumber: "01117208627",
      faxNumber: "1234A1234",
      creditCardNumber: "4024007158885060",
      email: "hello@gmail.com",
      capital: "1000000",
      capitalCurrency: "Euro"
    },
    capitalCurr: "Euro",
    capitalVal: 500000,
    law: "Laws drop down menu",
    legalForm: "Legal form of company drop down",
    createdOn: "2019-03-02T19:55:25.722Z",
    lastTouch: "_iddddd",
    status: "active",
    deadline: "2019-06-06",
    bitIL: 0,
    comments: []
  });
  const formId= created.data.data._id;
  const response5 = await emp_funcs.getEntity_Emp();
  const oldLengthl = response5.data.data.length;
  const createdLawyer =emp_funcs.createEntity_Emp({
    lawyer_details: {
      pending_forms: [formId],
      reviewed_forms: [formId],
      to_be_filled_for: [],
      filled_forms: [formId],
      speciality: "mo7amy 5ol3",
      education: "Bsc."
    },
    admin_details: {
      registered_investors: [],
      investors_to_assign: []
    },
    reviewer_details: {
      pending_forms: [],
      reviewed_forms: []
    },
    username: "Naka",
    password: "mshwed h2oklmdvol",
    email: "Hwedfnakai@gmail.com",
    dateOfBirth: "1998-02-14T00:00:00.000Z",
    firstName: "naka",
    middleName: "Amr",
    lastName: "Souidan",
    emp_type: "Lawyer",
    joined_on: "2018-02-15T00:00:00.000Z"
  });
  const response6 = await emp_funcs.getEntity_Emp();
  const newLengthl = response6.data.data.length;
  expect(newLengthl).toEqual(oldLengthl + 1);
  const response = await form_funcs.getForms();
  const oldLength = response.data.data.length;
  const response1 = await form_funcs.deleteForm(formId);
  const response2 = await form_funcs.getForms();
  const newLength = response2.data.data.length;
  expect(newLength).toEqual(oldLength - 1);
  const updatedEmp=await emp_funcs.getEntity_EmpbyID(createdLawyer.data.data._id);
  const pArrayLength= updatedEmp.data.data.lawyer_details.pending_forms.length;
  const rArrayLength= updatedEmp.data.data.lawyer_details.reviewed_forms.length;
  const fArrayLength= updatedEmp.data.data.lawyer_details.filled_forms.length;
  expect(pArrayLength).toEqual(0);
  expect(rArrayLength).toEqual(0);
  expect(fArrayLength).toEqual(0);
},
100000
);