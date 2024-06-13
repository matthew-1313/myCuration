import express from "express";
import axios from "axios";
const app = express();
const cors = require("cors");
const { getTenArtworks } = require("./api");

//mine//
app.use(cors());
app.use(express.json());
//paths
app.get("/api/artworks", getTenArtworks);

module.exports = app;
