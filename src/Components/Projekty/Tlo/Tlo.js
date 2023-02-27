import classes from "./Tlo.module.css";
function Tlo(props) {
  return <div id={classes.tlo} onClick={props.onCancel}></div>;
}

export default Tlo;
