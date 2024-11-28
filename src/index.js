import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const myCart=[]
const mywishlist=[]

const item1= await createItem("Caneca",15.38,4)
const item2= await createItem("Caneca de quartzo",599.90,2)

cartService.addItem(myCart,item1)
cartService.addItem(mywishlist,item2)

await cartService.deletItem(myCart, item2.name)

await cartService.calculateTotal(myCart)

await  cartService.dysplaiCart(myCart)










