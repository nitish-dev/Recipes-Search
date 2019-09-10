import React,{Component, Fragment} from 'react';
import Header from './Component/Header';
import Search from './Component/Search';
import Recipes from './Component/Recipes';
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
 const res = await axios.get(`https://www.food2fork.com/api/search?key=e86c04f46310b98a700d898d19ffb0f8&q=${terms}`);
 this.setState({recipes:res.data.recipes, loading:false});
 
}
    //setAlert
    setAlert = (msg) => {
      this.setState({alert:msg});
      setTimeout(() => this.setState({alert: null}), 5000);
    }
 
  render(){
    //const {loading,recipes} = this.state;
    return (
      <Fragment>
      <Header />
      <Search getrecipes={this.getRecipes} setAlert={this.setAlert} />
      <Alert alert={this.state.alert} />
      <Recipes recipe={this.state.recipes} loading={this.state.loading} />
      </Fragment>
    )
  }
}

export default App;
