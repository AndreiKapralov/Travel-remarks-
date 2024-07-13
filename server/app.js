const express = require("express");
const app = express();
const PORT = 3000
const indexRouter = require("./routes/index.route");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", indexRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен, на ${PORT} `);
});
