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
        React.createElement("path", { d: "M432,176H320V64a48,48,0,0,0-48-48H80A48,48,0,0,0,32,64V480a16,16,0,0,0,16,16H152a8,8,0,0,0,8-8V416.45c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,192,416v72a8,8,0,0,0,8,8H464a16,16,0,0,0,16-16V224A48,48,0,0,0,432,176ZM98.08,431.87a16,16,0,1,1,13.79-13.79A16,16,0,0,1,98.08,431.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,98.08,351.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,98.08,271.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,98.08,191.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,98.08,111.87Zm80,240a16,16,0,1,1,13.79-13.79A16,16,0,0,1,178.08,351.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,178.08,271.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,178.08,191.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,178.08,111.87Zm80,320a16,16,0,1,1,13.79-13.79A16,16,0,0,1,258.08,431.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,258.08,351.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,258.08,271.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,258.08,191.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,258.08,111.87ZM444,464H320V208H432a16,16,0,0,1,16,16V460A4,4,0,0,1,444,464Z" }),
        React.createElement("path", { d: "M400,400a16,16,0,1,0,16,16,16,16,0,0,0-16-16Z" }),
        React.createElement("path", { d: "M400,320a16,16,0,1,0,16,16,16,16,0,0,0-16-16Z" }),
        React.createElement("path", { d: "M400,240a16,16,0,1,0,16,16,16,16,0,0,0-16-16Z" }),
        React.createElement("path", { d: "M336,400a16,16,0,1,0,16,16,16,16,0,0,0-16-16Z" }),
        React.createElement("path", { d: "M336,320a16,16,0,1,0,16,16,16,16,0,0,0-16-16Z" }),
        React.createElement("path", { d: "M336,240a16,16,0,1,0,16,16,16,16,0,0,0-16-16Z" }));
}
exports.default = SvgComponent;
