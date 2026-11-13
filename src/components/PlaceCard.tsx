import './PlaceCard.css';
import { Link } from 'react-router-dom';

type Props = {
    name: string;
    description: string;
    image: string;
    link: string;
};

function PlaceCard({ name, description, image, link }: Props) {
    return (
        <article className="place-card">
            <img src={image} alt={name} />

            <h3>{name}</h3>

            <div className="place-card-description">
                <p>{description}</p>
            </div>

            <Link to={link}>Explore more</Link>
        </article>
    );
}

export default PlaceCard;