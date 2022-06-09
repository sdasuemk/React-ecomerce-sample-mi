
import "../styles/Navbar.css";
import React from "react";
import search from "../icons/search.png"
import sampleResponse from "../data/data.json";
import {Link} from "react-router-dom";


const logo = sampleResponse.logo;


const Navbar = () => {
    return(
       
        <div className="nav">
          
            <div className="logo">
               {/*  <Link to='/'>
                    <img src={logo} alt="Logo" id="logoImage" />
                </Link>
            </div>
            <div>
                <Link  className="navlinks" to="/#miphones">Mi Phones</Link>
                <Link   className="navlinks"  to="/#redmiphones">Redmi Phones</Link>
                <Link   className="navlinks" to="/#tv">TV</Link>
                <Link   className="navlinks" to="/#laptops">Laptops</Link>
                <Link   className="navlinks" to="/#lifestyle">Fitness & Lifestyle</Link>
                <Link  className="navlinks" to="/#home">Home</Link>
                <Link   className="navlinks" to="/#audio">Radio</Link>
                <Link   className="navlinks" to="/#accessories">Accessories</Link> */}

                <a href='/'>
                    <img src={logo} alt="Logo" id="logoImage" />
                </a>
            </div>
            <div>
                <a  className="navlinks" href="/#miphones">Mi Phones</a>
                <a   className="navlinks"  href="/#redmiphones">Redmi Phones</a>
                <a   className="navlinks" href="/#tv">TV</a>
                <a   className="navlinks" href="/#laptops">Laptops</a>
                <a   className="navlinks" href="/#lifestyle">Fitness & Lifestyle</a>
                <a  className="navlinks" href="/#home">Home</a>
                <a   className="navlinks" href="/#audio">Radio</a>
                <a   className="navlinks" href="/#accessories">Accessories</a>

            </div> 
            <div className="searchbox">
                <input type="search" name="search" id="" placeholder="Search Products" />
                <img src={search} alt="" srcset="" id="searchIcons"/>
            </div>


        </div>
       
    )
};
export default Navbar;