const router = require("express").Router();
const {
  addProduct,
  updateProduct,
  getProduct,
  deleteProduct,
  getById,
} = require("../../controller/productController");
router.get("/", getProduct);
router.get("/:id", getById);
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
