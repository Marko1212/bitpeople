import React from 'react';


const Header = (props) => {

    return (


        <nav>
            <div className="nav-wrapper">

                <a href="#!" className="brand-logo">BIT PEOPLE</a>
                <ul className="right hide-on-med-and-down">
                    <li><a><i className="material-icons">search</i></a></li>
                    <li><a><i className="material-icons" onClick={props.changeLayout}>view_module</i></a></li>
                    < li > <a ><i className="material-icons">refresh</i></a></li>
                    <li><a><i className="material-icons">more_vert</i></a></li>
                </ul>
            </div>
        </nav >

    )

}

export default Header