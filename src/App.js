import React, { Component, Fragment }from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Header from './components/Main';
import Footer from './components/Layout/Footer';
import Detailview from './components/DetailView/Detailview';
import ElectronicList from './components/ListView/ElectronicList';
import GroceryList from './components/ListView/GroceryList';
import PhoneList from './components/ListView/PhoneList';
import TabletList from './components/ListView/TabletList';
import JewelryList from './components/ListView/JewelryList';
import ElectronicView from './components/DetailView/ElectronicView';
import GroceryView from './components/DetailView/GroceryView';
import PhoneView from './components/DetailView/PhoneView';
import TabletView from './components/DetailView/TabletView';
import JewelryView from './components/DetailView/JewelryView';
class App extends Component {

render(){
  return(
    <Router>
   <Fragment>
      <Switch>
        <Route exact path="/" component={Header}/>
        <Route exact path="/product/:productID/" component={Detailview}/>
        <Route exact path="/electronics" component={ElectronicList}/>
        <Route exact path="/electronics/:productID/" component={ElectronicView}/>
        <Route exact path="/grocery" component={GroceryList}/>
        <Route exact path="/grocery/:productID/" component={GroceryView}/>
        <Route exact path="/phones" component={PhoneList}/>
        <Route exact path="/phones/:productID/" component={PhoneView}/>
        <Route exact path="/tablets" component={TabletList}/>
        <Route exact path="/tablets/:productID/" component={TabletView}/>
        <Route exact path="/jewelry" component={JewelryList}/>
        <Route exact path="/jewelry/:productID/" component={JewelryView}/>
       
      </Switch>
     <Footer/>
    </Fragment>
  
  </Router>
  )};

}

export default App;