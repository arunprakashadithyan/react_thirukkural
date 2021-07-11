import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {

    const [classname, setClassname] = useState('collapse')

    const toggleCollapse = () => classname ? setClassname('') : setClassname('collapse')

    return (
        <div style={{ backgroundColor: 'rgba(82,111,142,0.25)' }} className='navbar navbar-expand-md navbar-light sticky-top'>
            <div className='container'>
                <h5 className="my-0 mr-md-auto font-weight-normal"><p style={{ fontSize: '2em', fontWeight: 'bold' }}>திருக்குறள்</p></h5>
                <nav className="my-2 my-md-0 mr-md-3 ">
                    <button onClick={() => toggleCollapse()} type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${classname} navbar-collapse`} id="navbarCollapse">
                        <div className="navbar-nav">
                            <a className="p-2 nav-link" href="/"><strong>முகப்பு</strong></a>
                            <a className="p-2 nav-link" href="/chapters"><strong>அதிகாரங்கள்</strong></a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;