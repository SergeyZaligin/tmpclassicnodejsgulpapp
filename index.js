const console = require("console");
const config = require("./config");
const app = require("./app");

app.listen(config.PORT, () => {
  console.log(`Server listening on port http://localhost:${config.PORT}`);
});
