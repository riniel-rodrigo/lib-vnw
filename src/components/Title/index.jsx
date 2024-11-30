import s from "./title.module.scss";

export default function index({ text, size }) {
  return (
    <>
      <h2 className={s.title} style={{ fontSize: size }}>
        {text}
      </h2>
    </>
  );
}
