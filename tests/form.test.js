const form_funcs = require("../funcs/form_funcs");

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
  expect(getForm.data.data.arabicName).toEqual(
    updateForm.data.data.arabicName
  );
  expect(getForm.data.data.capitalCurr).toEqual(
    updateForm.data.data.capitalCurr
  );
  expect(getForm.data.data.status).toEqual(updateForm.data.data.status);
}, 100000);
//Test update form with invalid info
test("Testing updating with invalid info", async () => {
  expect.assertions(1);
  try{
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
  }catch(error) {
      expect(error.message).toEqual("Request failed with status code 400");
  }
}, 100000);
//Test update non existant form
test("Testing updating a none form existing form", async () => {
  expect.assertions(1);
  try{
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
  }catch(error) {
      expect(error.message).toEqual("Request failed with status code 404");
  }
}, 100000);