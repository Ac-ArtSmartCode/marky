const router = require("express").Router();
const { uploads } = require("../../utils/imageUpload");
const { uploadsImage } = require("../../controller/responsImage");
router.post("/", uploads, uploadsImage);
module.exports = router;
