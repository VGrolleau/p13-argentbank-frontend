import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import "../utils/style/User.css";
// import { users } from "../services/MockedData";
import { dataAccounts } from "../data/data";
import Account from "../components/Account";
import { useParams } from "react-router";

function User() {
    useEffect(() => { document.title = "Argent Bank - User" });
    // console.log(users);
    const token = useParams().userToken;

    const [data, setData] = useState(null);
    // const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    };
    fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
        .then(response => response.json())
    /* TODO: FIND WHYTHEN DATA SEND REQUESTS IN CONTINUE */
    // .then((data) => {
    //     setData(data);
    //     console.log(`Status ${data.status} : ${data.message}`, data.body);
    // })
    // .then(async response => {
    //     const isJson = response.headers.get('content-type')?.includes('application/json');
    //     const data = isJson && await response.json();

    //     // check for error response
    //     if (!response.ok) {
    //         // get error message from body or default to response status
    //         const error = (data && data.message) || response.status;
    //         return Promise.reject(error);
    //     }

    //     setData(data);
    //     console.log(`Status ${data.status} : ${data.message}`, data.body);
    // })
    // .catch(error => {
    //     setError(error.toString());
    //     console.error('There was an error!', error);
    // });

    return (
        <div>
            <Nav isLogged={true} />
            <div className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br /><span id="user-name"><span id="user-firstname">Tony</span> <span id="user-lastname">Jarvis</span>!</span></h1>
                    <div>
                        <button className="edit-button" onClick={openEdit}>Edit Name</button>
                        <form className="edit-form">
                            <div id="edit-user-name">
                                <input type="text" id="input-firstname" />
                                <input type="text" id="input-lastname" />
                            </div>
                            <div id="edit-buttons">
                                <input type="submit" value="Save" className="edit-form-button" onClick={editUserName} />
                                <input type="reset" value="Cancel" className="edit-form-button" />
                            </div>
                        </form>
                    </div>
                </div>
                <h2 className="sr-only">Accounts</h2>
                {dataAccounts.map(dataAccount =>
                    <Account
                        accountTitle={dataAccount.accountTitle}
                        accountAmount={dataAccount.accountAmount}
                        accountAmountDescription={dataAccount.accountAmountDescription}
                        key={dataAccount.id}
                    />
                )}
            </div>
        </div>
    )
}

let userName;
let editForm;
let editButton;
let userFirstname;
let userLastname;
let inputFirstname;
let inputLastname;

function openEdit() {
    userName = document.getElementById("user-name");
    userName.style.display = "none";
    editButton = document.querySelector(".edit-button");
    editButton.style.display = "none";

    editForm = document.querySelector(".edit-form");
    editForm.style.display = "block";

    inputFirstname = document.getElementById("input-firstname");
    userFirstname = document.getElementById("user-firstname");
    inputFirstname.value = userFirstname.textContent;

    inputLastname = document.getElementById("input-lastname");
    userLastname = document.getElementById("user-lastname");
    inputLastname.value = userLastname.textContent;
}

function editUserName(e) {
    e.preventDefault();
    userName = document.getElementById("user-name");
    userName.style.display = "initial";
    editButton = document.querySelector(".edit-button");
    editButton.style.display = "initial";

    editForm = document.querySelector(".edit-form");
    editForm.style.display = "none";

    inputFirstname = document.getElementById("input-firstname");
    userFirstname = document.getElementById("user-firstname");
    userFirstname.textContent = inputFirstname.value;

    inputLastname = document.getElementById("input-lastname");
    userLastname = document.getElementById("user-lastname");
    userLastname.textContent = inputLastname.value;

    let navUserFirstname = document.getElementById("nav-user-firstname");
    navUserFirstname.textContent = inputFirstname.value;
}

export default User;