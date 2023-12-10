import db from '../models/index.js';
import {v4 as uuidv4} from 'uuid';

//create main model
const Account = db.accounts

//crate account
export const addAccount = async (req, res) =>
{
    const user = req.body
    let uuid = uuidv4();
    let info = {
        id: uuid,
        name: user.name,
        email: user.email,
        verifyEmail: false,
        password: user.password,
        profile_image_path : '~EMPTY~'
    }

    const account = await Account.create(info)
    res.status(200).send(account);
}

// get All Account 
export const getAllAccount = async (req, res) =>
{
    let account = await Account.findAll()
    console.log(`FINISH`);
    res.status(200).send(account);
}

// get single Account by Id
export const getSingleAccount = async (req, res) =>
{
    const id = req.params.id
    let account = await Account.findOne({
        where: { id: id }
    })
        .catch(err => { console.log(err) })

    res.status(200).send(account);
}

// update Account by ID
export const updateAccount = async (req, res) =>
{
    const id = req.params.id

    const account = await Account.update(req.body, { where: { id: id } })
        .catch((err) => { console.log(err) });

    res.status(200).send(account);
}

// delete Account by Id
export const deleteAccount = async (req, res) =>
{
    const id = req.params.id
    await Account.destroy({ where: { id: id } })
        .catch((err) => { console.log(err) });

    res.status(200).send(`Account with ID : ${id} is deleted!`);
}

