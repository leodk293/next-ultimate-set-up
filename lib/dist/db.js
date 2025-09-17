"use strict";
exports.__esModule = true;
var mongodb_1 = require("mongodb");
if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}
var uri = process.env.MONGODB_URI;
var options = {
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
};
var client;
if (process.env.NODE_ENV === "development") {
    var globalWithMongo = global;
    if (!globalWithMongo._mongoClient) {
        globalWithMongo._mongoClient = new mongodb_1.MongoClient(uri, options);
    }
    client = globalWithMongo._mongoClient;
}
else {
    client = new mongodb_1.MongoClient(uri, options);
}
exports["default"] = client;
