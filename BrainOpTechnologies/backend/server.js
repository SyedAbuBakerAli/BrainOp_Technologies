const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//Setting up config file
dotenv.config({ path: "backend/config/config.env" });

connectDatabase();
const server = app.listen(process.env.PORT, () => {
  console.log(`Server started on PORT: ${process.env.PORT}`);
});
