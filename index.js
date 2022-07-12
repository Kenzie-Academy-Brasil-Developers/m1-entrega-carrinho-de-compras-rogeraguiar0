const productsCart = [
    {
        id: 0,
        name: "Uva Crimson",
        price: 44.99
    },
    {
        id: 1,
        name: "Vinho Canção",
        price: 17.98
    },
    {
        id: 2,
        name: "Água de coco",
        price: 8.99
    },
    {
        id: 3,
        name: "Mamão",
        price: 9.98
    },
    {
        id: 4,
        name: "Água tônica",
        price: 17.98
    }
]

function plus (arr) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        x += arr[i].price;
    }
    return x;
}

function estrutura () {
    const body       = document.body;

    const header     = document.createElement("header");
    const h1         = document.createElement("h1");
    h1.innerText     = "Virtual Market";

    const main       = document.createElement("main");

    const sectionI    = document.createElement("section");
    const sectionII   = document.createElement("section");
    const button      = document.createElement("button");
    button.innerText  = "Finalizar compra";

    const item      = document.createElement("p");
    item.innerText  = "Item";
    const valor     = document.createElement("p");
    valor.innerText = "Valor";

    const total     = document.createElement("p");
    total.innerText = "Total";
    const soma      = document.createElement("p");
    soma.innerText  = `R$ ${plus(productsCart)}`;

    body.appendChild(header);
    header.appendChild(h1);
    
    body.appendChild(main);
    main.appendChild(sectionI);
    sectionI.classList.add("sectionItens");
    main.appendChild(sectionII)
    sectionII.classList.add("sectionSoma");
    main.appendChild(button);

    sectionI.appendChild(item);
    sectionI.appendChild(valor);

    sectionII.appendChild(total);
    sectionII.appendChild(soma);
}
estrutura();

function addList (arr) {    
    const main = document.querySelector("main")

    const ul    = document.createElement("ul");
    const referencia = document.querySelector(".sectionSoma")
    main.insertBefore(ul, referencia);

    ul.classList.add("list")
    
    for (let i = 0; i < arr.length; i++){
        const li    = document.createElement("li");

        let nome      = document.createElement("strong");
        nome.innerText  = arr[i].name;
        let valor     = document.createElement("p")
        valor.innerText = `R$ ${arr[i].price}`;

        li.appendChild(nome);
        li.appendChild(valor);
        ul.appendChild(li);
    }
}
addList(productsCart);