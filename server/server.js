import { app } from "./app.js";
import { connectDb } from "./data/database.js";


connectDb();

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
  // Log the server URL as a clickable link in the console
  console.log(
    "\x1b[36m%s\x1b[0m",
    `Server is running on http://localhost:${PORT} IN ${process.env.NODE_ENV} MODE `
  );
});
