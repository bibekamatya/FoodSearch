import { Redirect, Route, Switch } from "react-router-dom";
import "./app.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./componentes/navbar/navbar";
import Contact from "./componentes/pages/contact";
import About from "./componentes/pages/about";
import DetailView from "./componentes/pages/detailView";
import Home from './componentes/Home';

const App = () => {
  return (
    <>
      <div className='page'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/details/:id' component={DetailView} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />
          <Redirect to='/' />
        </Switch>
      </div>
    </>
  );
};

export default App;
