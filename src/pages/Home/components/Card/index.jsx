import s from './card.module.scss'
import PropTypes from 'prop-types';

export default function Card({ img, desc, alt }) {
    return (
        <div className={s.card}>
            <img src={img} alt={alt} />
            <p>{desc}</p>
        </div>
    );
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

