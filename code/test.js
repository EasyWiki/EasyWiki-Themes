const testServerPath = "../easywiki-test";
const themes = "config";
const css = "css";

const path = require("path");
const fs = require('./filesystem');

fs.Mkdir(path.join(testServerPath, "themes"));
fs.Mkdir(path.join(testServerPath, "public", "css"));

fs.CopyInto(themes, path.join(testServerPath, "themes"));
fs.CopyInto(css, path.join(testServerPath, "public", "css"));

console.log("Copied files");