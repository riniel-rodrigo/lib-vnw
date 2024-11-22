import Container from "../../components/container";
import Hero from "./components/Hero";
import Card from "./components/Card";
import card1 from "../../assets/card1.svg";
import card2 from "../../assets/card2.svg";
import card3 from "../../assets/card3.svg";
import card4 from "../../assets/card4.svg";
4;

import s from "./home.module.scss";

export default function Home() {
    return (
        <main>
            <Hero />

            <Container>
                <section className={s.containerHome}>
                    <h2>Por que devo doar?</h2>

                    <div className={s.cards}>
                        <Card
                            img={card1}
                            desc="Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social."
                            alt="Grupo de pessoas em círculo, representando comunidade e equipe."
                        />
                        <Card
                            img={card2}
                            desc="Estimula o hábito da leitura e o aprendizado contínuo."
                            alt="Pessoa lendo um livro, simbolizando aprendizado e conhecimento."
                        />
                        <Card
                            img={card3}
                            desc="Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas."
                            alt="Grupo de pessoas unidas em torno de um punho cerrado, simbolizando força e empoderamento."
                        />
                        <Card
                            img={card4}
                            desc="Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado."
                            alt="Balança, simbolizando justiça e equilíbrio."
                        />
                    </div>
                </section>
            </Container>
        </main>
    );
}
