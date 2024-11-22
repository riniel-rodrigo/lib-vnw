import s from './container.module.scss'

export default function Container({ width, children }) {
    return (
        <div style={{ width }} className="container">
            {children}
        </div>
    );
}

