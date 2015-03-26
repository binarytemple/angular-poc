/*global applicationContext, require */
(function() {
  "use strict";
  var f, i, col, doc, from, to,
    db = require("org/arangodb").db,
    heroes = applicationContext.collectionName("heroes"),
    comics = applicationContext.collectionName("comics"),
    appeared_in = applicationContext.collectionName("appeared_in");


  if (db._collection(heroes) === null) {
    db._create(heroes);
    f = require("./data/heroes.data.json");
    require("console").log(f.length);
    col = db._collection(heroes);
    for (i = 0; i < f.length; ++i) {
      col.save(f[i].data);
    }
  }
  if (db._collection(comics) === null) {
    db._create(comics);
    col = db._collection(comics);
    f = require("./data/comics.data.json");
    for (i = 0; i < f.length; ++i) {
      col.save(f[i].data);
    }
  }
  if (db._collection(appeared_in) === null) {
    db._createEdgeCollection(appeared_in);
    col = db._collection(appeared_in);
    f = require("./data/appeared_in.data.json");
    for (i = 0; i < f.length; ++i) {
      doc = f[i].data;
      from = doc._from.replace("heroes", heroes);
      to = doc._to.replace("comics", comics);
      col.save(from, to, doc);
    }
  }
}());

