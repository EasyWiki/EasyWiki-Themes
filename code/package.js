const themes = "config";
const css = "css";

const path = require("path");
const fs = require('./filesystem');

fs.Mkdir("package")
fs.Mkdir(path.join("package","themes"));
fs.Mkdir(path.join("package", "public"));
fs.Mkdir(path.join("package", "public", "css"));

fs.CopyInto(themes, path.join("package","themes"));
fs.CopyInto(css, path.join("package", "public", "css"));