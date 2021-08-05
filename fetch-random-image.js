const fetch = require("node-fetch");
const BASE_URL = "https://cataas.com/cat/says";

/**
 * @param {*} message message to be shown in the image
 * @param {*} props image properties
 * @returns a random image of a cat with a given message
 */
const fetchRandomImage = async (message, props) => {
  console.log(`Getting random image with word: ${message}`);
  try {
    const request = await fetch(`${BASE_URL}/${message}?${props}`);
    const data = await request.buffer();
    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = fetchRandomImage;
