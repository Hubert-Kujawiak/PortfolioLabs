import React from "react";
import ConstantHeader from "./ConstantHeader";
import decoration from "../assets/Decoration.svg"
import {Link} from "react-router-dom";

export default function RegisterPage() {

    return(
        <>
            <ConstantHeader/>
            <div className="registerForm">
                <h1>Załóż konto</h1>
                <img src={decoration} alt="decoration"/>
                <form>
                    <label>Email<br/>
                        <input type="text"/><br/>
                    </label>
                    <label>Hasło<br/>
                        <input type="password"/><br/>
                    </label>
                    <label>Powtórz hasło<br/>
                        <input type="password"/><br/>
                    </label>
                    <Link to="/login">Zaloguj</Link>
                    <button type="submit">Załóż konto</button>
                </form>
            </div>
        </>
    )
}