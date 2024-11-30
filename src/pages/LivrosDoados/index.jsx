import { useState } from "react";

import Container from "../../components/container";
import Title from "../../components/Title";
import CardBook from "./components/CardBook";
import { mockBooks } from "../../mocks/mockBooks";

import * as s from "./booksDonated.module.scss";

export default function LivrosDoados() {
  const [data] = useState(mockBooks);

  return (
    <Container>
      <section className={s.ContainerBooks}>
        <Title text="Livros doados" size={25} />
        <div className={s.BooksList}>
          {data.map((item) => (
            <CardBook
              key={item.id}
              img={item.img}
              title={item.title}
              author={item.author}
              category={item.category}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}
