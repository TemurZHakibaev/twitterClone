import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const navigate = useNavigate();
    const token = false;
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const handleRegister = (e) => {
        e.preventDefault();
        axios
            .post("https://reqres.in/api/register", data)
            .then((response) => {
                var token = response.data.token;
                console.log("Token:", token);
                localStorage.setItem("token", token);
                if (token.length >= 0) {
                    navigate("/");
                }
            })
            .catch((error) => console.error(error));
    };

    return (
        <div>
            <h2>Register Page</h2>
            <form onSubmit={handleRegister}>
                <label>email</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Auth;
