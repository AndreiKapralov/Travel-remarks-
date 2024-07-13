const indexRouter = require("express").Router();
const authRouter = require("./api/auth.router");
const travelRouter = require("./api/travel.routes");
const tokensRoute = require("./api/tokens.routes");


indexRouter.use("/auth", authRouter);
indexRouter.use("/travel", travelRouter);
indexRouter.use("/tokens", tokensRoute);

module.exports = indexRouter;
