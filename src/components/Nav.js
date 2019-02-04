import React , {Component} from 'react';
import {Link} from 'react-router-dom'

class Nav extends Component{
    render(){
        return(
            <div>
                <ul>
                    <Link to="/">home</Link>
                    <Link to="/profile">profile</Link>
                    <Link to="/about">about</Link>
                </ul>
            </div>
        )
    }
}

export default Nav ; 