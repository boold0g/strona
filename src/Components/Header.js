import Nav from "./Nav";
function Header() {
  return (
    <div id="header">
      <Nav text="Strona Główna" />
      <Nav text="Galeria" />
      <Nav text="Projekty" />
      <Nav text="Kontakt" />
    </div>
  );
}

export default Header;
