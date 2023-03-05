import classes from "./Formularz.module.css";
import { useRef } from "react";
function Formularz(props) {
  const tytulInputRef = useRef();
  const opisInputRef = useRef();
  const zdjecieInputRef = useRef();
  function addClose() {
    props.onCancel();
  }
  function submitHandler(event) {
    event.preventDefault();
    const tytul = tytulInputRef.current.value;
    const zdjecie = zdjecieInputRef.current.value;
    const opis = opisInputRef.current.value;
    const projektObject = {
      tytul: tytul,
      zdjecie: zdjecie,
      opis: opis,
    };
    console.log(projektObject);
  }
  return (
    <div id={classes.formularz}>
      <form id={classes.formularz} onSubmit={submitHandler}>
        <div className={classes.formItem}>
          <label htmlFor="tytul">Tytuł</label>
          <input type="text" required id="tytul" ref={tytulInputRef} />
        </div>
        <div className={classes.formItem}>
          <label htmlFor="zdjecie">Zdjęcie</label>
          <input type="url" required id="zdjecie" ref={zdjecieInputRef} />
        </div>
        <div className={classes.formItem}>
          <label htmlFor="opis">Opis</label>
          <textarea
            rows="10"
            cols="50"
            id="opis"
            name="opis"
            ref={opisInputRef}
          ></textarea>
        </div>
        <button id={classes.submit}>DODAJ</button>
      </form>
      <button onClick={addClose} id={classes.exit}>
        X
      </button>
    </div>
  );
}

export default Formularz;
