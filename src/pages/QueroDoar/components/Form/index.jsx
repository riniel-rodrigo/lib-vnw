import React from "react";
import { HiOutlineBookOpen } from "react-icons/hi";

import Title from "../../../../components/Title";

import * as s from "./form.module.scss";

export default function Form() {
  return (
    <>
      <form className={s.Form}>
        <div className={s.FormHeader}>
          <HiOutlineBookOpen size={40} color="#005695" />
          <Title text="Informações do Livro" size={25} />
        </div>

        <div className={s.FormGroup}>
          <input type="text" placeholder="Título" />
          <input type="" placeholder="Categoria" />
          <input type="text" placeholder="Autor" />
          <input type="url" placeholder="Link da imagem" />
        </div>

        <div className={s.FormButton}>
          <button disabled>Doar</button>
        </div>
      </form>
    </>
  );
}
