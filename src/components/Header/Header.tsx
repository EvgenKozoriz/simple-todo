import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h2>Simple TODO</h2>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">All Tasks</Link>
          </li>
          <li>
            <Link to="/active">Active Tasks</Link>
          </li>
          <li>
            <Link to="/completed">Completed Tasks</Link>
          </li>
          <li>
            <Link to="/deleted">Deleted Tasks</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
