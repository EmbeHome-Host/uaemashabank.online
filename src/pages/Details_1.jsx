import { useState } from 'react';
import '../css/Details_1.css';
import { ACCOUNT, BALANCE_DISPLAY } from '../constants/account';

const Details_1 = () => {
  const [showBalance, setShowBalance] = useState(false);

  return (
    <div className="horizontal-card card-mashreq">
      <div className="card-header">
        <h4 className="heading">Transaction Accounts</h4>
      </div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th>Account No. / Name</th>
              <th>Branch</th>
              <th>Available Balance</th>
              <th>Transactions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{ACCOUNT.accountNumber}</td>
              <td>{ACCOUNT.branch}</td>
              <td>
                {showBalance ? (
                  <div className="balance-amounts">
                    <span className="balance-amount">{BALANCE_DISPLAY.inr}</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="btn-link-mashreq"
                    onClick={() => setShowBalance(true)}
                  >
                    Click here for balance
                  </button>
                )}
              </td>
              <td><a href="#">Click here for last 10 transactions</a></td>
            </tr>
            <tr>
              <td colSpan="4">
                <a href="#">View Nomination and PAN Details</a>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="centered-link">
          <a href="#">ViewallBalances</a>
        </div>
      </div>
    </div>
  );
};

export default Details_1;
