/*global require, applicationContext*/

(function() {
  "use strict";

  // Initialise a new FoxxApplication.
  var Controller = require("org/arangodb/foxx").Controller,
  controller = new Controller(applicationContext);
  var joi = require("joi");

  /** Hello User
  *   This will kindly greet the user
  */
  controller.get("/users", function(req, res) {
	res.json("Hello");
  });

}());
