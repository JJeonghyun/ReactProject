import { Router } from "express";

const router = Router();

import upload from "./upload.js";

router.use("/upload", upload);

export default router;
