import { useEffect } from "react";
import Nav from "../components/Nav";
import "../utils/style/User.css";
// import { users } from "../services/MockedData";
import { dataAccounts } from "../data/data";
import Account from "../components/Account";

function User() {
    useEffect(() => { document.title = "Argent Bank - Utilisateur" });
    // console.log(users);
    return (
        <div>
            <Nav isSignIn={true} />
            <div className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <button className="edit-button">Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                {dataAccounts.map(dataAccount =>
                    <Account accountTitle={dataAccount.accountTitle} accountAmount={dataAccount.accountAmount} accountAmountDescription={dataAccount.accountAmountDescription} key={dataAccount.id} />
                )}
            </div>
        </div>
    )
}

export default User;