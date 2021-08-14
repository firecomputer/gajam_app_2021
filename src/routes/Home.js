import React from "react";
import { AuthService } from "fbInstance";

const onLogOut = () => {
    AuthService.signOut();
}

const Home = () => {
    return <><button onClick={onLogOut} class="btn btn-danger my-2 my-sm-0">Log Out</button></>;
};
export default Home;