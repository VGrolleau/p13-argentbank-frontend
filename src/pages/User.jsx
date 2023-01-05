import { useEffect } from "react";
import Nav from "../components/Nav";
import "../utils/style/User.css";
// import { users } from "../services/MockedData";
import { dataAccounts } from "../data/data";
import Account from "../components/Account";

function User() {
    useEffect(() => { document.title = "Argent Bank - Utilisateur" })
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

                {/* <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section> */}
            </div>
        </div>
    )
}

export default User;