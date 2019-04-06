const comm_funcs = require("../funcs/comment_funcs");

test("Testing Create Actually Creates Comment", async () => {
  expect.assertions(1);
  const response = await comm_funcs.getComments();
  const oldLength = response.data.data.length;
  const created = await comm_funcs.createComment({
    author_type: "Reviewer",
    author: "5c9fcd3e1d8fa137a812d237",
    text: "google",
    postedOn: "2015-10-02"
  });
  const response1 = await comm_funcs.getComments();
  const newLength = response1.data.data.length;
  expect(newLength).toEqual(oldLength + 1);
}, 30000);

test("Testing Getting by id with an incorrect id", async () => {
  try {
    expect.assertions(1);
    const response = await comm_funcs.getComment(
      "5c9e425d2fee3419ac5abd70"
    );
    expect(response.data.data.length).toEqual(0);
  } catch (error) {
    expect(error.message).toEqual("Request failed with status code 404");
  }
}, 30000);
test("Testing updating a comment", async () => {
  expect.assertions(1);
  const created = await comm_funcs.createComment({
    author_type: "Reviewer",
    author: "5c9fcd3e1d8fa137a812d237",
    text: "bad comment",
    postedOn: "2010-02-02"
  });
  
  const update_comm = await comm_funcs.updateComment(created.data.data._id, {
    author_type: "Reviewer",
    author: "5c9fcd3e1d8fa137a812d237",
    text: "guut comment",
    postedOn: "2010-02-02"
  });
  expect(update_comm.data.data.text).toEqual("guut comment");
}, 30000);
test("Testing updating a comment with wrong Id", async () => {
  expect.assertions(1);
  try {
    const update_comm = await comm_funcs.updateComment(
      "5c9fcd3e1d8fa137a812d237",
      {
        author_type: "Reviewer",
        author: "5c9fcd3e1d8fa137a812d237",
        text: "guut comment",
        postedOn: "2010-02-02"
      }
    );
  } catch (error) {
    expect(error.message).toEqual("Request failed with status code 404");
  }
}, 30000);
test("Testing updating a comment with wrong Id", async () => {
  expect.assertions(1);
  try {
    const update_comm = await comm_funcs.updateComment(
      "5c9fcd3e1d8fa137a812d237",
      {
        author_type: "Reviewer",
        author: "5c9fcd3e1d8fa137a812d237",
        text: "guut comment",
        postedOn: "2010-02-02"
      }
    );
  } catch (error) {
    expect(error.message).toEqual("Request failed with status code 404");
  }
}, 30000);
test("Testing deleting a comment", async () => {
  expect.assertions(1);
  const created = await comm_funcs.createComment({
    author_type: "Reviewer",
    author: "5c9e3fc1cb28602a9cebbe13",
    text: "google LUL",
    postedOn: "2010-02-02"
  });
  const response = await comm_funcs.getComments();
  const commlength = response.data.data.length;
  const delete_comm = await comm_funcs.deleteComment(created.data.data._id);
  const response2 = await comm_funcs.getComments();
  const commlength2 = response2.data.data.length;
  expect(commlength2).toEqual(commlength - 1);
}, 30000);

afterAll(async () => {
  const msg = await comm_funcs.deleteAllComment()
});
