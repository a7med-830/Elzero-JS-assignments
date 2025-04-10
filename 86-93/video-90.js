for (let i = 1; i <= 100; i++) {
    let product = document.createElement("div");
    product.className = "product";

    let heading = document.createElement("h3");
    heading.innerText = `Product ${i} Heading`;
    product.appendChild(heading);

    let paragraph = document.createElement("p");
    paragraph.innerText = `Product ${i} paragraph`;
    product.appendChild(paragraph);

    document.body.appendChild(product);
}
