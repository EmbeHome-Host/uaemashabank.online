import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "firebaseui/dist/firebaseui.css";
import "./css/theme.css";
import "bootstrap/dist/js/bootstrap.js";
import { TransactionProvider } from "./TransactionContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TransactionProvider>
    <App />
  </TransactionProvider>
);
