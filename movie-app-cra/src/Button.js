
import styles from "./Button.module.css";

function Button({text,banana}){
    return(
        <div className={styles.container}>
            <button  className={styles.btn}>{text}</button>
            <button  className={styles.btn}>{banana}</button>
        </div>

    );
}


export default Button;