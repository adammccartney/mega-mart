const prvt_nav_data = [
  {
    listclass: "navbar-left",
    data: {
      display: "MegaMart"
    }
  },
  {
    listclass: "cart-display",
    data: {
      display: "Cart",
      total: "0"
    }
  }
]

function prvt_make_nav_display_dom (nav_data) {

  let list_elements = []

  // parse the nav data to generate element structure
  // our nav consists of a number of lists of various items
  for (let i = 0; i < nav_data.length; i++) {
    let nav_list = document.createElement("ul");
    nav_list.classList.add(nav_data[i].listclass);
    let navlist_item = document.createElement('li');
    let display = document.createElement('strong');
    display.innerHTML = nav_data[i].data.display;

    // append display to item
    navlist_item.appendChild(display)
    
    if (nav_data[i].listclass == "cart-display") {
      let total = document.createElement('strong');
      total.classList.add('cart-total');
      total.innerHTML = nav_data[i].data.total;
      // append total to item
      navlist_item.appendChild(total);
    }
    // append items to list
    nav_list.appendChild(navlist_item);
    // gather elements
    list_elements.push(nav_list);
  }
  
  // create a single display container that we will use as parent node
  let nav = document.createElement("nav");
  // add grid container to hold stuff
  let navgridcontainer = document.createElement("div");
  navgridcontainer.classList.add('nav-grid-container');

  // append elements that were created above
  for (let element of list_elements) {
    navgridcontainer.appendChild(element);
  }
 
  // append container to nav
  nav.appendChild(navgridcontainer);
  // append nav after first node in body
  document.getElementsByTagName('body')[0].appendChild(nav);
}



const prvt_items = [
      {name: "Shirt", price: "15"},
      {name: "Jeans", price: "12"}
]

function prvt_make_list_dom (list_data) {
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

const kebabCase = string => string
   .replace(/([a-z])([A-Z])/g, "$1-$2")
   .replace(/[\s_]+/g, '-')
   .toLowerCase(); 


function prvt_make_ui (type, message) {
  // add a message to display in the innerHTML block
  // create a button to add to cart
  // callback is an optional argument that can be used to pass an on click function
  let ui;
  if (type == 'button') {
    ui = document.createElement('button');
    ui.addEventListener('click', function listener(e) {
       
      let btn_elt = e.target;
      let [item_name, item_price] = prvt_extract_item_info_dom(btn_elt);
      // add item unit to cart
      prvt_add_item_to_cart(item_name, item_price);
      // update total as logic and ui
      prvt_calc_cart_total();
    });
  }

  ui.classList.add(kebabCase(message));
  ui.innerHTML = message;

  return ui;
}

function prvt_extract_item_info_dom (btn_elt) {
  /* WARNING: this is highly dependent on the current structure of the dom component 
     the behaviour will break if there are any changes to the dom ui elements
     (classlist, position with relation to siblings)
      */
  // extracts the info associated with a btn node
  // assumes that a button element has two previous siblings:
  // strong elements that contain basic info on item price and name
  let item_price_element = btn_elt.previousElementSibling;
  let item_price = parseInt(item_price_element.innerHTML);
  let item_name_element = item_price_element.previousElementSibling;
  let item_name = item_name_element.innerHTML;
  return [item_name, item_price]
}

function prvt_get_add_to_cart_buttons_dom () {
  // gets all the add to cart buttons from dom
  // formats any data related to the buttons position in dom
  // this is cacluated from the siblig nods (item name and item price)
  // returns an array of tuples (button, item)
  let btns = document.getElementsByClassName('add-to-cart');

  let tups = []
  for (let btn of btns) {
    let [item_name, item_price] = prvt_extract_item_info_dom(btn);
    let item = {
      name: item_name,
      price: item_price
    };
    let btn_tup = [btn, item];
    tups.push(btn_tup);
  }
  return tups;
}

function prvt_update_free_shipping_icon (btn_ui, action) {
  let shipping_elt = btn_ui.nextElementSibling;
  console.log(shipping_elt);
  if (action == 'hide') { 
    console.log("hide item")
    shipping_elt.style.display = "none";
  } 
  else {
    console.log("show item")
    shipping_elt.style.display = "circle";
  }
  console.log("shipping elt:", shipping_elt)
}

function prvt_gets_free_shipping (total, item_price) {
  return item_price + total >= 30
}

function prvt_update_shipping_icons () {
  let buy_btns = prvt_get_add_to_cart_buttons_dom()
  for (let btn of buy_btns) {
    let [btn_ui, btn_data] = btn; 
    if (prvt_gets_free_shipping(prvt_shopping_cart_total, btn_data.price)) {
      prvt_update_free_shipping_icon(btn_ui, "show");
    } else {
      prvt_update_free_shipping_icon(btn_ui, "hide");
    }
  }
}

function prvt_make_free_shipping_element () {
  // creates an element to represent a free shipping sticker
  let elt = document.createElement('div');
  elt.classList.add('circle');
  elt.id = 'circle';
  elt.style.display = 'none';
  return elt
}

function prvt_get_item_elements () {
  // gets the item grid element from our document
  let item_elements = document.getElementsByClassName('item-grid-container')
  return item_elements;
}

function prvt_make_item_display_dom (list_data) {
  // create a single display container that we will use as parent node
  let displaycontainer = document.createElement("div");
  displaycontainer.classList.add("item-display-container");

  // add it to the page
  document.getElementsByTagName('body')[0].appendChild(displaycontainer);

  // iterate through the item list, create children for each node with
  // their own container and append these to the displaycontainer
  for (let i = 0; i < list_data.length; i++) {
    // create grid container to display item info
    let itemgridcontainer = document.createElement('div');
    itemgridcontainer.classList.add('item-grid-container');

    // create display elements for item name and item price
    //let {name_data: name, price_data: price} = list_data[i];
    let name_data = list_data[i].name;
    let price_data = list_data[i].price;

    // create ui elements for the same
    let name_ui = document.createElement('div');
    let price_ui = document.createElement('div');
    name_ui.classList.add('item-description');
    price_ui.classList.add('item-price');

    // inject data to ui 
    name_ui.innerHTML = name_data;
    price_ui.innerHTML = price_data;

    // create add to cart button
    let add_to_cart_ui = prvt_make_ui("button", "Add To Cart");
    let shipping_elt = prvt_make_free_shipping_element();
    
    // append the ui elements to parent node
    itemgridcontainer.appendChild(name_ui);
    itemgridcontainer.appendChild(price_ui);
    itemgridcontainer.appendChild(add_to_cart_ui);
    itemgridcontainer.appendChild(shipping_elt);
    displaycontainer.appendChild(itemgridcontainer);
  }
}

function prvt_set_cart_total_dom (total) {
  let elts = document.getElementsByClassName("cart-total")
  let total_ui = elts[0]
  total_ui.innerHTML = total;
}

var prvt_shopping_cart = [];
var prvt_shopping_cart_total = [];

function prvt_add_item_to_cart(name, price) {
  prvt_shopping_cart = prvt_add_item(prvt_shopping_cart, name, price);
  prvt_calc_cart_total();
}

function prvt_add_item(cart, name, price) {
  var new_cart = cart.slice();
  new_cart.push({
    name: name,
    price: price
  });
  return new_cart;
}

function prvt_calc_total (cart) {
  prvt_shopping_cart_total = 0;
  let total = 0;
  for(var i = 0; i < cart.length; i++) {
    let item = cart[i];
    total += item.price;
  }
  return total; 
}

function prvt_calc_cart_total() {
  let total = prvt_calc_total(prvt_shopping_cart);
  prvt_shopping_cart_total = total;
  prvt_set_cart_total_dom(total); 
  prvt_update_shipping_icons();
}

const megaMart = {
  items: prvt_items,
  nav_data: prvt_nav_data,
  make_list_dom: prvt_make_list_dom,
  make_item_display_dom: prvt_make_item_display_dom,
  make_nav_display_dom: prvt_make_nav_display_dom,
  shopping_cart: prvt_shopping_cart,
  shopping_cart_total: prvt_shopping_cart_total,
  add_item_to_cart: prvt_add_item_to_cart,
  calc_cart_total: prvt_calc_cart_total
};
 
export default megaMart;
