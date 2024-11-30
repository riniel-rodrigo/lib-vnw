import Container from "../../components/container";
import Form from "./components/Form";

import * as s from "./donate.module.scss";

export default function QueroDoar() {
  return (
    <section className={s.ContainerDonate}>
      <p>Preencha o formulário abaixo com as informações do Livro</p>

      <Container>
        <Form />
      </Container>
    </section>
  );
}
