function moveProgress(instance, progress_frac) {
    var el = document.querySelector("#fill");
    el.style.width = (progress_frac * 100) + "%";

    if (progress_frac == 1) {
        document.querySelector("#centered").style.display = "none";
        unityInstance.container.focus();
    }
}
