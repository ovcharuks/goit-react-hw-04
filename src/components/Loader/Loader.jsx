import styles from './Loader.module.css'
import {Bars} from "react-loader-spinner";

const Loader = () => {

    return (
       <div className={styles.spinner}>
        <p>Завантажується</p>
        <Bars />
        </div>
      );

}


export default Loader;