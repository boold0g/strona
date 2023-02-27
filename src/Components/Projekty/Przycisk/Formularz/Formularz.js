import classes from "./Formularz.module.css";
function Formularz(props) {
  function addClose() {
    props.onCancel();
  }
  return (
    <div id={classes.formularz}>
      <button onClick={addClose} id={classes.exit}>
        X
      </button>
    </div>
  );
}

export default Formularz;
