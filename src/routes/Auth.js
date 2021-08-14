import React from "react";
import { AuthService, fbInstance } from "fbInstance";

const onSocialClick = async (event) => {
    const {target:{name}} = event;
    let provider;
    if(name === "google") {
        provider = new fbInstance.auth.GoogleAuthProvider();
    } else if(name === "github") {
        provider = new fbInstance.auth.GithubAuthProvider();
    }
    const data = await AuthService.signInWithPopup(provider);
    console.log(data);
}
const Auth = () =>
    <>
    <button class="form-control btn btn-primary" onClick={onSocialClick} name="google">Google</button>
    <button class="btn btn-success" onClick={onSocialClick} name="github">Github</button>
    </>;
export default Auth;