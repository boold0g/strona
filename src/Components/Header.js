import Nav from "./Nav";
import classes from "./Header.module.css";
function Header() {
  return (
    <div className={classes.header}>
      <Nav text="Strona Główna" link="/" />
      <Nav text="Galeria" link="/galeria" />
      <Nav text="Projekty" link="/projekty" />
      <Nav text="Kontakt" link="/kontakt" />
    </div>
  );
}

export default Header;
