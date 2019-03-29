const emp_funcs = require("./funcs/entity_emp_funcs");

test('Testing Create Actually Creates in DB', async () => {
    expect.assertions(1)
    const response = await emp_funcs.getEntity_Emp()
    const oldLength = response.data.data.length
    const created = await emp_funcs.createEntity_Emp({
        "lawyer_details": {
            "pending_forms": [],
            "reviewed_forms": [],
            "to_be_filled_for": [],
            "filled_forms": [],
            "speciality": "mo7amy 5ol3",
            "education": "Bsc."
        },
        "username": "Alsouidan",
        "password": "mshwed h2oklmdvol",
        "email": "Hwedfdghi@gmail.com",
        "dateOfBirth": "1998-02-14T00:00:00.000Z",
        "firstName": "Ali",
        "middleName": "Amr",
        "lastName": "Souidan",
        "emp_type": "Lawyer",
        "joined_on": "2018-02-15T00:00:00.000Z"
    });
    const response1 = await emp_funcs.getEntity_Emp()
    const newLength = response1.data.data.length
    expect(newLength).toEqual(oldLength+1);

});
test('Testing Create Actually Creates in DB with correct values', async () => {
    expect.assertions(3)
    const created = await emp_funcs.createEntity_Emp({
        "lawyer_details": {
            "pending_forms": [],
            "reviewed_forms": [],
            "to_be_filled_for": [],
            "filled_forms": [],
            "speciality": "mo7amy 5ol3",
            "education": "Bsc."
        },
        "username": "Alsouidan",
        "password": "mshwed h2oklmdvol",
        "email": "Hwedfdghi@gmail.com",
        "dateOfBirth": "1998-02-14T00:00:00.000Z",
        "firstName": "Ali",
        "middleName": "Amr",
        "lastName": "Souidan",
        "emp_type": "Lawyer",
        "joined_on": "2018-02-15T00:00:00.000Z"
    });
    const response1 = await emp_funcs.getEntity_EmpbyID(created.data.data._id)
    const username=response1.data.data.username
    expect(username).toEqual(created.data.data.username);
    expect(response1.data.data.password).toEqual(
      created.data.data.password
    );
    expect(response1.data.data.email).toEqual(
        created.data.data.email
    );


});
test('Testing Create and then updating', async () => {
    expect.assertions(2)
    const created = await emp_funcs.createEntity_Emp({
        "lawyer_details": {
            "pending_forms": [],
            "reviewed_forms": [],
            "to_be_filled_for": [],
            "filled_forms": [],
            "speciality": "mo7amy 5ol3",
            "education": "Bsc."
        },
        "username": "Alsouidan",
        "password": "mshwed h2oklmdvol",
        "email": "Hwedfdghi@gmail.com",
        "dateOfBirth": "1998-02-14T00:00:00.000Z",
        "firstName": "Ali",
        "middleName": "Amr",
        "lastName": "Souidan",
        "emp_type": "Lawyer",
        "joined_on": "2018-02-15T00:00:00.000Z"
    });
    const response1 = await emp_funcs.updateEntity_Emp(
      {
        "lawyer_details": {
          "pending_forms": [],
          "reviewed_forms": [],
          "to_be_filled_for": [],
          "filled_forms": [],
          "speciality": "mo7amy 5ol3",
          "education": "Bsc."
        },
        "username": "Alsouidan",
        "password": "mshwed h2oklmdvol",
        "email": "Hwedfdghi@gmail.com",
        "dateOfBirth": "1998-02-14T00:00:00.000Z",
        "firstName": "Ahmed",
        "middleName": "Amr",
        "lastName": "Souidan",
        "emp_type": "Lawyer",
        "joined_on": "2018-02-15T00:00:00.000Z"
      },
      created.data.data._id
    );
    
    expect(response1.data.data.firstName).toEqual("Ahmed");
    expect(response1.data.data.username).toEqual(
      created.data.data.username
    );

    

});
test('Testing Creating then Deleting an Entity_Employee', async () => {
    expect.assertions(1)
    
    const created = await emp_funcs.createEntity_Emp({
        "lawyer_details": {
            "pending_forms": [],
            "reviewed_forms": [],
            "to_be_filled_for": [],
            "filled_forms": [],
            "speciality": "mo7amy 5ol3",
            "education": "Bsc."
        },
        "username": "Alsouidan",
        "password": "mshwed h2oklmdvol",
        "email": "Hwedfdghi@gmail.com",
        "dateOfBirth": "1998-02-14T00:00:00.000Z",
        "firstName": "Ali",
        "middleName": "Amr",
        "lastName": "Souidan",
        "emp_type": "Lawyer",
        "joined_on": "2018-02-15T00:00:00.000Z"
    });
    const response = await emp_funcs.getEntity_Emp()
    const oldLength = response.data.data.length
    const response1 = await emp_funcs.deleteEntity_Emp(created.data.data._id)
    const response2 = await emp_funcs.getEntity_Emp()
    const newLength = response2.data.data.length
    expect(newLength).toEqual(oldLength-1)
});
test('Testing Creating with wrong data types', async () => {
    expect.assertions(1)
    try {
        const created = await emp_funcs.createEntity_Emp({
            "lawyer_details": {
                "pending_forms": [],
                "reviewed_forms": [],
                "to_be_filled_for": [],
                "filled_forms": [],
                "speciality": "mo7amy 5ol3",
                "education": "Bsc."
            },
            "username": "Alsouidan",
            "password": "mshwed h2oklmdvol",
            "email": "Hwedfdghi@gmail.com",
            "dateOfBirth": "WRONG DATA TYPE",
            "firstName": "Ali",
            "middleName": "Amr",
            "lastName": "Souidan",
            "emp_type": "Lawyer",
            "joined_on": "2018-02-15T00:00:00.000Z"
        });    } catch (error) {
        expect(error.message).toEqual('Request failed with status code 400'); 
        //400 bad request that we send when joi validation fails
    }
 
});
//this one will be tricky as it is dependant on other user stories yet to be done, so I will postpone till
//others are done
// test('Testing Creating Admin that assigns lawyer to fill form, then lawyer fills form for investor', async () => {
//     expect.assertions(1)

//     }

// });

