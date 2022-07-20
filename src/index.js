const prvt_items = [
      {name: "Shirt", price: "€15"},
      {name: "Jeans", price: "€12"}
]

const prvt_create_item_elt = (item) => {
    // creates a dom node with item's description
    let description = document.createElement("div")
    description.classList.add("item-description")
    description.appendChild(elt("strong", `${item.name}`))
  }


const megaMart = {
  items: prvt_items,
  create_item_elt: prvt_create_item_elt
};

export default megaMart;
  

//function elt(type, ...children) {
//  // 
//  let node = document.createElement(type);
//  for (let child of children) {
//    if (typeof child != "item") node.appendChild(child);
//    else node.appendChild(document.createElement(child));
//  }
//  return node;
//}
//
//function create_item_elt (item) {
//    // this is an action
//    // it creates an Element of the type item
//    let node = document.body.getElementByTagName("li")
//    let div = document.createElement('div')
//    div.classList.add('item')
//    Div.appendChild(p)
//    return div
//}
//
//function render_items_dom (items) {
//    for (let i = 0; i < items.length(); i++) {
//        let div = 
//        node.appendChild(document.createElement("div class=item"))
//    }
//}
//
//var shopping_cart = [];
//var shopping_cart_total = [];
//
//function add_item_to_cart(name, price) {
//  shopping_cart.push({
//    name: name,
//    price: price
//  })
//}
