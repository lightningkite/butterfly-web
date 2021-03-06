"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StandardObservableProperty_1 = require("../observables/StandardObservableProperty");
const rxjs_1 = require("rxjs");
//! Declares com.lightningkite.butterfly.views.lastDialog
exports._lastDialog = new StandardObservableProperty_1.StandardObservableProperty(null, undefined);
function getLastDialog() { return exports._lastDialog; }
exports.getLastDialog = getLastDialog;
//! Declares com.lightningkite.butterfly.views.showDialogEvent
exports._showDialogEvent = new rxjs_1.Subject();
function getShowDialogEvent() { return exports._showDialogEvent; }
exports.getShowDialogEvent = getShowDialogEvent;
//! Declares com.lightningkite.butterfly.views.DialogRequest
class DialogRequest {
    constructor(_string, confirmation = null) {
        this._string = _string;
        this.confirmation = confirmation;
    }
}
exports.DialogRequest = DialogRequest;
//! Declares com.lightningkite.butterfly.views.showDialog
function showDialog(request) {
    getLastDialog().value = request;
    getShowDialogEvent().next(request);
}
exports.showDialog = showDialog;
//! Declares com.lightningkite.butterfly.views.showDialog
function showDialogAlert(message) {
    showDialog(new DialogRequest(message, undefined));
}
exports.showDialogAlert = showDialogAlert;
//# sourceMappingURL=showDialog.js.map