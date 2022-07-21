import { JSDOM } from "jsdom";
import { expect } from "chai";

import example from "./example.js"

let toggleButton = example.toggleButton

beforeEach(() => {
  const example_dom = new JSDOM(
    `<html>
       <body>
        <button class="tater-tots" aria-expanded="true">Tots</button> 
       </body>
     </html>`,
     { url: 'http://localhost' },
  );

  global.ex_window = example_dom.window;
  global.ex_document = example_dom.window.document;
});


describe('Accordion', () => { 
   describe('toggleButton', () => {
     it('sets aria-expanded to false, when initially set to true', () => {
       // Arrange
       const taterTotsButton = ex_document.querySelector('.tater-tots');
       // Act
       toggleButton(taterTotsButton)
       // Assert
       const taterTotsAria = taterTotsButton.getAttribute('aria-expanded');
       expect(taterTotsAria).to.equal('false');
     })
   })
}); 

