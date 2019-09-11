import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
const Items = ({item}) => {
    return (
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                    <div className="card">
                    <img src={item.image_url} className="img-card-top" alt="" style={{height:"14rem"}} />
                    <div className="card-body text-capitalize">
                            <h6>{item.title}</h6>
                            <h6 className="text-warning text-slanted">
                             <strong style={{color:'#000'}}>provided by:</strong> {item.publisher}
                             </h6>
                        </div>
                        <div className="card-footer">
                            <Link to={`/view/${item.recipe_id}`} className="btn btn-primary text-capitalize">details</Link>
                            <a href={item.source_url} className="btn btn-success mx-2" target="_blank" rel="noopener noreferrer">Recipe url</a>
                        </div>
                    </div>
                    </div>
    )
}
Items.propTypes = {
    item:PropTypes.object.isRequired
}
export default Items;