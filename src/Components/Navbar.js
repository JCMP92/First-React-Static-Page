import logo from '../images/reactjs-icon.png';
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="react-logo" className="react-logo" />
        <h3>ReactFacts</h3>
      </div>
      <div className="nav-text-2">
        <h4>React Course - Project 1</h4>
      </div>
    </nav>
  );
}
