const { tryCatch } = require("../../utils/tryCatch");
const UserModels = require("../../models/usersModels");
const { imageUtils } = require("../../utils/imageUtils");
const route = require("express").Router();
route.get(
  "/",
  tryCatch(async (req, res) => {
    const users = await UserModels.findOne({ name: "marky" });
    users.img_url = imageUtils(users.image);
    return res.status(200).json({ data: users });
  })
);
module.exports = route;
