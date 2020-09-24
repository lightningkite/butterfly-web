
//! Declares com.lightningkite.butterfly.views.setOnDoneClick
export function xEditTextSetOnDoneClick(editText: HTMLInputElement, action: ()=>void) {
    editText.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            action()
        }
    });
}