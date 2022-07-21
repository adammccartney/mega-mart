/* test.item-list.js 
   this module tests out some of the append procedures that we are relying on
   it uses some dom manipulation
*/

import { JSDOM } from "jsdom";
import { expect } from "chai";

import megaMart from "../src/index.js"


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
      let make_list = megaMart.make_list
      let prepared_node = make_list(items)
      expect(prepared_node).to.equal(list_val_doc)
    })
  })
})
