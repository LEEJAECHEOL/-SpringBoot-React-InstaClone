const { createAsyncThunk } = require("@reduxjs/toolkit");

exports.logIn = createAsyncThunk("user/logIn", async (data, thunkAPI) => {
  return await delay(500, {
    userId: 1,
    nickname: "zerocho",
  });
});
