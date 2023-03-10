import { useEffect } from "react";
import "../utils/style/User.css";
import { dataAccounts } from "../data/data";
import Account from "../components/Account";
import { getUserProfile } from "../services/APIService";
import EditUsername from "../components/EditUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux";

function User() {
    useEffect(() => { document.title = "Argent Bank - User" });

    const selectorToken = useSelector((state) => state.user.token);
    let token;
    localStorage.getItem("userToken") ? token = getToken(localStorage.getItem("userToken")) : token = getToken(selectorToken);

    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async () => {
            try {
                let actualData = await getUserProfile(token);

                // check for error response
                if (!actualData.body) {
                    // get error message from body or default to response status
                    const error = (actualData && actualData.message) || actualData.status;
                    return Promise.reject(error);
                };

                dispatch(getUser({ firstName: actualData.body.firstName, lastName: actualData.body.lastName }));
            } catch (error) {
                console.error('There was an error!', error);
            }
        }
        getData();
    }, [token, dispatch]);

    const firstName = useSelector((state) => state.user.firstName);
    const lastName = useSelector((state) => state.user.lastName);
    if (localStorage.getItem("userToken")) {
        localStorage.setItem("userFirstname", firstName);
    }

    let navUserFirstname = document.getElementById("nav-user-firstname");

    if (firstName) {
        navUserFirstname.textContent = firstName;
    }

    return (
        <div>
            <div className="main bg-dark">
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

function getToken(token) {
    let userToken = token;
    return userToken;
}

export default User;