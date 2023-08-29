const products =[
    {id:"1", name:"Gabinete Thermaltake h700", price:499, category:"components"},
    {id:"2", name:"Grafica Rx 6700 Xt", price:399, category:"components"},
    {id:"3", name:"Procesador Ryzen 5 3600", price:299, category:"components"},

    {id:"4", name:"Teclado HyperX Origins Alloy Core", price:299, category:"peripherals"},
    {id:"5", name:"Mouse Logitech G305", price:299, category:"peripherals"},
    {id:"6", name:"Auriculares Logitech G405", price:299, category:"peripherals"},

    {id:"7", name:"Ryzen 5 3600 + Gabinete Thermaltake h700", price:2999, category:"combos"},
    {id:"8", name:"Teclado HyperX Origins Alloy Core + Auriculares Logitech G405", price:2999, category:"combos"},
    {id:"9", name:"Mouse Logitech G405 + Grafica Rx6700 Xt", price:2999, category:"combos"},

];

//getProduct
export const getProduct = (id) => {
    return new Promise ((resolve,reject) => {
        setTimeout(()=> {
            const product = products.find(p => p.id === id)

            if (product){
                resolve(product)
            } else {
                reject ('No existe el producto')
            }

        },1000)
    })
}


//getProducts
export const getProducts = (category) => {
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            const productsFiltered = category ? products.filter(product => product.category === category) : products;

            resolve(productsFiltered);
        },1000);
    })

};