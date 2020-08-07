"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function HelloWorld(request, response) {
    var user = CreateUser_1.default({
        name: 'Ebraim Carvalho',
        email: 'ebraimcarvalho@gmail.com',
        password: '1234567',
        techs: [
            'Node.js',
            'React JS',
            'React Native',
            { title: 'Javascript', experience: 100 }
        ],
    });
    return response.json({
        message: "Hello Ebra World!!",
        email: user.email,
        techs: user.techs
    });
}
exports.default = HelloWorld;
