document.forms[0].onsubmit = function (e) {
    e.preventDefault();

    let eleNum = document.querySelector("[ name = 'elements']").value;
    let eleText = document.querySelector("[ name = 'texts']").value;
    let eleKind = document.querySelector("select").value.toLowerCase();

    let results = document.querySelector(".results");
    results.innerHTML = "";

    for (let i = 1; i <= eleNum; i++) {
        let newElement = document.createElement(eleKind);
        newElement.innerText = eleText;
        newElement.className = "box";
        newElement.title = "title";
        newElement.id = `id-${i}`;
        results.appendChild(newElement);
    }
};
