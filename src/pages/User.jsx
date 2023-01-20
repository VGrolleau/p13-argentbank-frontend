import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import "../utils/style/User.css";
import { dataAccounts } from "../data/data";
import Account from "../components/Account";
import { getUserProfile } from "../services/APIService";
import EditUsername from "../components/EditUsername";
// import { useParams } from "react-router";

function User() {
    useEffect(() => { document.title = "Argent Bank - User" });
    const token = localStorage.getItem("userToken");

    // const [data, setData] = useState(null);
    // const [token, setToken] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    useEffect(() => {
        const getData = async () => {
            try {
                let actualData = await getUserProfile(token);

                // check for error response
                if (!actualData.body) {
                    // get error message from body or default to response status
                    const error = (actualData && actualData.message) || actualData.status;
                    return Promise.reject(error);
                }
                // setData(actualData);
                setFirstName(actualData.body.firstName);
                setLastName(actualData.body.lastName);
                console.log(`Status ${actualData.status} : ${actualData.message}`, actualData.body);
            } catch (error) {
                // setError(error.toString());
                console.error('There was an error!', error);
            }
        }
        getData();
    }, [token]);

    let navUserFirstname = document.getElementById("nav-user-firstname");

    if (firstName) {
        navUserFirstname.textContent = firstName;
    }

    return (
        <div>
            <Nav isLogged={true} />`
            <div className="main bg-dark">
                {/* TODO: Redecouper header en composant */}
                <div className="header">
                    <h1>Welcome back</h1>
                    <EditUsername navUserFirstname={navUserFirstname} firstName={firstName} lastName={lastName} token={token} />
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

export default User;