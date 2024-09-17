import React, {useState} from 'react'
import { Navbar } from 'react-bootstrap';
import { useNavigate, NavLink } from "react-router-dom";
function NavBar() {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div>
            <div class="navbarContainer" >
                {/* <h1> {'<Chirayu Batra/>'}</h1> */}
                <h1> {'<Chirayu Batra/>'}</h1>

                <div class="sideBarTitles">
                    <div class='indiviadualTitle'>
                        <h3 class='individualText' onClick={()=> {navigate("/");}}>{'< Home />'}</h3>
                    </div>
                   
                    <div class='indiviadualTitle'
                     onMouseEnter={() => setShowDropdown(true)} 
                     onMouseLeave={() => setShowDropdown(false)}
                    >
                        <h3 class='individualText'  onClick={()=> {navigate("/projects");}}>{'< Projects />'}</h3>
                        {/* {showDropdown && (
                            <div className="dropdownProjects" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                                <h4 onClick={() => navigate("/projects/advance")}>{'Major'}</h4>
                                <h4 onClick={() => navigate("/projects/intermediate")}>{'Intermediate'}</h4>
                                <h4 onClick={() => navigate("/projects/basic")}>{'Basic'}</h4>
                            </div>
                        )} */}
                    </div>
                    <div class='indiviadualTitle'>
                        <h3 class='individualText' onClick={()=> {navigate("/skills");}}>{'< Skills />'}</h3>
                    </div>
                    <div class='indiviadualTitle'>
                        <h3 class='individualText' onClick={()=> {navigate("/resume");}}>{'< Resume />'}</h3>
                    </div>
                    <div class='indiviadualTitle'>
                        <h3 class='individualText' onClick={()=> {navigate("/experience");}}>{'< Experience />'}</h3>
                    </div>
                    <div class='indiviadualTitle'>
                        <h3 class='individualText' onClick={()=> {navigate("/about");}}>{'< About />'}</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NavBar
