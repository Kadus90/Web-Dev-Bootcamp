var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Sugar Loafin' Campground", image: "http://static.panoramio.com/photos/large/3323702.jpg"},
    {name: "Arrowhead Point Camping Resort", image: "http://www.arrowheadpointresort.com/wp-content/uploads/IMG_0743.jpg"},
    {name: "Estes Park", image: "http://forums.steves-digicams.com/attachments/pentax-samsung-dslr-k-mount-mirrorless/138211d1244950733-rocky-mountain-national-park-reducedestes_park_campsite.jpg"}
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);

    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(3003, 'localhost', function(){
    console.log("Camp's in session!");
});
