import styles from "./GateCard.module.scss";
import speaker from "../assets/speaker.svg";
import Colors from "../constants/Colors";

function GateCard() {
  return (
    <div className={styles.earphone}>
      <img className={styles.earphone__img} src={speaker} alt="speaker" />
      <div className={styles.earphone__price}>$100</div>
      <div className={styles.earphone__title}>Zebronics head phone</div>
      <div className={styles.earphone__descr}>
        A portable headphone with a battery life of 20 hours and IP67 rating.
        Comes with a 3 years warranty.
      </div>
      <div className={styles.earphone__choose}>Choose your colour</div>
      <Colors />
      <button className={styles.add__btn}>Add to cart</button>
      <button className={styles.buy__btn}>Buy now</button>
      <a className={styles.earphone__link} href="#">
        Read reviews
      </a>
    </div>
  );
}

export default GateCard;
