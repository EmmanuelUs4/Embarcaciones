const formulario = document.querySelector('.formulario');
let productos = sessionStorage.getItem("productos") ? JSON.parse(sessionStorage.getItem("productos")) : []



const edicionStr = sessionStorage.getItem("edicion") ? JSON.parse(sessionStorage.getItem("edicion")) : "";
console.log(edicionStr)

const edicionProducto = edicionStr
    ? productos.find((product) => product.name === edicionStr)
    : null;

//cambiar el titulo y boton

const titulo = document.querySelector(".titulo");
titulo.innerText = edicionStr
    ? `Actualizar datos del producto ${edicionProducto.name}`
    : "Agregar un nuevo producto";

const botonAct = document.querySelector(".send")
botonAct.innerText = edicionStr
    ? "Guardar  Cambios" : "Enviar";



}
const valuesFormulario = Object.values(formulario)
console.log(valuesFormulario);
if (edicionProducto) {
    valuesFormulario.forEach((valueInput) => {
        if (valueInput.id) {
            valueInput.value = edicionProducto[valueInput.id];

        }
        
    })
}





formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const valuesFormulario = Object.values(formulario)
    console.log(valuesFormulario);

    const newProduct = {};
    valuesFormulario.forEach(valueInput => {
        if (valueInput.id) {
            newProduct[valueInput.id] = valueInput.value;
        }
        

    });
    if (edicionProducto){
        const productoIndex = productos.findIndex(
            (producto)=> producto.name === edicionProducto
        );
        console.log(productoIndex)
        productos[productoIndex]= newProduct;
        console.log(productos)
        }


    productos.push(newProduct);
    
    console.log(productos)
    //Actualizar info
    sessionStorage.setItem("productos", JSON.stringify(productos));
    //actualizar info en el session
    productos = JSON.parse(sessionStorage.getItem("productos"));

    valuesFormulario.forEach(input => {
        if (input.id) {
            input.value = "";

        }
    })
    

});




