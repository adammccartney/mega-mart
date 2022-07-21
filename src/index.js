import megaMart from "./mega-mart.js"

let items = megaMart.items;
let nav_data = megaMart.nav_data;


// render our components
megaMart.make_nav_display_dom(nav_data);
megaMart.make_item_display_dom(items);
