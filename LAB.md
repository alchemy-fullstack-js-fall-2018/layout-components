# Layout components

## Directions

1. Create a `webpack.config.js` file
  * Plugins
    * Use the `html-webpack-plugin` to create an index.html file
  * Loaders
    * JS: `babel-loader`
    * CSS: `style-loader`, `css-loader`, `postcss-loader`
    * Images: `url-loader`
  * use webpack-dev-server

1. Create an `index.html` template file

1. Create an `index.js` file which attaches your main (`App.js`) component

1. Create an `Component.js` containing common component methods
  * the constructor should take in `props` and make them accesable to the other methods
  * `render()` should return html
  * `attach(node)` should set `node`s `innerHTML` to the output from `render()`

1. Create `Header.js`, `Section.js`, and `Footer.js` components.
  * These should `extend` the `Component` class
  * These Components should be reusable! Content should be passed in via props.

1. Create an `App.js` componenent which creates the layout of your application
  * Your layout should contain one header and footer and at least two sections.

1. Create local styles for each component.
  * (i.e.) `App.css`, `Header.css`, `Footer.css`, and `Section.css`
  * import the local styles into the appropriate Component classes

## Testing

Every Component should have a snapshot test.

## Rubric

Snapshot tests: 3pts

Components: 2pts

Webpack: 3pts

Consistency: 2pt
