import "./style.scss";
import { Link } from "react-router-dom";

const Header:React.FC = () => (
  <header className="header">
    <div className="container">
      <div className="header__container">
        <h1>
          <Link to={`/`} className="main__title">Product list Page</Link>
        </h1>
      </div>
    </div>
  </header>
);

export default Header;
