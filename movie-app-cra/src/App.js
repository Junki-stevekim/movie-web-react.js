import Button from "./Button";
import styles from "./Button.module.css";

function App() {
  return (
    <div className={styles.container}>
    <h1>Welcome back!</h1>
    <Button text={"Continue"} /> 
    <Button banana={"Save me!"} />
    </div>
  );
}

export default App;
