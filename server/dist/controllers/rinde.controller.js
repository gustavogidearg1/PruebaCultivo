"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putRinde = exports.postRinde = exports.deleteRinde = exports.getRinde = exports.getRindes = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const getRindes = (req, res) => {
    connection_1.default.query('SELECT * FROM `TagRinde`', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getRindes = getRindes;
const getRinde = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM TagRinde WHERE id = ? ', id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.getRinde = getRinde;
const deleteRinde = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM TagRinde WHERE id = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'registro eliminado'
        });
    });
};
exports.deleteRinde = deleteRinde;
const postRinde = (req, res) => {
    const { body } = req;
    connection_1.default.query('INSERT INTO TagRinde set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'registro agregado'
        });
    });
};
exports.postRinde = postRinde;
const putRinde = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE TagRinde set  ? WHERE id = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'registro actualizado'
        });
    });
};
exports.putRinde = putRinde;
