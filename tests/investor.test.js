const investor_funcs = require("../funcs/investor_funcs");
const form_funcs = require("../funcs/form_funcs");
const mongoose = require("mongoose");


//tests get and create
test("Testing 'get all investors' and 'create investor' adds the new investor to investors array/list", async () => {
  expect.assertions(1);
  const oldinvestors = await investor_funcs.getAllInvestors();
  const oldLength = oldinvestors.data.data.length;
  const newInvestor = await investor_funcs.createNewInvestor({
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
    password: "somepass"
  });
  const newinvestors = await investor_funcs.getAllInvestors();
  const newLength = newinvestors.data.data.length;
  expect(newLength).toEqual(oldLength + 1);
}, 100000);

//tests create and delete
test("Testing 'create investor' and 'delete investor' removes the new investor from investors array/list", async () => {
  expect.assertions(1);
  const oldinvestors = await investor_funcs.getAllInvestors();
  const oldLength = oldinvestors.data.data.length;
  const newInvestor = await investor_funcs.createNewInvestor({
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
    email: "some_email2@gmail.com",
    password: "somepass"
  });
  const deletedInvestor = await investor_funcs.deleteExistingInvestor(
    newInvestor.data.data._id
  );
  const newinvestors = await investor_funcs.getAllInvestors();
  const newLength = newinvestors.data.data.length;
  expect(newLength).toEqual(oldLength);
}, 100000);

//tests create and getByID
test("Testing 'create investor' and 'get by id' gets the new investor from investors array/list", async () => {
  expect.assertions(1);
  const newInvestor = await investor_funcs.createNewInvestor({
    firstName: "somefirstname3",
    middleName: "somemiddlename3",
    lastName: "somelastname3",
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
    email: "some_email3@gmail.com",
    password: "somepass"
  });
  const getInvestor = await investor_funcs.getInvestorByID(
    newInvestor.data.data._id
  );
  expect(getInvestor.data.data._id).toEqual(newInvestor.data.data._id);
}, 100000);

//response.data.data[0].title

//deep test for create
test("Testing 'create investor' adds all fields given with correct values", async () => {
  expect.assertions(15);
  const newInvestor = await investor_funcs.createNewInvestor({
    firstName: "somefirstname2",
    middleName: "somemiddlename2",
    lastName: "somelastname2",
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
    email: "some_email4@gmail.com",
    password: "somepass"
  });
  const getNewInvestor = await investor_funcs.getInvestorByID(
    newInvestor.data.data._id
  );
  expect(getNewInvestor.data.data.firstName).toEqual(
    newInvestor.data.data.firstName
  );
  expect(getNewInvestor.data.data.middleName).toEqual(
    newInvestor.data.data.middleName
  );
  expect(getNewInvestor.data.data.lastName).toEqual(
    newInvestor.data.data.lastName
  );
  expect(getNewInvestor.data.data.gender).toEqual(newInvestor.data.data.gender);
  expect(getNewInvestor.data.data.nationality).toEqual(
    newInvestor.data.data.nationality
  );
  expect(getNewInvestor.data.data.investorType).toEqual(
    newInvestor.data.data.investorType
  );
  expect(getNewInvestor.data.data.typeOfID).toEqual(
    newInvestor.data.data.typeOfID
  );
  expect(getNewInvestor.data.data.IDNumber).toEqual(
    newInvestor.data.data.IDNumber
  );
  expect(getNewInvestor.data.data.address).toEqual(
    newInvestor.data.data.address
  );
  expect(getNewInvestor.data.data.phoneNumber).toEqual(
    newInvestor.data.data.phoneNumber
  );
  expect(getNewInvestor.data.data.faxNumber).toEqual(
    newInvestor.data.data.faxNumber
  );
  expect(getNewInvestor.data.data.creditCardNumber).toEqual(
    newInvestor.data.data.creditCardNumber
  );
  expect(getNewInvestor.data.data.email).toEqual(newInvestor.data.data.email);
  expect(getNewInvestor.data.data.password).toEqual(newInvestor.data.data.password);
}, 100000);

//tests create and update
test("Testing 'create investor' and 'update investor' inserts new investor and updates their data", async () => {
  expect.assertions(1);
  const newInvestor = await investor_funcs.createNewInvestor({
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
    email: "some_email5@gmail.com",
    password: "somepass"
  });
  const updatedInvestor = await investor_funcs.updateExistingInvestor(
    {
      firstName: "updatedfirstname",
      middleName: "updatedmiddlename",
      lastName: "updatedlastname",
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
      email: "some_email6@gmail.com",
      password: "somepass"
    },
    newInvestor.data.data._id
  );
  const getInvestor = await investor_funcs.getInvestorByID(
    newInvestor.data.data._id
  );
  expect(getInvestor.data.data.firstName).toEqual(
    updatedInvestor.data.data.firstName
  );
}, 100000);

//tests create with wrong datatype
test("Testing 'create investor' with wrong data types", async () => {
  expect.assertions(1);
  const newInvestor = await investor_funcs
    .createNewInvestor({
      firstName: "somefirstname5",
      middleName: "somemiddlename5",
      lastName: "somelastname5",
      gender: "female",
      nationality: "Egyptian",
      investorType: "individual",
      typeOfID: "id",
      IDNumber: "1234567890",
      dateOfBirth: "error_please",
      address: "my address",
      phoneNumber: "01234567890",
      faxNumber: "1234A1234",
      creditCardNumber: "4024007158885060",
      email: "some_email7@gmail.com",
      password: "somepass"
    })
    .catch(error =>
      expect(error.response.data.error).toEqual(
        "Invalid datatype entered for one or more of the fields"
      )
    );
});

//tests update with wrong datatype
test("Testing 'update investor' with wrong data types", async () => {
  expect.assertions(1);
  const newInvestor = await investor_funcs.createNewInvestor({
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
    email: "some_email8@gmail.com",
    password: "somepass"
  });
  const updatedInvestor = await investor_funcs
    .updateExistingInvestor(
      {
        firstName: "updatedfirstname1",
        middleName: "updatedmiddlename1",
        lastName: "updatedlastname1",
        gender: "female",
        nationality: "Egyptian",
        investorType: "wrong",
        typeOfID: "id",
        IDNumber: "1234567890",
        dateOfBirth: "wrong againn",
        address: "my address",
        phoneNumber: "01234567890",
        faxNumber: "1234A1234",
        creditCardNumber: "40240060",
        email: "some_email9@gmail.com",
        password: "somepass"
      },
      newInvestor.data.data._id
    )
    .catch(error =>
      expect(error.response.data.error).toEqual(
        "Invalid datatype entered for one or more of the fields"
      )
    );
});

//tests update with non existant investor id
test("Testing 'update investor' with wrong investor id", async () => {
  expect.assertions(1);
  const newInvestor = await investor_funcs.createNewInvestor({
    firstName: "somefirstname4",
    middleName: "somemiddlename4",
    lastName: "somelastname4",
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
    email: "some_email10@gmail.com",
    password: "somepass"
  });
  const deletedInvestor = await investor_funcs.deleteExistingInvestor(
    newInvestor.data.data._id
  );
  const updatedInvestor = await investor_funcs
    .updateExistingInvestor(
      {
        firstName: "updatedfirstname2",
        middleName: "updatedmiddlename2",
        lastName: "updatedlastname2",
        gender: "female",
        nationality: "Egyptian",
        investorType: "individual",
        typeOfID: "id",
        IDNumber: "1234567890",
        dateOfBirth: "2013-09-13",
        address: "my address",
        phoneNumber: "01234567890",
        faxNumber: "1234A1234",
        creditCardNumber: "4024007158885060",
        email: "some_email11@gmail.com",
        password: "somepass"
      },
      newInvestor.data.data._id
    )
    .catch(error =>
      expect(error.response.data.error).toEqual("Investor does not exist")
    );
});

//tests getByID with non existant id
test("Testing 'get by id' using wrong/non existant investor id", async () => {
  expect.assertions(1);
  const newInvestor = await investor_funcs.createNewInvestor({
    firstName: "somefirstname3",
    middleName: "somemiddlename3",
    lastName: "somelastname3",
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
    email: "some_email12@gmail.com",
    password: "somepass"
  });
  const deletedInvestor = await investor_funcs.deleteExistingInvestor(
    newInvestor.data.data._id
  );
  const getInvestor = await investor_funcs
    .getInvestorByID(newInvestor.data.data._id)
    .catch(error =>
      expect(error.response.data.error).toEqual("Investor does not exist")
    );
}, 100000);

//tests delete investor with non existant id
test("Testing 'delete investor' using wrong/non existant investor id", async () => {
  expect.assertions(1);
  const newInvestor = await investor_funcs.createNewInvestor({
    firstName: "somefirstname7",
    middleName: "somemiddlename7",
    lastName: "somelastname7",
    gender: "female",
    nationality: "Egyptian",
    investorType: "individual",
    typeOfID: "id",
    IDNumber: "1234567890",
    dateOfBirth: "1999-09-20",
    address: "my address",
    phoneNumber: "01234567890",
    faxNumber: "1234A1234",
    creditCardNumber: "4024007158885060",
    email: "some_email13@gmail.com",
    password: "somepass"
  });
  const deletedInvestor = await investor_funcs.deleteExistingInvestor(
    newInvestor.data.data._id
  );
  const deletedInvestor2 = await investor_funcs
    .deleteExistingInvestor(newInvestor.data.data._id)
    .catch(error =>
      expect(error.response.data.error).toEqual("Investor does not exist")
    );
}, 100000);

//tests create and update investor within form
test("Testing 'create investor' and 'update investor' inserts new investor and updates their data in investor and forms", async () => {
  expect.assertions(2);
  const newInvestor = await investor_funcs.createNewInvestor({
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
    email: "some_email13@gmail.com",
    password: "somepass"
  });
  const invid = newInvestor.data.data._id;
  const newForm = await form_funcs.createForm({
    law: "12345",
    legalForm: "blabla",
    formType: "SSC",
    arabicName: "sd",
    englishName: "testing",
    address: "helloo",
    phone: "01111111111",
    fax: "2222",
    investor: {
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
      email: "some_email13@gmail.com",
      password: "somepass",
      investorFormID: invid
    },
    comments: [],
    createdOn: "2019-03-29",
    capitalCurr: "EGP",
    capitalVal: 1000000,
    boardOfDirectors: [
      {
        address: "addrf dfdfdess",
        birthdate: "1970-03-25T00:00:00.000Z",
        gender: "male",
        idNum: "1234567876",
        name: "Mohamed",
        nationality: "Egypt",
        position: "manager",
        typeID: "passport",
        typeInves: "individual"
      }
    ]
  });
  const formid = newForm.data.data._id;
  const updatedInvestor = await investor_funcs.updateExistingInvestor(
    {
      firstName: "updatedfirstname2",
      middleName: "updatedmiddlename2",
      lastName: "updatedlastname2",
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
      email: "some_email13@gmail.com",
      password: "somepass",
    },
    newInvestor.data.data._id
  );

  const updatedForm = await form_funcs.getFormByID(formid);
  const getInvestor = await investor_funcs.getInvestorByID(
    newInvestor.data.data._id
  );
  expect(getInvestor.data.data.firstName).toEqual(
    updatedInvestor.data.data.firstName
  );
  expect(updatedForm.data.data.investor.firstName).toEqual(
    updatedInvestor.data.data.firstName
  );
}, 100000);

afterAll(async () => {
	const msg = await investor_funcs.deleteAllInvestor()
});


