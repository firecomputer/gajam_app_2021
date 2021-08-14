import React from "react";
import AppRouter from "./Router";
import logo_image from "./gajam_profile.jpg";

const Navigation = ({isLoggedIn}) => (
    <nav class="navbar navbar-white">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#"><img src={logo_image} alt="게잼로고" width="40px"></img></a>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li><a href="#">메인</a></li>
            </ul>
            <form class="navbar-form form-inline my-2 my-lg-0 navbar-right">
                <AppRouter isLoggedIn={isLoggedIn} />
            </form>
            <form class="navbar-form navbar-left" role="search">
                <div class="form-group">
                <input type="text" class="form-control" placeholder="Search"></input>
                </div>
                <button type="submit" class="btn btn-default">non</button>
            </form>
        </div>
        </div>
    </nav>
);

export default Navigation;