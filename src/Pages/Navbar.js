import React from 'react'
import { Navbar } from 'react-bootstrap';
import { useNavigate, NavLink } from "react-router-dom";
function NavBar() {
    const navigate = useNavigate();

    return (
        <div>
            <div class="navbarContainer" >
                {/* <h1> {'<Chirayu Batra/>'}</h1> */}
                <h1> {'<Chirayu Batra/>'}</h1>

                <div class="sideBarTitles">
                    <div class='indiviadualTitle'>
                        <h3 class='individualText' onClick={()=> {navigate("/");}}>{'< Home />'}</h3>
                    </div>
                    <div class='indiviadualTitle'>
                        <h3 class='individualText' onClick={()=> {navigate("/about");}}>{'< About />'}</h3>
                    </div>
                    <div class='indiviadualTitle'>
                        <h3 class='individualText'>{'< Contact />'}</h3>
                    </div>
                    <div class='indiviadualTitle'>
                        <h3 class='individualText' onClick={()=> {navigate("/skills");}}>{'< Skills />'}</h3>
                    </div>
                    <div class='indiviadualTitle'>
                        <h3 class='individualText' onClick={()=> {navigate("/resume");}}>{'< Resume />'}</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NavBar
