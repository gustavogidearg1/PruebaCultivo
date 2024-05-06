"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rinde_controller_1 = require("../controllers/rinde.controller");
const router = (0, express_1.Router)();
router.get('/', rinde_controller_1.getRindes);
router.get('/:id', rinde_controller_1.getRinde);
router.delete('/:id', rinde_controller_1.deleteRinde);
router.post('/', rinde_controller_1.postRinde);
router.put('/:id', rinde_controller_1.putRinde);
exports.default = router;