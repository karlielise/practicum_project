const express = require("express")
const router = express.Router();
const Hotel = require("./../models/hotel");


router.get("/book", (req, res) => {
    res.render("hotels/book");
})

router.get("/:id", (req, res) => {
    res.send(req.params.id);
})

router.post("/", async (req, res) => {
    let hotel = new Hotel({
        email: req.body.email,
        // currentDate: req.body.book_date,
        // depatureDate: req.body.dep_date,
        // adults: req.body.adult,
        // children: req.body.child
    })
    try {
        hotel = await hotel.save();
        res.redirect(`/hotels/${hotel.id}`);
    } catch (e) {
        res.redirect("/");
    }
})

module.exports = router;