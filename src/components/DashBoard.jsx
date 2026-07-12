import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import '../css/DashBoard.css';
import DateTimeDisplay from "../pages/DateTimeDisplay";
import Sidebar from '../pages/Sidebar';
import MainContent from "../pages/MainContent";
import Details_1 from "../pages/Details_1";
import Details_2 from "../pages/Details_2";
import AssetsChart from "./AssetsChart";
import BrandLogo from './BrandLogo';
import { ACCOUNT } from '../constants/account';
import profile from '../assets/profile.svg';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const TOP_NAV = [
  'My Accounts & Profile',
  'Payments / Transfers',
  'Bill Payments',
  'Deposit & Investment',
  'e-Tax',
  'Services',
  'Request & Enquiries',
];

function DashBoard() {
  const options = [
    { logo: AccountBalanceOutlinedIcon, name: 'Summary', component: <Details_1/> },
    { logo: PaymentOutlinedIcon, name: 'Transfers', component: <Details_2/> },
    { logo: Person2OutlinedIcon, name: 'profile', component: null },
    { logo: BookmarkAddedOutlinedIcon, name: 'حدد الجزء الخاص بك', component: null },
    { logo: DescriptionOutlinedIcon, name: 'e-Statement', component: null },
    { logo: SupportAgentOutlinedIcon, name: 'e-Services', component: null },
    { logo: AddCardOutlinedIcon, name: 'cards', component: null },
    { logo: SecurityOutlinedIcon, name: 'Security', component: null },
    { logo: SettingsOutlinedIcon, name: 'Settings', component: null },
  ];

  const [selectedItem, setSelectedItem] = useState(options[0]);
  const [activeNav, setActiveNav] = useState(0);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar-col">
        <div className="sidebar-brand">
          <BrandLogo variant="light" />
        </div>
        <Sidebar options={options} onItemClick={handleItemClick} selectedItem={selectedItem} />
      </aside>

      <div className="dashboard-main">
        <nav className="dashboard-top-nav">
          {TOP_NAV.map((item, index) => (
            <div
              key={item}
              className={`nav-item ${activeNav === index ? 'active' : ''}`}
              onClick={() => setActiveNav(index)}
            >
              {item}
            </div>
          ))}
        </nav>

        <div className="dashboard-content">
          <div className="login-info-bar">
            <AccessTimeOutlinedIcon fontSize="small" />
            <span>Your Last Login: <DateTimeDisplay /></span>
          </div>

          <div className="dashboard-hero">
            <h1 className="dashboard-hero-title">Dashboard</h1>
            <div className="dashboard-hero-chart">
              <AssetsChart />
            </div>
            <div className="dashboard-hero-profile">
              <div>
                <em>Account Type: {ACCOUNT.accountType}<br />{ACCOUNT.holderName}</em>
              </div>
              <img src={profile} alt="Profile" />
            </div>
          </div>

          <div className="action-bar">
            <button type="button" className="quick-links-btn btn-mashreq">
              Quick links <i className="bi bi-chevron-right"></i>
            </button>
            <div className="breadcrumb-bar">
              You are here: / <strong>My Accounts & Profile</strong> / <MainContent selectedItem={selectedItem} />
            </div>
          </div>

          <div className="content-panel">
            {selectedItem && selectedItem.component}
            <div className="note-box">
              <p>
                <span className="required">*</span> If you have any hidden accounts, please unhide through the tab Profile &gt; Manage A/c Display &gt; UnHide Accounts or UnHide Debit Accounts.
              </p>
              <p>
                <span className="required">*</span> Capital Gains Plus Account can be viewed under Deposit Accounts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
