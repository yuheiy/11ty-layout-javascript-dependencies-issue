const Button = require("./components/button");

module.exports = class {
  data() {
    return {
      layout: "base-layout.11ty.js",
    };
  }

  render() {
    return `${Button("Hi")}`;
  }
};
