The purpose of this repo is to show an oddity when trying to override webpack entry with CLI when option is set as an array.

### Run

To perform the different webpack CLI processes run the following commands.

```
npm  install
npm run build-ab
npm run build-ab-plus-c
npm run build-ab-without-c
```

### Sample Webpack Configuration

```
module.exports = {
    entry: [ './lib/a.js', './lib/b.js'],
    output: {
        path: __dirname + "/dist",
        filename: "output-ab.js"
    }
};
```

### NPM Scripts

These are the scripts defined in `package.json`

```
{
  "build-ab": "webpack",
  "build-ab-without-c": "webpack --entry ./lib/c.js --output-filename output-ab-without-c.js",
  "build-ab-plus-c": "webpack ./lib/c.js --output-filename output-ab-plus-c.js"
}
```
