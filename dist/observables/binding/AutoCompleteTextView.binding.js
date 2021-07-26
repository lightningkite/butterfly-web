"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DisposeCondition_ext_1 = require("../../rx/DisposeCondition.ext");
const ObservableProperty_ext_1 = require("../ObservableProperty.ext");
const CombineObservableProperty_1 = require("../CombineObservableProperty");
const StandardObservableProperty_1 = require("../StandardObservableProperty");
const uuid_1 = require("uuid");
const DisposableLambda_1 = require("../../rx/DisposableLambda");
const viewAttached_1 = require("../../views/viewAttached");
//! Declares com.lightningkite.butterfly.observables.binding.bind>android.widget.AutoCompleteTextView
function xAutoCompleteTextViewBind(this_, options, toString, onItemSelected) {
    let query = new StandardObservableProperty_1.StandardObservableProperty("");
    this_.addEventListener("change", () => {
        query.value = this_.value;
    });
    xAutoCompleteTextViewBindList(this_, CombineObservableProperty_1.xObservablePropertyCombine(options, query, (options, query) => options.filter((x) => toString(x).toLowerCase().indexOf(query.toLowerCase()) != -1)), toString, onItemSelected);
}
exports.xAutoCompleteTextViewBind = xAutoCompleteTextViewBind;
//! Declares com.lightningkite.butterfly.observables.binding.bindList>android.widget.AutoCompleteTextView
function xAutoCompleteTextViewBindList(this_, options, toString, onItemSelected) {
    let optionMap = new Map(options.value.map(x => [toString(x), x]));
    const observables = options.value.map((x) => {
        return new StandardObservableProperty_1.StandardObservableProperty(x);
    });
    const dataListElement = document.createElement("datalist");
    dataListElement.id = uuid_1.v4();
    document.body.appendChild(dataListElement);
    const listAttr = document.createAttribute("list");
    listAttr.value = dataListElement.id;
    this_.attributes.setNamedItem(listAttr);
    DisposeCondition_ext_1.xDisposableUntil(ObservableProperty_ext_1.xObservablePropertySubscribeBy(options, undefined, undefined, (options) => {
        optionMap = new Map(options.map(x => [toString(x), x]));
        const this_ = dataListElement;
        //correct number of options
        const diff = options.length - this_.options.length;
        if (diff > 0) {
            for (let i = 0; i < diff; i++) {
                const newOpt = document.createElement("option");
                newOpt.value = (options.length - 1 - diff + i).toString();
                const newObs = new StandardObservableProperty_1.StandardObservableProperty(options[options.length - diff + i]);
                DisposeCondition_ext_1.xDisposableUntil(ObservableProperty_ext_1.xObservablePropertySubscribeBy(newObs, undefined, undefined, (x) => {
                    const s = toString(x);
                    newOpt.value = s;
                }), DisposeCondition_ext_1.xViewRemovedGet(newOpt));
                this_.appendChild(newOpt);
                observables.push(newObs);
            }
        }
        else if (diff < 0) {
            for (let i = 0; i < -diff; i++) {
                const opt = this_.options.item(this_.options.length - 1);
                viewAttached_1.triggerDetatchEvent(opt);
                this_.removeChild(this_.lastChild);
                observables.pop();
            }
        }
        for (let i = 0; i < options.length; i++) {
            observables[i].value = options[i];
        }
    }), DisposeCondition_ext_1.xViewRemovedGet(this_));
    DisposeCondition_ext_1.xViewRemovedGet(this_).call(new DisposableLambda_1.DisposableLambda(() => {
        document.body.removeChild(dataListElement);
    }));
    this_.addEventListener("input", (ev) => {
        const sel = optionMap.get(this_.value);
        if (sel !== undefined) {
            onItemSelected(sel);
        }
    });
}
exports.xAutoCompleteTextViewBindList = xAutoCompleteTextViewBindList;
//# sourceMappingURL=AutoCompleteTextView.binding.js.map