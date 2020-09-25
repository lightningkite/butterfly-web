"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ViewDependency_1 = require("./views/ViewDependency");
const HttpClient_1 = require("./net/HttpClient");
const rxjs_1 = require("rxjs");
function main(rootVg) {
    HttpClient_1.HttpClient.INSTANCE.ioScheduler = rxjs_1.asyncScheduler;
    HttpClient_1.HttpClient.INSTANCE.responseScheduler = rxjs_1.asyncScheduler;
    const view = rootVg.generate(window);
    document.body.appendChild(view);
    ViewDependency_1.listenForDialogs();
}
exports.main = main;
//# sourceMappingURL=main.js.map