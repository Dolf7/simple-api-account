import db from "../models/index.js";
import multer from "multer";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const Account = db.accounts;
let file_path = "";

const storage = multer.diskStorage({
    destination: (req, file, cb) =>
    {
        cb(null, 'images')
    },

    filename: async (req, file, cb) =>
    {
        const id = req.params.id
        const file_name = id + path.extname(file.originalname)
        console.log(file, file_name)

        const account = await Account.update({ profile_image_path: file_name }, { where: { id: id } });
        console.log(account)
        cb(null, file_name)
    }
});

export const upload = multer({ storage: storage })

export const uploadSingleImage = async (req, res) =>
{
    res.send("Image updated");
}

export const formForImage = (req, res) =>
{

    res.sendFile(path.join(__dirname, '../views/upload_image_form.html'))
}