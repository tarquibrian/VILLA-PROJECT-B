const router = require("express").Router();
const system = require("../models/System");
// const System = require("../models/System");

// siteVisitUp = function () {
//   system
//     .findByIdAndUpdate(
//       "62b3fa44aa25e13918646a51",
//       { $inc: { counter: 1 } },
//       { new: true }
//     )
//     .then((data) => {
//       console.log(data.counter);
//     })
//     .catch((err) => {
//       err;
//     });
// };

//POST COUNTER +1
router.post("/", async (req, res) => {
  // siteVisitUp();
  try {
    await system.findByIdAndUpdate(
      "62b3fa44aa25e13918646a51",
      { $inc: { counter: 1 } },
      { new: true }
    );
    // res.send(200).json(counter)
  } catch (err) {
    console.log(err);
  }
  res.sendStatus(200);
});

//GET VISIT
router.get("/", async (req, res) => {
  try {
    let counter = await system.findById("62b3fa44aa25e13918646a51");
    res.status(200).json(counter);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
