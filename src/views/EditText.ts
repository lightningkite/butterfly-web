
//! Declares com.lightningkite.butterfly.views.setOnDoneClick
export function xEditTextSetOnDoneClick(editText: HTMLInputElement | HTMLTextAreaElement, action: ()=>void) {
    editText.addEventListener("keyup", function(event: KeyboardEvent) {
        if (event.key === "Enter") {
            action()
        }
    });
}