import classes from "./Przycisk.module.css";
import { useState } from "react";
import Tlo from "../Tlo/Tlo";
import Formularz from "./Formularz/Formularz";
function Przycisk() {
  const [addIsOpen, setAddIsOpen] = useState(false);

  function Dodawanie() {
    setAddIsOpen(true);
  }
  function Zamknij() {
    setAddIsOpen(false);
  }
  return (
    <div>
      <button onClick={Dodawanie} id={classes.przycisk}>
        +
      </button>
      {addIsOpen && <Tlo onCancel={Zamknij} />}
      {addIsOpen && <Formularz onCancel={Zamknij} />}
    </div>
  );
}

export default Przycisk;
