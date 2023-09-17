const { tryCatch } = require("../utils/tryCatch");
const ProductModel = require("../models/products");
const { imageUtils } = require("../utils/imageUtils");
exports.getProduct = tryCatch(async (req, res) => {
  const product = await ProductModel.find();
  if (!product)
    throw res.status(500).send([{ error: true, message: "เกิดข้อผิดพลาด" }]);
  const products = product.map((item) => {
    item.img_url = imageUtils(item.images);
    item.create_by.img_url = imageUtils(item.create_by.image);
    return item;
  });
  return res.status(200).json([{ error: false, message: "", data: products }]);
});

exports.addProduct = tryCatch(async (req, res) => {
  if (!Object.keys(req.body))
    throw res
      .status(409)
      .send([{ error: true, message: "กรูณากรอกข้อมูลให้ครบ" }]);

  const product = await ProductModel.create(req.body);
  if (!product)
    throw res.status(500).send([{ error: true, message: "เกิดข้อผิดพลาด" }]);
  return res
    .status(201)
    .json([{ error: false, message: "เพิ่มข้อมูลสำเร็จ!กรุณาตรวจสอบ" }]);
});

exports.updateProduct = tryCatch(async (req, res) => {
  const { id } = req.params;
  if (!Object.keys(req.body))
    throw res
      .status(409)
      .send([{ error: true, message: "กรูณากรอกข้อมูลให้ครบ" }]);

  const product = await ProductModel.findByIdAndUpdate(id, req.body);
  if (!product)
    throw res.status(500).send([{ error: true, message: "เกิดข้อผิดพลาด" }]);
  return res
    .status(201)
    .json([{ error: false, message: "แก้ไขข้อมูลสินค้าสำเร็จ!" }]);
});

exports.deleteProduct = tryCatch(async (req, res) => {
  const { id } = req.params;
  if (!id)
    throw res
      .status(409)
      .send([{ error: true, message: "ไม่มีพบข้อมูลสินค้าเกิดข้อผิดพลาด" }]);
  const product = await ProductModel.findByIdAndDelete(id);
  if (!product)
    throw res.status(500).send([{ error: true, message: "เกิดข้อผิดพลาด" }]);
  return res.status(200).send([{ error: false, message: "ลบข้อมูลสำเร็จ!" }]);
});

exports.getById = tryCatch(async (req, res) => {
  const { id } = req.params;
  if (!id)
    throw res
      .status(409)
      .send([{ error: true, message: "ไม่มีพบข้อมูลสินค้าเกิดข้อผิดพลาด" }]);
  const product = await ProductModel.findById(id);
  product.create_by.img_url = imageUtils(product.create_by.image);
  product.img_url = imageUtils(product.images);
  if (!product)
    throw res.status(500).send([{ error: true, message: "เกิดข้อผิดพลาด" }]);
  return res.status(200).send([{ error: false, message: "", data: product }]);
});
