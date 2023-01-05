import "../utils/style/Account.css";
import { PropTypes } from 'prop-types';

function Account(props) {
    const ACCOUNT_TITLE = props.accountTitle;
    const ACCOUNT_AMOUNT = props.accountAmount;
    const ACCOUNT_AMOUNT_DESCRIPTION = props.accountAmountDescription;
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank {ACCOUNT_TITLE}</h3>
                <p className="account-amount">${ACCOUNT_AMOUNT}</p>
                <p className="account-amount-description">{ACCOUNT_AMOUNT_DESCRIPTION} Balance</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    )
}

Account.propTypes = {
    accountTitle: PropTypes.string,
    accountAmount: PropTypes.number,
    accountAmountDescription: PropTypes.string
}

export default Account;