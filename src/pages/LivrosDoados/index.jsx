import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import Container from "../../components/container";
import Title from "../../components/Title";
import CardBook from "./components/CardBook";
import api from "../../services/api";
import { mockBooks } from "../../mocks/mockBooks";

import * as s from "./booksDonated.module.scss";

export default function LivrosDoados() {
  const [data, setData] = useState([]);
  const [mockBook] = useState(mockBooks);
  const [loading, setLoading] = useState(true);

  async function getBooks() {
    try {
      const response = await api.get("/books");
      setData(response.data);
      console.log("Requisição bem sucedida: ", response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching books:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  

  return (
    <Container>
      <section className={s.ContainerBooks}>
      {loading ? <ClipLoader color="#005492" size={50} /> 
        : 
        (<>
        <Title text="Livros doados" size={25} />
        <div className={s.BooksList}>

          {mockBook.map((item) => (
              <CardBook
                key={item.id}
                img={item.img}
                title={item.title}
                author={item.author}
                category={item.category}
              />
            ))}
            
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
        </>)}
      </section>
    </Container>
  );
}
