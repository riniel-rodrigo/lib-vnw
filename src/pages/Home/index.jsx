import { useState } from "react";

import Container from "../../components/container";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Title from "../../components/Title";
import { mockNotes } from "../../mocks/mockNotes";

import s from "./home.module.scss";

export default function Home() {
  const [data, setData] = useState(mockNotes);

  return (
    <main>
      <Hero />
      <Container>
        <section className={s.containerHome}>
          <Title text="Por que doar livros?" />

          <div className={s.cards}>
            {data.map((item) => (
              <Card
                key={item.id}
                img={item.img}
                desc={item.desc}
                alt={item.alt}
              />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
