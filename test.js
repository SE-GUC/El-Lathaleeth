const emp_funcs = require('./funcs/entity_emp_funcs');

test('I am testing', async () => {
    expect.assertions(1)
    const response = await emp_funcs.getEntity_Emp()
    expect(response.data.data[0].username).toEqual("ALIouidan");
});

test("Working Test", async () => {
  const response = await emp_funcs.add(1,2);
  expect(response).toEqual(3);
});


