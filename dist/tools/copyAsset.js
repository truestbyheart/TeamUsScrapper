"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const shell = __importStar(require("shelljs"));
/*
* @author Daniel Mwangila
* @description copies the views file into the dist folder for production.
* @reference https://developer.okta.com/blog/2018/11/15/node-express-typescript
* The TypeScript compiler does the work of generating the JavaScript files and copies them to the dist folder.
* However, it does not copy the other types of files the project needs to run, such as the EJS view templates.
* */
shell.cp("-R", "dist/");
//# sourceMappingURL=copyAsset.js.map