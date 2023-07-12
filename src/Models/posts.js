"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = exports.PostschemaValidate = void 0;
//importing modules
const mongoose_1 = require("mongoose");
const joi_1 = __importDefault(require("joi"));
//validation schema
exports.PostschemaValidate = joi_1.default.object({
    title: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    price: joi_1.default.number().required(),
    category: joi_1.default.string().required(),
    subcategory: joi_1.default.string().required(),
    image: joi_1.default.string().required(),
    count: joi_1.default.number().required(),
});
//Postschema
const postSchema = new mongoose_1.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    subcategory: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    count: {
        type: String,
        required: true,
    }
});
//creating a model
exports.Post = (0, mongoose_1.model)('Post', postSchema);
