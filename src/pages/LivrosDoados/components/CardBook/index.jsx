import * as s from "./cardBook.module.scss";

export default function CardBook({ img, alt, title, author, category }) {
  return (
    <div className={s.CardBook}>
      <img src={img} alt={alt} />
      <div className={s.cardFooter}>
        <h4>{title}</h4>
        <p className={s.author}>{author}</p>
        <p className={s.category}>{category}</p>
      </div>
    </div>
  );
}
