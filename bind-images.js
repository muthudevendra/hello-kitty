const mergeImages = require("merge-img");
/**
 *
 * @param {*} images array of images which needs to be bind together (buffer or url)
 * @param {*} width of one image in the array
 * @param {*} height of the binded image
 * @param {*} fileName name of the saved file
 * Saves binded images to a file
 * Note: Save is highly coupled with mergeImages functions
 */
const bindImages = async (images, width, height, fileName) => {
  if (!Array.isArray(images)) {
    throw "First parameter in bindImages should be array of images";
  }
  try {
    console.log(`Merging ${images.length} images`);
    const bindedImage = await mergeImages(
      images.map((image, index) => ({ src: image, x: width * index, y: 0 })),
      {
        width: width * images.length,
        height: height,
        format: "jpeg",
      }
    );
    bindedImage.write(fileName, () => console.log("The file was saved!"));
  } catch (error) {
    throw error;
  }
};

module.exports = bindImages;
