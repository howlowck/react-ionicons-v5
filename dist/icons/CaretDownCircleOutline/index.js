"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
function SvgComponent(props) {
    return React.createElement("svg", Object.assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("path", { d: "M342.43,238.23,268.3,327.32a16,16,0,0,1-24.6,0l-74.13-89.09A16,16,0,0,1,181.86,212H330.14A16,16,0,0,1,342.43,238.23Z" }),
        React.createElement("path", { d: "M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z", style: {
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }));
}
exports.default = SvgComponent;
