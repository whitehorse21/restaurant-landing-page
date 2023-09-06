import Stars from "./StarRating";
import classNames from "classnames";
import styles from "@/styles/components/Dish.module.scss";

interface DishProps {
  title: string;
  img: string;
  rating: number;
  detailed: boolean;
  favorited: boolean;
  price: number;
  description?: string;
}
function Dish({
  title,
  img,
  rating,
  price,
  description,
  favorited,
  detailed,
}: DishProps) {
  return (
    <div className={styles.dish}>
      {favorited ? (
        <a
          href="#"
          className={classNames("fas", "fa-heart", styles.dish__favorite)}
        ></a>
      ) : null}
      {detailed ? (
        <a
          href="#"
          className={classNames("fas", "fa-eye", styles.dish__detail)}
        ></a>
      ) : null}
      <img className={styles.dish__image} src={img} alt={title} />
      <h3 className={styles.dish__title}>{title}</h3>
      {description ? (
        <p className={styles.dish__description}>{description}</p>
      ) : null}
      <Stars value={rating} />
      <span className={styles.dish__price}>{`$${price}`}</span>
      <a href="#" className="button">
        add to cart
      </a>
    </div>
  );
}

export default Dish;
