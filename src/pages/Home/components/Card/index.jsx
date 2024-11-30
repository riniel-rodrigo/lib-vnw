import s from "./card.module.scss";

export default function Card({ img, desc, alt }) {
  return (
    <div className={s.card}>
      <img src={img} alt={alt} />
      <p>{desc}</p>
    </div>
  );
}
