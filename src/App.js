import Main from "./componentes/main";
import { Route, Switch } from "react-router-dom";
import "./app.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./componentes/navbar/navbar";
import Contact from "./componentes/pages/contact";
import About from "./componentes/pages/about";
import Cart from "./componentes/pages/cart";
import DetailView from "./componentes/pages/detailView";

const App = () => {
  return (
    <>
      <div className='page'>
        <Navbar />
        <Switch>
          <Route exact path='/FoodSearch' component={Main} />
          <Route exact path='/FoodSearch/details/:id' component={DetailView} />
          <Route exact path='/FoodSearch/cart' component={Cart} />
          <Route exact path='/FoodSearch/contact' component={Contact} />
          <Route exact path='/FoodSearch/about' component={About} />
        </Switch>
      </div>
    </>
  );
};

export default App;
