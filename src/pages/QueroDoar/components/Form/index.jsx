import { HiOutlineBookOpen } from "react-icons/hi";
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';

import Title from "../../../../components/Title";
import api from "../../../../services/api";

import * as s from "./form.module.scss";

export default function Form() {

  const inputTitle = useRef();
  const inputCategory = useRef();
  const inputAuthor = useRef();
  const inputUrl = useRef();
  // const inputButton = useRef(null);

  async function createBook() {
    try {
      await api.post('/donate', {
        title: inputTitle.current.value,
        category: inputCategory.current.value,
        author: inputAuthor.current.value,
        img: inputUrl.current.value,
      });
      toast.success('Livro cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar o livro:', error);
      toast.error('Ocorreu um erro ao cadastrar o livro. Tente novamente.');
    }
  }

  return (
    <form className={s.Form}>
      <ToastContainer position="bottom-center" />
      <div className={s.FormHeader}>
        <HiOutlineBookOpen size={40} color="#005695" />
        <Title text="Informações do Livro" size={25} />
      </div>

      <div className={s.FormGroup}>
        <input type="text" placeholder="Título" name="title" ref={inputTitle}/>
        <input type="text" placeholder="Categoria" name="category" ref={inputCategory} />
        <input type="text" placeholder="Autor" name="author" ref={inputAuthor} />
        <input type="url" placeholder="Link da imagem" name="url" ref={inputUrl} />
      </div>

      <div className={s.FormButton}>
        <button type="button" onClick={createBook}>Doar</button>
      </div>
    </form>
  );
}
