import React from 'react'
import ReactDOM from 'react-dom/client'


import layoutmodule from './components/layout.jsx'
const Layout = layoutmodule.Layout;

//const App = () => (
//  <Navbar />
//  //<div
//  //  style={{
//  //    display: 'flex',
//  //    alignItems: 'center',
//  //    justifyContent: 'center',
//  //    height: '100vh',
//  //  }}
//  //>
//
//  //  <h1>
//  //    Hello World from <a href="https://www.polynique.com">Polynique</a>
//  //  </h1>
//  //</div>
//)
//
//ReactDOM.render(<App />, document.getElementById('app'))


const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const navprops = {
  title: "Mega Mart"
}

const element = <Layout home/>;
root.render(element);
