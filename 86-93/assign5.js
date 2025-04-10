for (let img of document.images) {
    if (img.hasAttribute("alt")) {
        img.alt = "Old";
    } else {
        img.alt = "Elzero New";
    }
}