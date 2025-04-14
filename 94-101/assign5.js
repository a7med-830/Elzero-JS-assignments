[...document.body.children].forEach(element => {
    element.style.cssText = "cursor: pointer;"; // جدعنة من عندي 
    element.addEventListener("click", function () {
        console.log(`This Is ${this.tagName}`)
    })
});
