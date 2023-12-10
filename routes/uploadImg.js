import express from "express";
import { upload, uploadSingleImage, formForImage } from '../controllers/uploadImgController.js';

const router = express.Router();

router.get('/:id', formForImage);

router.post('/:id', upload.single("image"), uploadSingleImage)

export default router;