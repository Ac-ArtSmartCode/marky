exports.uploadsImage = (req, res) => {
  const { filename } = req.file;
  if (!filename)
    throw res
      .status(400)
      .send({ error: true, message: "ไม่มีการอัพโหลดรูปภาพ" });
  const thumbnail = `${req.protocol}://localhost:3000/uploads/${filename}`;
  res.status(201).send({ images: { Path: filename, imageUrl: thumbnail } });
};
