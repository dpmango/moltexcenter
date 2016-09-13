// src/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router';

// import pages
import Home from './pages/Home';
import About from './pages/About';
import Special from './pages/Special';
import Wiki from './pages/Wiki';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';

import Homogenizer from './pages/Homogenizer';
import Separator from './pages/Separator';
import Nasos from './pages/Nasos';
import Aramatura from './pages/Aramatura';
import Truba from './pages/Truba';
import Emkost from './pages/Emkost';

// and components
import Header from './components/Header';
import TopMenu from './components/TopMenu';
import Footer from './components/Footer';
import Partner from './components/Partner';

const App = React.createClass({
  render() {
    return (
      <div className="parallax">
        <Header />
        <TopMenu />
        {this.props.children}
        <Partner />
        <Footer />
      </div>
    )
  }
})

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/about.html" component={About} />
    <Route path="/special.html" component={Special} />
    <Route path="/wiki.html" component={Wiki} />
    <Route path="/contact.html" component={Contact} />
    <Route path="/gomogenizatoryi.html" component={Homogenizer}/>
    <Route path="/separatoryi.html" component={Separator}/>
    <Route path="/elektronasosyi.html" component={Nasos}/>
    <Route path="/nerzhaveyushhaya-armatura.html" component={Aramatura}/>
    <Route path="/truba-nerzhaveyushhaya.html" component={Truba}/>
    <Route path="/emkostnoe-oborudovanie.html" component={Emkost}/>
    <Route path="*" component={NoMatch}/>
  </Route>
);

export default routes;
