"use strict";

const rules = {
  "no-spaces": require("./rules/no-spaces.js"),
};

module.exports = {
  rules,
  configs: {
    all: {
      plugins: { awesome: { rules } },
      rules: {
        "awesome/no-spaces": "error",
      },
    },
  },
};
