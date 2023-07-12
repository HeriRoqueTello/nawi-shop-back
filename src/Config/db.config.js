"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
//details from the env
const username = process.env.username;
const password = process.env.password;
const dbName = 'Post';
//connection string to mongo atlas
// mongodb+srv://heriroque22:<password>@nawishop.atgurfp.mongodb.net/
const connectionString = `mongodb+srv://heriroque22:${password}@nawishop.atgurfp.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const options = {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4 // Use IPv4, skip trying IPv6
};
//db connection
exports.db = mongoose_1.default.connect(connectionString, options)
    .then(res => {
    if (res) {
        console.log(`Database connection succeffully to ${dbName}`);
    }
}).catch(err => {
    console.log(err);
});
