import { NavLink } from 'react-router-dom';

export default function TopBar() {
  return (
    <div className="top-bar">
      <span>For healthcare professional use only</span>
      <div className="top-bar-right">
        <a href="#">EN</a>
        <a href="#">BN</a>
        <NavLink to="/hcp" className="for-docs-btn">
          For Doctors
        </NavLink>
      </div>
    </div>
  );
}
