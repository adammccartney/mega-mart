import { JSDOM } from "jsdom";
import { expect } from "chai";
import example from "./example.js"

let toggleButton = example.toggleButton

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

describe('Accordion', () => { 
   describe('toggleButton', () => {
     it('sets aria-expanded to false, when initially set to true', () => {
           // Arrange
           // Act
           // Assert
     })
   })
}); 

