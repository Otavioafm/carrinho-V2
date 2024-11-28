const cart=[]

async function addItem(userCart, item) {
    userCart.push(item);
}


async function deletItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)
    if (index!== -1) {
        userCart.splice(index,1)
    }
}


async function removeItem(userCart, id) {
    const indexFunder=userCart.findIndex((p)=>p.name===item.name)
    console.log(indexFunder)
    if (indexFunder==1) {
        console.log("item não encontrado")
        return;
    }
    if (userCart[indexFunder].quantity>1) {
        userCart[indexFunder].quantity-=1;
        return;
    }
    if (userCart[indexFunder].quantity==1) {
        userCart.splice(indexFunder, 1)
        return;
    }
}

async function calculateTotal(userCart) {
    const result=userCart.reduce((total, item)=>total + item.subtotal(),0)
    console.log(result)
}

async function dysplaiCart(userCart) {
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name}-${item.price}|${item.quantity}`)
    })
}

export{
    addItem,
    deletItem,
    removeItem,
    calculateTotal,
    dysplaiCart,
}





