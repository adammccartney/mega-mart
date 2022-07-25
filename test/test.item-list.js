/* test.item-list.js 
   this module tests out some of the append procedures that we are relying on
   it uses some dom manipulation
*/

import { JSDOM } from "jsdom";
import { expect } from "chai";

import megaMart from "../src/mega-mart.js"


/* hooks
   basically what we are trying to do is to carry out a number of actions
   on an existing document, we want the manipulations to result in a specific
   shape. To accomplish this we set up a validator DOM that contains the tree
   that we want to achieve.
*/

beforeEach(() => {
  const dom = new JSDOM(
    `<html>
       <body> 
       </body>
     </html>`,
     { url: 'http://localhost' },
  );


  global.window = dom.window;
  global.document = dom.window.document;
});


describe('Item list created', function () {
  describe('DisplayList()', function () {

    before(function () {
      const list_val_dom = new JSDOM(
        `<html>
          <body>
            <div class="store-items">
              <li>
                <ul>Shirt</ul>
                <ul>Jeans</ul>
              </li>
            </div>
          </body>
        </html>`,
        { url: 'http://localhost' },
      );
      // use this to validate that our node is correctly formed
      global.list_val_doc = list_val_dom.document;
      });

    it('Create li DOM node w/item data append to tree', function () {
      // *namespace imports*
      let items = megaMart.items
      let make_list_dom = megaMart.make_list_dom
      let prepared_node = make_list_dom(items)
      expect(prepared_node).to.equal(list_val_doc)
    })
  })
})


describe('Item container', function () {
  describe('displayItemContainer()', function () {

    before(function () {
      const itcont_val_dom = new JSDOM(
        `<html>
          <body>
            <div class="item-grid-container">
                <div class="item-description">Shirt</div>
                <div class="item-price">15</div>
            </div>
            <div class="item-grid-container">
                <div class="item-description">Jeans</div>
                <div class="item-price">12</div>
            </div>
         </body>
        </html>`,
        { url: 'http://localhost' },
      );
      // use this to validate that our node is correctly formed
      global.itcont_val_doc = itcont_val_dom.document;
      });

    it('Create basic store display', function () {
      // *namespace imports*
      let items = megaMart.items;
      let make_item_display_dom = megaMart.make_item_display_dom;
      let prepared_node = make_item_display_dom(items);
      expect(prepared_node).to.equal(itcont_val_doc);
    })
  })
})

describe('Nav container', function () {
  describe('create_nav_container_dom()', function() {

    before(function() {
      const navcont_val_dom = new JSDOM(
        `
        <nav>
            <div class="nav-grid-container">
                <ul class="navbar-left">
                    <li><a>megaMart</a></li>
                </ul> <!--end-navbar-left-->

                <ul class="cart-display">
                    <li><a>Cart</a></li>
                    <li><a class="cart-total">0</a></li>
                </ul> 
            </div> 
        </nav>`,
        {url: 'http://localhost'},
      );
      global.navcont_document = navcont_val_dom.document;
    });

    it('Creates main nav containing cart', function () {
      // *namespace imports
      let make_nav_display_dom = megaMart.make_nav_display_dom; 
      let nav_data = megaMart.nav_data;
      let prepared_node = make_nav_display_dom(nav_data);
      expect(prepared_node).to.equal(navcont_document);
    })
  });
});
