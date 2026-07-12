import { useState } from "react";
import "../css/Details_2.css";
import ImageCapture from "./ImageCapture";
import FingerprintCapture from "../components/FingerprintCapture";
import PropTypes from "prop-types";
import { useTransaction } from '../TransactionContext';

export default function FormPage(props) {
  const [input3, setInput3] = useState("");
  const { input2, setInput2 } = useTransaction();

  const data = [
    {
      id: 1,
      accNo: "000000010903843283",
      name: "TAV KUMAR",
      description: "NIDADAVOLE",
    }
  ];

  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Option1");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ input2, input3 });
  };

  return (
    <div className="transfer-card">
      <form onSubmit={handleSubmit}>
        <div className="form-field-row">
          <label className="colour">Selected Account Number:</label>
          <span>000035813490128</span>
        </div>

        <div className="form-field-row">
          <label className="colour" htmlFor="input2">
            Amount <span className="required">*</span>
          </label>
          <input
            type="text"
            id="input2"
            name="input2"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </div>

        <div className="form-field-row">
          <label className="colour" htmlFor="input3">
            Purpose <span className="required">*</span>
          </label>
          <input
            type="text"
            id="input3"
            name="input3"
            value={input3}
            onChange={(e) => setInput3(e.target.value)}
          />
        </div>

        <span className="section-label">Select the Beneficiary account</span>
        <table>
          <thead>
            <tr>
              <th>Account No.</th>
              <th>Beneficiary Name</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className={selectedRow === row.id ? "highlighted" : ""}>
                <td>
                  <label>
                    <input
                      type="radio"
                      name="rowSelection"
                      onChange={() => setSelectedRow(row.id)}
                    />
                    {row.accNo}
                  </label>
                </td>
                <td>{row.name}</td>
                <td>{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="form-field-row">
          <span className="colour">Selected Account Number:</span>
          {selectedRow !== null && <span>{data[selectedRow - 1].accNo}</span>}
        </div>

        <span className="section-label">Select Payment Option</span>
        <div className="radio-button-group">
          <label className="colour">
            Payment Option <span className="required">*</span>
          </label>
          <label>
            <input
              type="radio"
              value="Option1"
              checked={selectedOption === "Option1"}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            Pay Now
          </label>
          <label>
            <input
              type="radio"
              value="Option2"
              checked={selectedOption === "Option2"}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            Schedule Later
          </label>
          <label>
            <input
              type="radio"
              value="Option3"
              checked={selectedOption === "Option3"}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            Standing Instruction
          </label>
        </div>

        <span className="section-label">Capture Image</span>
        <ImageCapture />

        <span className="section-label">Capture Finger Print</span>
        <FingerprintCapture />

        <div className="form-actions">
          <button className="btn-mashreq" type="submit" onClick={props.switchToCard2}>
            Submit
          </button>
          <button className="btn-mashreq-outline" type="submit">
            Cancel
          </button>
        </div>
      </form>

      <div id="popup" className="popup">
        <div className="popup-content">
          <div className="progress-bar">
            <div id="progress" className="progress" />
          </div>
          <p id="message">Transaction in progress...</p>
        </div>
      </div>
    </div>
  );
}

FormPage.propTypes = {
  switchToCard2: PropTypes.func.isRequired,
};
