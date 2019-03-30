const investor_funcs = require("./funcs/investor_funcs");

//tests get and create
test("Testing 'get all investors' and 'create investor' adds the new investor to investors array/list",
    async() => {
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
	        capital: "100000",
	        capitalCurrency: "Euro"
        });
        const newinvestors = await investor_funcs.getAllInvestors();
        const newLength = newinvestors.data.data.length;
        expect(newLength).toEqual(oldLength+1);
    }
);

//tests create and delete
test("Testing 'create investor' and 'delete investor' removes the new investor from investors array/list",
    async() => {
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
	        capital: "100000",
	        capitalCurrency: "Euro"
        });
        const deletedInvestor = await investor_funcs.deleteExistingInvestor(newInvestor.data.data._id);
        const newinvestors = await investor_funcs.getAllInvestors();
        const newLength = newinvestors.data.data.length;
        expect(newLength).toEqual(oldLength);
    }
);

//tests create and getByID
test("Testing 'create investor' and 'get by id' gets the new investor from investors array/list",
    async() => {
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
	        email: "some_email@gmail.com",
	        capital: "100000",
	        capitalCurrency: "Euro"
        });
        const getInvestor = await investor_funcs.getInvestorByID(newInvestor.data.data._id);
        expect(getInvestor.data.data._id).toEqual(newInvestor.data.data._id);
    }
);

//response.data.data[0].title

//deep test for create
test("Testing 'create investor' adds all fields given with correct values",
    async() => {
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
	        email: "some_email@gmail.com",
	        capital: "100000",
	        capitalCurrency: "Euro"
        });
        const getNewInvestor = await investor_funcs.getInvestorByID(newInvestor.data.data._id);
        expect(getNewInvestor.data.data.firstName).toEqual(newInvestor.data.data.firstName);
        expect(getNewInvestor.data.data.middleName).toEqual(newInvestor.data.data.middleName);
        expect(getNewInvestor.data.data.lastName).toEqual(newInvestor.data.data.lastName);
        expect(getNewInvestor.data.data.gender).toEqual(newInvestor.data.data.gender);
        expect(getNewInvestor.data.data.nationality).toEqual(newInvestor.data.data.nationality);
        expect(getNewInvestor.data.data.investorType).toEqual(newInvestor.data.data.investorType);
        expect(getNewInvestor.data.data.typeOfID).toEqual(newInvestor.data.data.typeOfID);
        expect(getNewInvestor.data.data.IDNumber).toEqual(newInvestor.data.data.IDNumber);
        expect(getNewInvestor.data.data.address).toEqual(newInvestor.data.data.address);
        expect(getNewInvestor.data.data.phoneNumber).toEqual(newInvestor.data.data.phoneNumber);
        expect(getNewInvestor.data.data.faxNumber).toEqual(newInvestor.data.data.faxNumber);
        expect(getNewInvestor.data.data.creditCardNumber).toEqual(newInvestor.data.data.creditCardNumber);
        expect(getNewInvestor.data.data.email).toEqual(newInvestor.data.data.email);
        expect(getNewInvestor.data.data.capital).toEqual(newInvestor.data.data.capital);
        expect(getNewInvestor.data.data.capitalCurrency).toEqual(newInvestor.data.data.capitalCurrency);
    },
    100000
);

//tests create and update
test("Testing 'create investor' and 'update investor' inserts new investor and updates their data",
    async() => {
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
	        email: "some_email@gmail.com",
	        capital: "100000",
	        capitalCurrency: "Euro"
        });
        const updatedInvestor = await investor_funcs.updateExistingInvestor({
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
	        email: "some_email@gmail.com",
	        capital: "100000",
	        capitalCurrency: "Euro"
        },newInvestor.data.data._id);
        const getInvestor = await investor_funcs.getInvestorByID(newInvestor.data.data._id);
        expect(getInvestor.data.data.firstName).toEqual(updatedInvestor.data.data.firstName);
    }
);

/*

//tests create with wrong datatype
test("Testing 'create investor' with wrong data types", async () => {
    expect.assertions(1);
    try {
        const newInvestor = await investor_funcs.createNewInvestor({
            firstName: "somefirstname",
	        middleName: "somemiddlename",
	        lastName: "somelastname",
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
	        email: "some_email@gmail.com",
	        capital: "100000",
	        capitalCurrency: "Euro"
        });
    } catch (error) {
      expect(error.message).toEqual("Invalid field datatype(s) enetered");
    }
  });
  
  */