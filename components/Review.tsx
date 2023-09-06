import StarRating from "./StarRating";
import classNames from "classnames";
import styles from "@/styles/components/Review.module.scss";

interface ReviewProps {
  title: string;
  img: string;
  msg: string;
  rating: number;
}

function Review({ title, img, msg, rating }: ReviewProps) {
  return (
    <div className={styles.review}>
      <i
        className={classNames("fas", "fa-quote-right", styles.review__quote)}
      />
      <div className={styles.review__user}>
        <img className={styles.review__img} src={img} alt={title} />
        <h3 className={styles.review__title}>{title}</h3>
        <StarRating value={rating} />
      </div>
      <p className={styles.review__description}>{msg}</p>
    </div>
  );
}

export default Review;
