// NODEJS GMAPS EXAMPLE

var express = require("express");
var app = express.createServer();
var geohash = require("geohash").GeoHash;
 
// enrutado para el manejo de peticiones con express
app.get("/:id",function (req,res)
    {
        //decodificamos a través del geohash
        var latlong = geohash.decodeGeoHash(req.params["id"]);
        console.log("latlong : " + latlong);
        
        var lat = latlong.latitude[2];
        console.log("lat : " + lat);
        
        var lon = latlong.longitude[2];
        console.log("lon : " + lon);
    
        zoom = req.params["id"].length + 2;
        console.log("zoom : " + zoom);
                
        res.render("index.ejs", { layout: false, lat:lat, lon:lon, zoom:zoom, geohash:req.params["id"]});
    });
 
app.listen(9909);