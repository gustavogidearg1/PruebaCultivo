"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putPresona = exports.postPresona = exports.deletePresona = exports.getPresona = exports.getPresonas = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const getPresonas = (req, res) => {
    connection_1.default.query('SELECT * FROM persona', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getPresonas = getPresonas;
const getPresona = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM persona WHERE id = ? ', id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
        //console.log(data);
    });
    // res.json({
    //     msg:"getPresona",
    //     id: req.params.id
    // })
};
exports.getPresona = getPresona;
const deletePresona = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM persona WHERE id = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'registro eliminado'
        });
        //console.log(data);
    });
    // res.json({
    //     msg:"deletePresona",
    //     id: id
    // })
};
exports.deletePresona = deletePresona;
const postPresona = (req, res) => {
    const { body } = req;
    connection_1.default.query('INSERT INTO persona set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'registro agregado'
        });
    });
};
exports.postPresona = postPresona;
const putPresona = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE persona set  ? WHERE id = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'registro actualizado'
        });
        //console.log(data);
    });
};
exports.putPresona = putPresona;
