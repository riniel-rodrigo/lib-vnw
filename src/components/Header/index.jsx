import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <h1>Header</h1>
            <Link to="/">Home</Link>
            <Link to="/livros-doados">Livros doados</Link>
            <Link to="/quero-doar">Quero doar</Link>
        </>
    )
}