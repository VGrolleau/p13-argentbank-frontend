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
    // const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        };
        // fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
        fetch('http://192.168.1.12:3001/api/v1/user/profile', requestOptions)
            .then(response => response.json())
            .then((data) => {
                setData(data);
                setFirstName(data.body.firstName);
                setLastName(data.body.lastName);
                console.log(`Status ${data.status} : ${data.message}`, data.body);
            })
            .catch(error => {
                setError(error.toString());
                console.error('There was an error!', error);
            })
    }, [token]);

    let userName = document.getElementById("user-name");
    let editButton = document.querySelector(".edit-button");
    let editForm = document.querySelector(".edit-form");
    let userFirstname = document.getElementById("user-firstname");
    let userLastname = document.getElementById("user-lastname");
    let inputFirstname = document.getElementById("input-firstname");
    let inputLastname = document.getElementById("input-lastname");
    let navUserFirstname = document.getElementById("nav-user-firstname");

    if (data) {
        navUserFirstname.textContent = firstName;
    }

    return (
        <div>
            <Nav isLogged={true} />
            <div className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br /><span id="user-name"><span id="user-firstname">{firstName}</span> <span id="user-lastname">{lastName}</span>!</span></h1>
                    <div>
                        <button className="edit-button" onClick={() => openEdit(userName, editButton, editForm, inputFirstname, userFirstname, inputLastname, userLastname)}>Edit Name</button>
                        <form className="edit-form">
                            <div id="edit-user-name">
                                <input type="text" id="input-firstname" />
                                <input type="text" id="input-lastname" />
                            </div>
                            <div id="edit-buttons">
                                <input type="submit" value="Save" className="edit-form-button" onClick={(e) => editUserName(userName, editButton, editForm, inputFirstname, userFirstname, inputLastname, userLastname, navUserFirstname, e)} />
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

function openEdit(userName, editButton, editForm, inputFirstname, userFirstname, inputLastname, userLastname) {
    userName.style.display = "none";
    editButton.style.display = "none";
    editForm.style.display = "block";

    inputFirstname.value = userFirstname.textContent;
    inputLastname.value = userLastname.textContent;
}

function editUserName(userName, editButton, editForm, inputFirstname, userFirstname, inputLastname, userLastname, navUserFirstname, e) {
    e.preventDefault();

    userName.style.display = "initial";
    editButton.style.display = "initial";
    editForm.style.display = "none";

    userFirstname.textContent = inputFirstname.value;
    userLastname.textContent = inputLastname.value;
    navUserFirstname.textContent = inputFirstname.value;
}

export default User;