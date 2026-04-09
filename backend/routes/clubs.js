const express = require("express");
const clubs = require("../data/clubs.json");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(clubs);
});

router.post("/", (req, res) => {
  const newClub = {
    id: clubs.length ? clubs[clubs.length - 1].id + 1 : 1,
    name: req.body.name || "New Club",
    category: req.body.category || "general",
    description: req.body.description || "",
    image: req.body.image || "/assets/clubs/acm-logo.jpg",
    socialMedia: req.body.socialMedia || {},
    details: req.body.details || [],
    events: req.body.events || []
  };

  clubs.push(newClub);
  res.status(201).json(newClub);
});

module.exports = router;
