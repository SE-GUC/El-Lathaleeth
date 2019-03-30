const external_entity_funcs = require('./funcs/external_entity_fn');

test('First external entity should be externalentity111', async () => {
  expect.assertions(1)
  const response =  await external_entity_funcs.getExternal_entity()
  expect(response.data.data[0].name).toEqual("externalentity111")
})

test("Testing Create in DB", async () => {
    expect.assertions(1);
    const response = await external_entity_funcs.getExternal_entity();
    const oldLength = response.data.data.length;
    const create = await external_entity_funcs.createExternal_entity(
        {
            name: "externalentity4",
            address: "address4",
            telephone: "200004",
            fax: "200040",
            email: "external_entity4@gmail.com"
        }
    );
    const response1 = await external_entity_funcs.getExternal_entity();
    const newLength = response1.data.data.length;
    expect(newLength).toEqual(oldLength + 1);
  });

  test("Testing Create in DB with correct values and get by id", async () => {
    expect.assertions(6);
    const create = await external_entity_funcs.createExternal_entity(
        {
            name: "externalentity5",
            address: "address5",
            telephone: "200005",
            fax: "200050",
            email: "external_entity5@gmail.com"
        }
    );
    const response = await external_entity_funcs.getExternal_entityByID(create.data.data._id)
    expect(response.data.data._id).toEqual(create.data.data._id)
    expect(response.data.data.name).toEqual(create.data.data.name)
    expect(response.data.data.address).toEqual(create.data.data.address)
    expect(response.data.data.telephone).toEqual(create.data.data.telephone)
    expect(response.data.data.fax).toEqual(create.data.data.fax)
    expect(response.data.data.email).toEqual(create.data.data.email)
  });

  test("Testing updating", async () => {
    expect.assertions(1)
    const created = await external_entity_funcs.createExternal_entity(
      {
        name: "externalentity4",
        address: "address4",
        telephone: "200004",
        fax: "200040",
        email: "external_entity4@gmail.com"
    }
    )
    const response1 = await external_entity_funcs.updateExternal_entity(
      {
        name: "externalentity44",
        address: "address4",
        telephone: "200004",
        fax: "200040",
        email: "external_entity4@gmail.com"
      },
      created.data.data._id
    );
    const response = await external_entity_funcs.getExternal_entityByID(created.data.data._id);
    expect(response.data.data.name).toEqual(response1.data.data.name);
  });

  test("Testing Deleting", async () => {
    expect.assertions(1);
    const created = await external_entity_funcs.createExternal_entity(
        {
        name: "externalentity21",
        address: "address22",
        telephone: "2000022",
        fax: "221922",
        email: "external_entity22@gmail.com"
        }
    )
    const response = await external_entity_funcs.getExternal_entity();
    const oldLength = response.data.data.length;
    const response1 = await external_entity_funcs.deleteExternal_entity(created.data.data._id);
    const response2 = await external_entity_funcs.getExternal_entity();
    const newLength = response2.data.data.length;
    expect(newLength).toEqual(oldLength - 1);
  });

  test("Testing Creating with wrong data types", async () => {
    expect.assertions(1);
    try {
        const create = await external_entity_funcs.createExternal_entity(
        {
            "name": "externalentity5",
            "address": "address5",
            "telephone": "200005",
            "fax": "hello",
            "email": "external_entity5@gmail.com"
      });
    } catch (error) {
      expect(error.message).toEqual("Request failed with status code 400");
    }
  });