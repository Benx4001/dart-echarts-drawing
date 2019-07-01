const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/drawing.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        libraryTarget: "var",
        library: "EntryPoint"
    }
}