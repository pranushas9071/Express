import express from "express";

// import { bird } from "../controllers/birds.controller.js";
import { bird } from "../controllers";

export let router = express.Router();
router.get("/", bird.home);
router.get("/about", bird.about);
// router.use() =>router middleware.....

// export default router;
