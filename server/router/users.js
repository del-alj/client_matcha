const express = require("express");
const router = express.Router();

app.get("/new", (req, res) => {
  res.send("User New Form");
});

app.get("/", (req, res) => {
  res.send("User List");
});

app.post("/", (req, res) => {
  res.send("Create User");
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get User With ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update User With ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`);
  });

router.param("id", (req, res, next, id) => {
  console.log(id)
  next()
})



// router.get("/:id", (req, res) => {
//   res.send(`Get User With ID ${req.params.id}`);
// });

// router.put("/:id", (req, res) => {
//   res.send(`Update User With ID ${req.params.id}`);
// });

// router.delete("/:id", (req, res) => {
//   res.send(`Delete User With ID ${req.params.id}`);
// });


module.exports = router;
