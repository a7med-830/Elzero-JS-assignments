const addField = document.querySelector(".classes-to-add");
const rmField = document.querySelector(".classes-to-remove");
const target = document.querySelector("[title = 'Current']");
const classListContainer = document.querySelector(".classes-list div");

function showClasses() {
    classListContainer.innerHTML = "";
    const classes = [...target.classList].sort();

    if (classes.length === 0) {
        classListContainer.textContent = "No Classes To Show";
    } else {
        classes.forEach((cls) => {
            let span = document.createElement("span");
            span.textContent = cls;
            classListContainer.appendChild(span);
        });
    }
}
showClasses();

addField.addEventListener("blur", function () {
    let classes = this.value.toLowerCase().trim().split(" ");
    target.classList.add(...classes);
    this.value = "";
    showClasses();
});

rmField.addEventListener("blur", function () {
    let classes = this.value.toLowerCase().trim().split(" ");
    target.classList.remove(...classes);
    this.value = "";
    showClasses();
});