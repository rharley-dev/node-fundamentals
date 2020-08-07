const express = require("express");
const bodyParser = require("body-parser");

const campsiteRouter = express.Router();

// since this is a express application .use is for attaching middleware
campsiteRouter.use(bodyParser.json());

campsiteRouter
  .route("/")
  //chaining methods to the root path
  // Routing method catch-all for HTTP verbs
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next(); // Passes control of routing to the next relevent method below
  })
  .get((req, res) => {
    res.end("Will send all the campsites to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the campsite: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /campsites");
  })
  .delete((req, res) => {
    res.end("Deleting all campsites");
  });

module.exports = campsiteRouter;
