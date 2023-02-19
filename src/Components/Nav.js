import { Link } from "react-router-dom";
import classes from "./Nav.module.css";
function Nav(props) {
  return (
    <Link className={classes.nav} to={props.link}>
      <div>{props.text}</div>
    </Link>
  );
}

export default Nav;
