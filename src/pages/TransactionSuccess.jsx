import { BiCheckShield } from "react-icons/bi";
import { useTransaction } from '../TransactionContext';
import '../css/TransactionSuccess.css';

export default function TransactionSuccess() {
  const { input2 } = useTransaction();

  return (
    <>
      <div className="success-card">
        <div className="success-card-header">
          <BiCheckShield />
          Debit Transaction Status: Completed Successfully
        </div>
        <div className="success-card-body">
          <div className="section-title">Detail Account Details</div>
          <table>
            <thead>
              <tr>
                <th>Account No.</th>
                <th>Account Type</th>
                <th>Branch</th>
                <th>Amount</th>
                <th>Transaction Type</th>
                <th>UTR Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>00000007415085239</td>
                <td>Savings Account</td>
                <td>NIDADAVOLE</td>
                <td>{input2}</td>
                <td>NEFT</td>
                <td>AKA42897630178</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="success-card">
        <div className="success-card-header">
          <BiCheckShield />
          Credit Account Details
        </div>
        <div className="success-card-body">
          <table>
            <thead>
              <tr>
                <th>Account No.</th>
                <th>Beneficiary Name</th>
                <th>Amount</th>
                <th>Branch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>000000010903843283</td>
                <td>TAV KUMAR</td>
                <td>{input2}</td>
                <td>NIDADAVOLE</td>
              </tr>
            </tbody>
          </table>
          <div className="print-actions">
            <button className="success-print-btn" type="button">Print</button>
          </div>
        </div>
      </div>
    </>
  );
}
