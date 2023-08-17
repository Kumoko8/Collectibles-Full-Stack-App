require("dotenv").config();

const router = require("express").Router();
const ImageKit = require("imagekit");


var imagekit = new ImageKit({
    publicKey : process.env.IMAGE_PUB_KEY,
    privateKey : process.env.IMAGE_PRIVATE_KEY,
    urlEndpoint : process.env.URL_ENDPOINT
});

var authenticationParameters = imagekit.getAuthenticationParameters();

authenticationParameters.publicKey = process.env.IMAGE_PUB_KEY;
authenticationParameters.urlEndpoint = process.env.URL_ENDPOINT;

console.log("ImageKit details:");
console.log(authenticationParameters);

router.get("/auth", async (req, res) => {
  try {
    res.status(200).json(authenticationParameters);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
