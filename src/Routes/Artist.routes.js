import { createArtists,GetArtistbyService,getArtistsBySalon,CreateArtistWithAllServices,updateArtist,deleteArtist } from "../Controllers/Artist.controller.js";
import { verify,roleAuthorization } from "../middlewares/authenticated.js";

import express from "express";

const Artistrouter = express.Router();

Artistrouter.post("/create-artists",verify,roleAuthorization(['Owner','subAdmin']),createArtists);
Artistrouter.post("/create-artist-with-services",verify,roleAuthorization(['Owner']),CreateArtistWithAllServices);
Artistrouter.get("/get-artist-by-service",GetArtistbyService);
Artistrouter.get("/get-artist-by-salon",verify,
roleAuthorization(['Owner','subAdmin']),getArtistsBySalon);
Artistrouter.put("/update-artist",verify,roleAuthorization(['Owner','subAdmin']),updateArtist);
Artistrouter.delete("/delete-artist/:artistId",verify,roleAuthorization(['Owner']),deleteArtist);

export default Artistrouter;
