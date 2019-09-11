import React, {Component} from 'react';
import Spinner from './Spinner';
import {Link} from 'react-router-dom';
class RecipesDetail extends Component {
  componentDidMount(){
      this.props.getdetails(this.props.match.params.id);
  }
   
    render(){
       const {image_url,publisher,publisher_url,ingredients,title,source_url} = this.props.detail;
        if(this.props.loading){
            return <Spinner />
        }else{
            if(ingredients!== undefined){
        return(
            <div className="container mt-5">
            <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
            <Link to="/"  className="btn btn-warning mb-5">Back to recipe list</Link>
            <img src={image_url} alt="" className="d-block w-100" />
            </div>
            <div className="col-10 mx-auto col-md-6 my-3">
            <h4>{title}</h4>
                    <h6 className="text-warning text-slanted">
                    provided by {publisher}
                    </h6>
                    <a href={publisher_url} className="btn btn-primary mt-2" rel="noopener noreferrer">Publisher</a>
                    <a href={source_url} className="btn btn-primary mt-2 ml-3" rel="noopener noreferrer">Recipe URL</a>
                    <ul className="list-group mt-4">
                        <h2 className="mt-3 mb-4">Ingredients</h2>
                        { ingredients.map(data =>{
                            return (<li>{data}</li>)
                        })}
                    </ul>
                       
            </div>
            </div>
            </div>
        )}else{
            return null
        }
        }
    }
}

export default RecipesDetail;