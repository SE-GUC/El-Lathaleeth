const emp_funcs = require("./funcs/entity_emp_funcs");
const investor_funcs = require("./funcs/investor_funcs");
const form_funcs = require("./funcs/form_funcs");
test("Testing Create Actually Creates in DB", async () => {
  expect.assertions(1);
  const response = await emp_funcs.getEntity_Emp();
  const oldLength = response.data.data.length;
  const created = await emp_funcs.createEntity_Emp({
      lawyer_details: {
          pending_forms: [],
          reviewed_forms: [],
          to_be_filled_for: [],
          filled_forms: [],
          speciality: "mo7amy 5ol3",
          education: "Bsc."
      },
      admin_details: {
          registered_investors: [],
          investors_to_assign: []
              },
      reviewer_details: {
          pending_forms: [],
          reviewed_forms: [],
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
},10000);
test("Testing Create Actually Creates in DB with correct values", async () => {
  expect.assertions(3);
  const created = await emp_funcs.createEntity_Emp({
      lawyer_details: {
          pending_forms: [],
          reviewed_forms: [],
          to_be_filled_for: [],
          filled_forms: [],
          speciality: "mo7amy 5ol3",
          education: "Bsc."
      },
      admin_details: {
          registered_investors: [],
          investors_to_assign: []
      },
      reviewer_details: {
          pending_forms: [],
          reviewed_forms: [],
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
},10000);
test("Testing Create and then updating", async () => {
  expect.assertions(2);
  const created = await emp_funcs.createEntity_Emp({
      lawyer_details: {
          pending_forms: [],
          reviewed_forms: [],
          to_be_filled_for: [],
          filled_forms: [],
          speciality: "mo7amy 5ol3",
          education: "Bsc."
      },
      admin_details: {
          registered_investors: [],
          investors_to_assign: []
      },
      reviewer_details: {
          pending_forms: [],
          reviewed_forms: [],
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
  const response1 = await emp_funcs.updateEntity_Emp(
    {
          lawyer_details: {
              pending_forms: [],
              reviewed_forms: [],
              to_be_filled_for: [],
              filled_forms: [],
              speciality: "mo7amy 5ol3",
              education: "Bsc."
          },
          admin_details: {
              registered_investors: [],
              investors_to_assign: []
          },
          reviewer_details: {
              pending_forms: [],
              reviewed_forms: [],
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
});
test("Testing Creating then Deleting an Entity_Employee", async () => {
  expect.assertions(1);

  const created = await emp_funcs.createEntity_Emp({
      lawyer_details: {
          pending_forms: [],
          reviewed_forms: [],
          to_be_filled_for: [],
          filled_forms: [],
          speciality: "mo7amy 5ol3",
          education: "Bsc."
      },
      admin_details: {
          registered_investors: [],
          investors_to_assign: []
      },
      reviewer_details: {
          pending_forms: [],
          reviewed_forms: [],
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
},10000);
test("Testing Creating with wrong data types", async () => {
  expect.assertions(1);
  try {
    const created = await emp_funcs.createEntity_Emp({
        lawyer_details: {
            pending_forms: [],
            reviewed_forms: [],
            to_be_filled_for: [],
            filled_forms: [],
            speciality: "mo7amy 5ol3",
            education: "Bsc."
        },
        admin_details: {
            registered_investors: [],
            investors_to_assign: []
        },
        reviewer_details: {
            pending_forms: [],
            reviewed_forms: [],
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
},10000);

test("Testing Getting by id with a correct id", async () =>{
  try{
    expect.assertions(1);
    const allEmps  =  await emp_funcs.getEntity_Emp();
    const response = await emp_funcs.getEntity_EmpbyID(allEmps.data.data[0]._id);
    expect(response.data.data.length).toEqual(1);


  }
  catch(error){
    // expect(error.message).toEqual("Employee does not exist");
  }
},30000);

test("Testing Getting by id with an incorrect id", async () => {
 try{
  expect.assertions(1);
  const response = await emp_funcs.getEntity_EmpbyID("5c9e425d2fee3419ac5abd70");
  expect(response.data.data.length).toEqual(0);
 }
 catch(error){
  expect(error.message).toEqual("Request failed with status code 404");
 }
},30000);

test("Testing Delete with correct id", async () => {
  try{
    expect.assertions(1);
    const allEmps = await emp_funcs.getEntity_Emp();
    const oldLength = allEmps.data.data.length;
    const response =  await emp_funcs.deleteEntity_Emp(allEmps.data.data[0]._id);
    const after = await emp_funcs.getEntity_Emp();
    const newLength = after.data.data.length;
    expect(newLength).toEqual(oldLength-1);
  }
  catch(error){
    //
  }
},30000);

test("testing delete with incorrect id", async () => {
  try{
    expect.assertions(0);
    const response = await emp_funcs.deleteEntity_Emp("5c9e425d2fee3419ac5abd71");
  }
  catch(error){
    expect(error.message).toEqual("Request failed with status code 404")
  }
},30000)
//this one will be tricky as it is dependant on other user stories yet to be done, so I will postpone till
//others are done
test('Testing Investor choosing to have laweyr fill form, then admin assigns a lawyer', async () => {
    expect.assertions(3)
    const investor = {
        firstName: "Nadeen",
        middleName: "Adel",
        lastName: "Riad",
        gender: "female",
        nationality: "Egyptian",
        investorType: "individual",
        typeOfID: "id",
        IDNumber: "1234567890",
        dateOfBirth: "1997-09-30T00:00:00.000Z",
        address: "New Cairo",
        phoneNumber: "01117208627",
        faxNumber: "1234A1234",
        creditCardNumber: "4024007158885060",
        email: "nadeen@gmail.com",
        capital: 1000000,
        capitalCurrency: "EGP"
    }
    const lawyer = {lawyer_details: {
        pending_forms: [],
        reviewed_forms: [],
        to_be_filled_for: [],
        filled_forms: [],
        speciality: "mo7amy 5ol3",
        education: "Bsc."
        },
        admin_details: {
            registered_investors: [],
            investors_to_assign: []
        },
        reviewer_details: {
            pending_forms: [],
            reviewed_forms: [],
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
}
    const admin = {
        lawyer_details: {
            pending_forms: [],
            reviewed_forms: [],
            to_be_filled_for: [],
            filled_forms: [],
            speciality: "mo7amy 5ol3",
            education: "Bsc."
        },
        admin_details: {
            registered_investors: [],
            investors_to_assign: []
        },
        reviewer_details: {
            pending_forms: [],
            reviewed_forms: [],
        },
        username: "Alsouidan",
        password: "mshwed h2oklmdvol",
        email: "Hwedfdghi@gmail.com",
        dateOfBirth: "1998-02-02",
        firstName: "Ali",
        middleName: "Amr",
        lastName: "Souidan",
        emp_type: "Admin",
        joined_on: "2018-02-15T00:00:00.000Z"
    }

    const inv = await investor_funcs.createNewInvestor({
        firstName: "somefirstname",
        middleName: "somemiddlename",
        lastName: "somelastname",
        gender: "female",
        nationality: "Egyptian",
        investorType: "individual",
        typeOfID: "id",
        IDNumber: "1234567890",
        dateOfBirth: "1999-09-19",
        address: "my address",
        phoneNumber: "01234567890",
        faxNumber: "1234A1234",
        creditCardNumber: "4024007158885060",
        email: "some_email@gmail.com",
        capital: "100000",
        capitalCurrency: "Euro"
    });
    const adm = await emp_funcs.createEntity_Emp({
      lawyer_details: {
        pending_forms: [],
        reviewed_forms: [],
        to_be_filled_for: [],
        filled_forms: [],
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
      username: "Alsouidan",
      password: "mshwed h2oklmdvol",
      email: "Hwedfdghi@gmail.com",
      dateOfBirth: "1998-02-02",
      firstName: "Ali",
      middleName: "Amr",
      lastName: "Souidan",
      emp_type: "Admin",
      joined_on: "2018-02-15T00:00:00.000Z"
    });
    const law = await emp_funcs.createEntity_Emp({
        lawyer_details: {
            pending_forms: [],
            reviewed_forms: [],
            to_be_filled_for: [],
            filled_forms: [],
            speciality: "mo7amy 5ol3",
            education: "Bsc."
        },
        admin_details: {
            registered_investors: [],
            investors_to_assign: []
        },
        reviewer_details: {
            pending_forms: [],
            reviewed_forms: [],
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
     const sent_to= await form_funcs.sendToAdmin(inv.data.data._id,adm.data.data._id);
    const new_adm=await emp_funcs.getEntity_EmpbyID(adm.data.data._id)
    expect(new_adm.data.data.admin_details.investors_to_assign).toContain(inv.data.data._id);
    const assigned = await emp_funcs.assignLawyer(
      law.data.data._id,
      inv.data.data._id,
      adm.data.data._id
    );
    const new_adm1 = await emp_funcs.getEntity_EmpbyID(adm.data.data._id)
    const new_law = await emp_funcs.getEntity_EmpbyID(law.data.data._id)
    expect(new_adm1.data.data.admin_details.investors_to_assign).not.toContain(inv.data.data._id)
    expect(new_law.data.data.lawyer_details.to_be_filled_for).toContain(inv.data.data._id)

    
},10000
);
