import React from 'react'
import reactImg from '../assets/img/react.png'

const Header = () => {
    return(
        <div class="container">
            <div id="site-header" class="col-sm-6 mx-auto site-header">
            <img alt="react" src={reactImg}></img><h1>AG React work</h1>
            </div>
        </div>
        )
    }
    
    export default Header