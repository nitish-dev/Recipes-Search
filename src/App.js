import React,{Component, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Component/Header';
import Search from './Component/Search';
import Recipes from './Component/Recipes';
import RecipesDetail from './Component/RecipesDetails';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Alert from './Component/Alert';


class App extends Component{
  state = {
    loading:false,
    alert:null,
    recipes:[]
  }

  //Search recipes
  
getRecipes = async terms => {
  this.setState({loading:true});
 const res = await axios.get(`https://www.food2fork.com/api/search?key=ea91ea1d0b21f780621a679a772766f3&q=${terms}`);
 this.setState({recipes:res.data.recipes, loading:false});
 
}

    //setAlert
    setAlert = (msg) => {
      this.setState({alert:msg});
      setTimeout(() => this.setState({alert: null}), 5000);
    }
 
  render(){
    const {loading,recipes,alert} = this.state;
    return (
     
        <Router>
          <Switch>
            <Route exact path="/" render={props => (
              <Fragment>
               <Header />
               <Search getrecipes={this.getRecipes} setAlert={this.setAlert} />
               <Alert alert={alert} />
               <Recipes recipe={recipes} loading={loading} />
               </Fragment>
            )} />
            <Route exact path="/view/:id" component={RecipesDetail} />
     
      </Switch>
      </Router>
     
    )
  }
}

export default App;
