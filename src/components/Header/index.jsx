import { Link, useLocation } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";

import logo from '../../assets/logo.svg';

import s from './header.module.scss';

export default function Header() {
    const { pathname } = useLocation();

    return (
        <header className={s.header}>

            <Link to="/" className={s.boxLogo}>
                <img src={logo} alt="logo - Livro aberto" />
                <h1>vnw.Lib</h1>
            </Link>

            <nav className={s.nav}>
                <Link className={pathname === '/' ? `${s.isHere}` : ''} to="/">Home</Link>
                <Link className={pathname === '/livros-doados' ? `${s.isHere}` : ''} to="/livros-doados">Livros Doados</Link>
                <Link className={pathname === '/quero-doar' ? `${s.isHere}` : ''} to="/quero-doar">Quero Doar</Link>
            </nav>

            <div className={s.search}>
                <input type="text" placeholder='O que você procura?' />
                <IoSearchSharp />
            </div>
        </header>
    )
}