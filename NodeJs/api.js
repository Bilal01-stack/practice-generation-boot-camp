const express = require("express");
const { mongoose } = require("./config/config");
const router = express.Router();

const Data = mongoose.model('Data'); // Replace 'Data' with your actual model name

router.get('/all', async (req, res) => {
   try {
      const data = await Data.find();
      console.log(data);
      res.send(data);
   } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
   }
});

module.exports = router;
