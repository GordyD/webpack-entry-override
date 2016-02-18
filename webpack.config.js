module.exports = {
    entry: [ './lib/a.js', './lib/b.js'],
    output: {
        path: __dirname + "/dist",
        filename: "output-ab.js"
    }
};