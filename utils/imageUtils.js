exports.imageUtils = (file) => {
  if (file) {
    const image = file;
    const thumbnail = `http://192.168.1.21:3000/uploads/${image}`;
    return thumbnail;
  } else {
    return null;
  }
};
