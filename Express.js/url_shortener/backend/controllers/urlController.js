const URL = require("../models/URL");

const url_list = async (req, res) => {
  const allURLs = await URL.getAll();
  res.json(allURLs);
};

const url_detail = async (req, res, next) => {
  const { id } = req.params;
  const url = await URL.getFromID(id);
  url && res.redirect(url.url);
  next();
};

const url_create_post = async (req, res) => {
  const originalURL = req.body.url;
  const url = await new URL(originalURL);
  await url.save();
  res.json(url);
};

module.exports = { url_list, url_create_post, url_detail };
