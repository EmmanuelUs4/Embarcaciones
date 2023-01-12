const Productos = [
    {
        name: "Papa",
        price: 123,
        amount: 1,
        productType: "vegetal",
    },
    {
        name: "Pera",
        price: 1233,
        amount: 1,
        productType: "fruta",
    },
    {
        name: "manzana",
        price: 1232,
        amount: 1,
        productType: "fruta",
    },
    {
        name: "licuadora",
        price: 1236,
        amount: 1,
        productType: "electrodomestico",
    },
    {
        name: "batidora",
        price: 1234,
        amount: 1,
        productType: "electrodomestico",
    },
]

const printProductos = (listaProductos, contenedor) => {
    contenedor.innerHTML = '';

    listaProductos.forEach(producto => {
        const tr = document.createElement('tr')
        tr.classList.add("trP");

        tr.innerHTML = `
                        <td class="producto"><button class="Eliminar" name="${producto.name}">Eliminar</button>
                        <button class="Actualizar" name="${producto.name}">Actualizar producto</button>${producto.name}</td>
                        <td class="precio">${producto.price}</td>
                        <td class="cantidad">${producto.amount}</td>
                        <td class="tipoDeProducto">${producto.productType}</td>
                        <td>
                            
    `;
        contenedor.appendChild(tr)
    });

}



const main = document.querySelector('.main');


const table = document.getElementById("table");

document.addEventListener('DOMContentLoaded', () => {

    let productos = sessionStorage.getItem("productos") ? JSON.parse(sessionStorage.getItem("productos")) : []
    console.log(productos);

    if (!productos.length) {
        sessionStorage.setItem("productos", JSON.stringify(Productos));
        productos = JSON.parse(sessionStorage.getItem("productos"));
        console.log(productos);
    }
    //el array se guarda en el session storage para el formulario, y ahí se hace el push



    printProductos(productos, table);
})

//Botones de edicion y eliminación

document.addEventListener('click', (event) => {
    const { target } = event;

    if (target.classList.contains("Eliminar")) {
        console.log('Borrar producto');
        const confirmacionDelete = confirm('Borrar producto?')
        console.log(confirmacionDelete)
        console.log(target.name)
        if (confirmacionDelete){
        const posicion = Productos.findIndex(producto => producto.name === target.name);
        console.log(posicion);
        Productos.splice(posicion, 1);
        console.log(Productos);
        printProductos(Productos, table)}
    }

    if(target.classList.contains("Actualizar")) {
        console.log('Actualizar producto');
        console.log(target.name)
        sessionStorage.setItem('edicion', JSON.stringify(target.name));
        window.location.href = "pages/formulario.html"
    }

}




);


    // const deleteProduct = confirm("¿Deseas eliminar el producto de la lista?");
    // if (deleteProduct){
    //     // splice

