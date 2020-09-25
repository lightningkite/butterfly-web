import {ViewGenerator} from "./views/ViewGenerator";
import {listenForDialogs} from "./views/ViewDependency";
import {HttpClient} from "./net/HttpClient";
import {asyncScheduler} from "rxjs";

export function main(rootVg: ViewGenerator){
    HttpClient.INSTANCE.ioScheduler = asyncScheduler
    HttpClient.INSTANCE.responseScheduler = asyncScheduler
    const view = rootVg.generate(window);
    document.body.appendChild(view);
    listenForDialogs();
}