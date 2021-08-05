const fetchRandomImage = require("./src/fetch-random-image");
const bindImages = require("./src/bind-images");
const argv = require("minimist")(process.argv.slice(2));

const {
  greeting = "Hello",
  who = "You",
  width = 400,
  height = 500,
  color = "Pink",
  size = 100,
} = argv;

/**
 * generateImage gets two random images from cataas
 * pass the images to merge function which will merge images and save
 */
const generateImage = async () => {
  try {
    const fileName = "cat-card.jpg";
    const imageProps = `width=${width}&height=${height}&color=${color}&s=${size}`;
    const firstImage = await fetchRandomImage(greeting, imageProps);
    const secondImage = await fetchRandomImage(who, imageProps);
    await bindImages([firstImage, secondImage], width, height, fileName);
  } catch (error) {
    console.log("Something went wrong,", error);
  }
};

generateImage();
