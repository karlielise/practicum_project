const express = require("express");
const router = express.Router();
const Hotel = require("./../models/hotel")

router.get("/book", (req, res) => {
    res.render("hotels/book");
})

router.get("/:id", (req, res) => {
    res.render("hotels/message")
})

router.post("/", async (req, res) => {
    let hotel = new Hotel({
        email: req.body.email,
        currentDate: req.body.book_date,
        DepartureDate: req.body.dep_date,
        Adults: req.body.adult,
        Children: req.body.child
    })
    
    try {
        hotel = await hotel.save();
        res.redirect(`hotels/${hotel.id}`);
    } catch (e) {
        console.log(e);
        // res.redirect("/");
    }
})

module.exports = router;