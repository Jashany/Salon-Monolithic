import { createSalon,getOwnerSalon,searchSalons,getSalonById,getSalonByLocation,uploadBrochure,AddPhotos,deleteSalon,UpdateSalon,getSalonsAppointments,getAllSalons,SalonsStats } from "../Controllers/Salon.controller.js";
import { verify,roleAuthorization } from "../middlewares/authenticated.js";

import express from "express";

const Salonrouter = express.Router();

Salonrouter.post("/create-salon",verify,roleAuthorization(['Owner','subAdmin']),createSalon);
Salonrouter.post("/upload-brochure",verify,roleAuthorization(['Owner','subAdmin']),uploadBrochure);
Salonrouter.get("/get-owner-salon",verify,roleAuthorization(['Owner','subAdmin']),getOwnerSalon);
Salonrouter.post("/search-salons", searchSalons);
Salonrouter.get("/getSalon/:id", getSalonById);
Salonrouter.post("/getSalon", getSalonByLocation);

Salonrouter.post(
  "/add-photos",
  verify,
  roleAuthorization(["Owner", "subAdmin"]),
  
  AddPhotos
);

Salonrouter.delete(
  "/delete-salon",
  verify,
  roleAuthorization(["Owner"]),
  deleteSalon
);

Salonrouter.get(
  "/get-salon-appointments",
  verify,
  roleAuthorization(["Owner", "subAdmin"]),
  getSalonsAppointments
);

Salonrouter.put(
  "/update-salon",
  verify,
  roleAuthorization(["Owner", "subAdmin"]),
  UpdateSalon
);

Salonrouter.get(
  "/get-all-salons",
  verify,
  roleAuthorization(["Admin"]),
  getAllSalons
);

Salonrouter.get(
  "/salons-stats",
  verify,
  roleAuthorization(["Admin"]),
  SalonsStats
);

export default Salonrouter;
