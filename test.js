const emp_funcs = require('./funcs/entity_emp_funcs');
const comment_funcs = require('./funcs/comment_funcs');
const form_funcs = require('./funcs/form_funcs');

test('', async () => {
    expect.assertions(1)
    const response = await emp_funcs.getEntity_Emp()
    expect(response.data.data[0].username).toEqual("ALIouidan");
});



