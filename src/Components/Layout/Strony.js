import classes from "./Strony.module.css";
import { Link } from "react-router-dom";

function Strony() {
  return (
    <div className={classes.header}>
      <Link className={classes.nav} to="/">
        <div>Strona Główna</div>
      </Link>
      <Link className={classes.nav} to="/galeria">
        <div>Galeria</div>
      </Link>
      <Link className={classes.nav} to="/projekty">
        <div>Projekty</div>
      </Link>
      <Link className={classes.nav} to="/kontakt">
        <div>Kontakt</div>
      </Link>
    </div>
  );
}


export default Strony;
