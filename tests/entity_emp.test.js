const emp_funcs = require("../funcs/entity_emp_funcs");
const investor_funcs = require("../funcs/investor_funcs");
const form_funcs = require("../funcs/form_funcs");
test("Testing Create Actually Creates in DB", async () => {
  expect.assertions(1);
  const response = await emp_funcs.getEntity_Emp();
  const oldLength = response.data.data.length;
  const created = await emp_funcs.createEntity_Emp({
    lawyer_details: {
      pending_forms: [],
      reviewed_forms: [],
      filled_forms: [],
      speciality: "mo7amy 5ol3",
      education: "Bsc."
    },
    admin_details: {
      registered_employees: [],
      investors_to_assign: []
    },
    reviewer_details: {
      pending_forms: [],
      reviewed_forms: []
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
  const response1 = await emp_funcs.getEntity_Emp();
  const newLength = response1.data.data.length;
  expect(newLength).toEqual(oldLength + 1);
}, 10000);
test("Testing Create Actually Creates in DB with correct values", async () => {
  expect.assertions(3);
  const created = await emp_funcs.createEntity_Emp({
    lawyer_details: {
      pending_forms: [],
      reviewed_forms: [],
      filled_forms: [],
      speciality: "mo7amy 5ol3",
      education: "Bsc."
    },
    admin_details: {
      registered_employees: [],
      investors_to_assign: []
    },
    reviewer_details: {
      pending_forms: [],
      reviewed_forms: []
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
  const response1 = await emp_funcs.getEntity_EmpbyID(created.data.data._id);
  const username = response1.data.data.username;
  expect(username).toEqual(created.data.data.username);
  expect(response1.data.data.password).toEqual(created.data.data.password);
  expect(response1.data.data.email).toEqual(created.data.data.email);
}, 10000);
test("Testing Create and then updating", async () => {
  expect.assertions(2);
  const created = await emp_funcs.createEntity_Emp(
    {
      lawyer_details: {
        pending_forms: [],
        reviewed_forms: [],

        filled_forms: [],
        speciality: "mo7amy 5ol3",
        education: "Bsc."
      },
      admin_details: {
        registered_employees: [],
        investors_to_assign: []
      },
      reviewer_details: {
        pending_forms: [],
        reviewed_forms: []
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
    },
    100000
  );
  const response1 = await emp_funcs.updateEntity_Emp(
    {
      lawyer_details: {
        pending_forms: [],
        reviewed_forms: [],

        filled_forms: [],
        speciality: "mo7amy 5ol3",
        education: "Bsc."
      },
      admin_details: {
        registered_employees: [],
        investors_to_assign: []
      },
      reviewer_details: {
        pending_forms: [],
        reviewed_forms: []
      },
      username: "Alsouidan",
      password: "mshwed h2oklmdvol",
      email: "Hwedfdghi@gmail.com",
      dateOfBirth: "1998-02-14T00:00:00.000Z",
      firstName: "Ahmed",
      middleName: "Amr",
      lastName: "Souidan",
      emp_type: "Lawyer",
      joined_on: "2018-02-15T00:00:00.000Z"
    },
    created.data.data._id
  );

  expect(response1.data.data.firstName).toEqual("Ahmed");
  expect(response1.data.data.username).toEqual(created.data.data.username);
}, 100000);
test("Testing Creating then Deleting an Entity_Employee", async () => {
  expect.assertions(1);

  const created = await emp_funcs.createEntity_Emp({
    lawyer_details: {
      pending_forms: [],
      reviewed_forms: [],

      filled_forms: [],
      speciality: "mo7amy 5ol3",
      education: "Bsc."
    },
    admin_details: {
      registered_employees: [],
      investors_to_assign: []
    },
    reviewer_details: {
      pending_forms: [],
      reviewed_forms: []
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
  const response = await emp_funcs.getEntity_Emp();
  const oldLength = response.data.data.length;
  const response1 = await emp_funcs.deleteEntity_Emp(created.data.data._id);
  const response2 = await emp_funcs.getEntity_Emp();
  const newLength = response2.data.data.length;
  expect(newLength).toEqual(oldLength - 1);
}, 10000);
test("Testing Creating with wrong data types", async () => {
  expect.assertions(1);
  try {
    const created = await emp_funcs.createEntity_Emp({
      lawyer_details: {
        pending_forms: [],
        reviewed_forms: [],
        filled_forms: [],
        speciality: "mo7amy 5ol3",
        education: "Bsc."
      },
      admin_details: {
        registered_employees: []
      },
      reviewer_details: {
        pending_forms: [],
        reviewed_forms: []
      },
      username: "Alsouidan",
      password: "mshwed h2oklmdvol",
      email: "Hwedfdghi@gmail.com",
      dateOfBirth: "WRONG DATA TYPE",
      firstName: "Ali",
      middleName: "Amr",
      lastName: "Souidan",
      emp_type: "Lawyer",
      joined_on: "2018-02-15T00:00:00.000Z"
    });
  } catch (error) {
    expect(error.message).toEqual("Request failed with status code 400");
    //400 bad request that we send when joi validation fails
  }
}, 10000);

test("Testing Getting by id with a correct id", async () => {
  try {
    expect.assertions(1);
    const allEmps = await emp_funcs.getEntity_Emp();
    const response = await emp_funcs.getEntity_EmpbyID(
      allEmps.data.data[0]._id
    );
    expect(response.data.data.length).toEqual(1);
  } catch (error) {
    // expect(error.message).toEqual("Employee does not exist");
  }
}, 30000);

test("Testing Getting by id with an incorrect id", async () => {
  try {
    expect.assertions(1);
    const response = await emp_funcs.getEntity_EmpbyID(
      "5c9e425d2fee3419ac5abd70"
    );
    expect(response.data.data.length).toEqual(0);
  } catch (error) {
    expect(error.message).toEqual("Request failed with status code 404");
  }
}, 30000);

test("Testing Delete with correct id", async () => {
  try {
    expect.assertions(1);
    const allEmps = await emp_funcs.getEntity_Emp();
    const oldLength = allEmps.data.data.length;
    const response = await emp_funcs.deleteEntity_Emp(allEmps.data.data[0]._id);
    const after = await emp_funcs.getEntity_Emp();
    const newLength = after.data.data.length;
    expect(newLength).toEqual(oldLength - 1);
  } catch (error) {
    //
  }
}, 30000);

test("testing delete with incorrect id", async () => {
  try {
    expect.assertions(0);
    const response = await emp_funcs.deleteEntity_Emp(
      "5c9e425d2fee3419ac5abd71"
    );
  } catch (error) {
    expect(error.message).toEqual("Request failed with status code 404");
  }
}, 30000);
//this one will be tricky as it is dependant on other user stories yet to be done, so I will postpone till
//others are done
test("Testing Investor choosing to have laweyr fill form", async () => {
  expect.assertions(1);
  const law = await emp_funcs.createEntity_Emp({
    lawyer_details: {
      pending_forms: [],
      reviewed_forms: [],
      filled_forms: [],
      speciality: "mo7amy 5ol3",
      education: "Bsc."
    },
    admin_details: {
      registered_employees: []
    },
    reviewer_details: {
      pending_forms: [],
      reviewed_forms: []
    },
    username: "Alsouidan",
    password: "mshwed h2oklmdvol",
    email: "Hwedfdghi@gmail.com",
    dateOfBirth: "1998-02-02",
    firstName: "Ali",
    middleName: "Amr",
    lastName: "Souidan",
    emp_type: "Lawyer",
    joined_on: "2018-02-15T00:00:00.000Z"
  });
  const filled_form = await emp_funcs.lawyerFillForm(law.data.data._id, {
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
    status: "posted",
    deadline: "2019-06-06",
    bitIL: 0,
    comments: []
  });
  const new_law = await emp_funcs.getEntity_EmpbyID(law.data.data._id);
  expect(new_law.data.data.lawyer_details.filled_forms).toContain(
    filled_form.data.data._id
  );
  const deleteForm = await form_funcs.deleteForm(filled_form.data.data._id);
}, 10000);
test("Testing lawyer reserves a form then reviews it", async () => {
  expect.assertions(3);
  const law = await emp_funcs.createEntity_Emp({
    lawyer_details: {
      pending_forms: [],
      reviewed_forms: [],
      filled_forms: [],
      speciality: "mo7amy 5ol3",
      education: "Bsc."
    },
    admin_details: {
      registered_employees: []
    },
    reviewer_details: {
      pending_forms: [],
      reviewed_forms: []
    },
    username: "Alsouidan",
    password: "mshwed h2oklmdvol",
    email: "Hwedfdghi@gmail.com",
    dateOfBirth: "1998-02-02",
    firstName: "Ali",
    middleName: "Amr",
    lastName: "Souidan",
    emp_type: "Lawyer",
    joined_on: "2018-02-15T00:00:00.000Z"
  });
  const filled_form = await form_funcs.createForm({
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
    status: "posted",
    deadline: "2019-06-06",
    bitIL: 0,
    comments: []
  });
  const res=await emp_funcs.lawyerReserveForm(law.data.data._id,filled_form.data.data._id)

  let new_law = await emp_funcs.getEntity_EmpbyID(law.data.data._id);
  expect(new_law.data.data.lawyer_details.pending_forms).toContain(
    filled_form.data.data._id
  );
  const rev = await form_funcs.lawyerReview(law.data.data._id, filled_form.data.data._id)
  new_law = await emp_funcs.getEntity_EmpbyID(law.data.data._id);
  expect(new_law.data.data.lawyer_details.pending_forms).not.toContain(
    filled_form.data.data._id
  );
  expect(new_law.data.data.lawyer_details.reviewed_forms).toContain(
    filled_form.data.data._id
  );
  const deleteForm = await form_funcs.deleteForm(filled_form.data.data._id);
}, 10000);
test("Testing reviewer reserves a form then reviews it", async () => {
  expect.assertions(3);
  const law = await emp_funcs.createEntity_Emp({
    lawyer_details: {
      pending_forms: [],
      reviewed_forms: [],
      filled_forms: [],
      speciality: "mo7amy 5ol3",
      education: "Bsc."
    },
    admin_details: {
      registered_employees: []
    },
    reviewer_details: {
      pending_forms: [],
      reviewed_forms: []
    },
    username: "Alsouidan",
    password: "mshwed h2oklmdvol",
    email: "Hwedfdghi@gmail.com",
    dateOfBirth: "1998-02-02",
    firstName: "Ali",
    middleName: "Amr",
    lastName: "Souidan",
    emp_type: "Reviewer",
    joined_on: "2018-02-15T00:00:00.000Z"
  });
  const filled_form = await form_funcs.createForm({
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
    status: "posted",
    deadline: "2019-06-06",
    bitIL: 0,
    comments: []
  });
  const res = await emp_funcs.reviewerReserveForm(law.data.data._id, filled_form.data.data._id)
console.log("pass 1")
  let new_law = await emp_funcs.getEntity_EmpbyID(law.data.data._id);
  expect(new_law.data.data.reviewer_details.pending_forms).toContain(
    filled_form.data.data._id
  );
  const rev = await form_funcs.reviewerReview(law.data.data._id, filled_form.data.data._id)
  console.log("pass 2");
  new_law = await emp_funcs.getEntity_EmpbyID(law.data.data._id);
  console.log("pass 3");
  expect(new_law.data.data.reviewer_details.pending_forms).not.toContain(
    filled_form.data.data._id
  );
  expect(new_law.data.data.reviewer_details.reviewed_forms).toContain(
    filled_form.data.data._id
  );
  const deleteForm = await form_funcs.deleteForm(filled_form.data.data._id);
}, 10000);
test("Testing lawyer reserves a form then reviews it and form status changes", async () => {
  expect.assertions(2);
  const law = await emp_funcs.createEntity_Emp({
    lawyer_details: {
      pending_forms: [],
      reviewed_forms: [],
      filled_forms: [],
      speciality: "mo7amy 5ol3",
      education: "Bsc."
    },
    admin_details: {
      registered_employees: []
    },
    reviewer_details: {
      pending_forms: [],
      reviewed_forms: []
    },
    username: "Alsouidan",
    password: "mshwed h2oklmdvol",
    email: "Hwedfdghi@gmail.com",
    dateOfBirth: "1998-02-02",
    firstName: "Ali",
    middleName: "Amr",
    lastName: "Souidan",
    emp_type: "Lawyer",
    joined_on: "2018-02-15T00:00:00.000Z"
  });
  const filled_form = await form_funcs.createForm({
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
    status: "posted",
    deadline: "2019-06-06",
    bitIL: 0,
    comments: []
  });
  const res = await emp_funcs.lawyerReserveForm(
    law.data.data._id,
    filled_form.data.data._id
  );

  let new_form = await form_funcs.getFormByID(filled_form.data.data._id);
  expect(new_form.data.data.status).toEqual(
    "pending"
  );
  const rev = await form_funcs.lawyerReview(
    law.data.data._id,
    filled_form.data.data._id
  );
  new_form = await form_funcs.getFormByID(filled_form.data.data._id);
  expect(new_form.data.data.status).toEqual("lawyer check");
  const deleteForm = await form_funcs.deleteForm(filled_form.data.data._id);
}, 10000);
afterAll(async () => {
  const msg= await emp_funcs.deleteAllEntity_Emp()
});
// beforeAll(async () => {
//   const msg = await emp_funcs.deleteAllEntity_Emp()
// });
