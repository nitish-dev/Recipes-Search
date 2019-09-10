import React, {Component} from 'react';
import PropTypes from 'prop-types';
class Search extends Component {
    state = {
        terms:''
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.terms === ''){
            this.props.setAlert('Please enter some recipes',)
        }else{
        this.props.getrecipes(this.state.terms);
        this.setState({terms:''});
        }
    }

    static propTypes ={
        setAlert:PropTypes.func.isRequired,
        getrecipes:PropTypes.func.isRequired
    }
    render(){
        return (
            <div className="container">
             <form onSubmit={this.onSubmit}>
             <div className="form-group row justify-content-center">
             <div className="col-sm-6">
             <input type="text" name="terms" value={this.state.terms} className="form-control"  placeholder="chicken,ots,maggi" onChange={this.onChange} />
             </div>
             <input type="submit" value="Search" className="btn btn-primary" setAlert={this.props.setAlert} getrecipes={this.props.getRecipes} />
                </div>
                
            </form>
            </div>
        )
    }
}

export default Search;