import s from "./container.module.scss";

export default function Container({ backgroundColor, children }) {
  return (
    <div style={{ backgroundColor }} className={s.container}>
      {children}
    </div>
  );
}
