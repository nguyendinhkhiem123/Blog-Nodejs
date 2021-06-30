const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_edu_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    });

    console.log("kết nối thành công")
  } catch (err) {
    console.log("kết nối thất bại");
  }
}


module.exports = { connect };