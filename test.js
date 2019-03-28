const emp_funcs = require('./funcs/entity_emp_funcs');

test('', async () => {
    expect.assertions(1)
    const response = await emp_funcs.getEntity_Emp()
    expect(response.data.data[0].username).toEqual("ALIouidan");
});



