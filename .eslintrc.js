module.exports = {
  //Sirve para ser consistente y tener una sintaxis correcta, entre otras cosas quita los ;
  root: true,
  extends: ["standard"],
  globals: {
    IS_DEVELOPMENT: "readonly",
  },
  parseOptions: {
    ecmasVersion: 2020,
  },
};
