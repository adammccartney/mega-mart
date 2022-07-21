const prvt_items = [
      {name: "Shirt", price: "€15"},
      {name: "Jeans", price: "€12"}
]

function prvt_make_list (list_data) {
  // make a container for the list
  let lstcontainer = document.createElement("div")
  lstcontainer.classList.add("store-items")

  // make the list
  let lst = document.createElement("li")

  // Add it to the page
  document.getElementsByTagName('body')[0].appendChild(lstcontainer);
  lstcontainer.appendChild(lst);

  for (let i = 0; i < list_data.length; ++i) {
      // Create an item for each one
      let item = document.createElement('ul');

      // Add the item name
      item.innerHTML = list_data[i].name;

      // Add listItem to the listElement
      lst.appendChild(item);
  }
}

//function prvt_create_item_list_elt(item) {
//    // creates a dom node with item's description
//    let description = document.createElement("ul")
//    description.classList.add("item-description")
////    description.appendChild(elt("strong", `${item.name}`))
//    return description 
//  }
//
//function prvt_elt(type, ...children) {
//  // this fucntion creates an element 
//  let node = document.createElement(type);
//  for (let child of children) {
//    if (typeof child != "item") node.appendChild(child);
//    else node.appendChild(document.createElement(child));
//  }
//  return node;
//}


const megaMart = {
  items: prvt_items,
  make_list: prvt_make_list,
};

export default megaMart;
  

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
