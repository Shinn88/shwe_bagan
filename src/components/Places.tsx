import { useEffect, useState } from 'react';

import PlaceCard from './PlaceCard';

import dhammayangyi from '../photo/dhammayangyi.png';
import thatbinuta from '../photo/thatbinuta.png';
import arnanda from '../photo/arnanda.jpg';

import './Places.css';

const cardInfo = [
    {
        id: 1,
        name: 'Ananda Temple',
        description:
            "Built around 1105 AD under King Kyanzittha, Ananda Temple is one of Bagan's most celebrated monuments. It is famous for its elegant architecture and four standing Buddha images.",
        image: arnanda,
        link: '/pagodas',
    },
    {
        id: 2,
        name: 'Thatbyinnyu Temple',
        description:
            'Constructed in the 12th century under King Sithu I, Thatbyinnyu Temple is recognized as the tallest temple in Bagan. Its towering structure reflects the architectural achievements of the ancient Bagan Kingdom.',
        image: thatbinuta,
        link: '/pagodas',
    },
    {
        id: 3,
        name: 'Dhammayangyi Temple',
        description:
            'Built during the reign of King Narathu in the 12th century, Dhammayangyi Temple is the largest temple in Bagan by mass.',
        image: dhammayangyi,
        link: '/pagodas',
    },
];

function Places() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const showNext = () => {
        setCurrentIndex((index) => (index + 1) % cardInfo.length);
    };

    const showPrevious = () => {
        setCurrentIndex(
            (index) => (index - 1 + cardInfo.length) % cardInfo.length
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // Automatically advance every 2 seconds.
    useEffect(() => {
        if (cardInfo.length <= 1) return;

        const timer = window.setInterval(() => {
            setCurrentIndex((index) => (index + 1) % cardInfo.length);
        }, 4000);

        return () => window.clearInterval(timer);
    }, []);

    // Display the previous, active, and next cards.
    const visibleCards = [
        {
            place: cardInfo[
                (currentIndex - 1 + cardInfo.length) % cardInfo.length
            ],
            position: 'previous',
        },
        {
            place: cardInfo[currentIndex],
            position: 'active',
        },
        {
            place: cardInfo[(currentIndex + 1) % cardInfo.length],
            position: 'next',
        },
    ];

    return (
        <section id="places">
            <header>
                <h2>Places to Explore</h2>
                <p>Discover some of Bagan's most remarkable places.</p>
            </header>

            <div className="places-viewport">
                <div className="places-stage">
                    {visibleCards.map(({ place, position }) => (
                        <div
                            key={place.id}
                            className={`place-slide ${position}`}
                        >
                            <PlaceCard
                                name={place.name}
                                description={place.description}
                                image={place.image}
                                link={place.link}
                            />
                        </div>
                    ))}
                </div>

                {cardInfo.length > 1 && (
                    <>
                        <button
                            type="button"
                            className="places-arrow places-arrow--left"
                            onClick={showPrevious}
                            aria-label="Previous temple"
                        >
                            &#10094;
                        </button>

                        <button
                            type="button"
                            className="places-arrow places-arrow--right"
                            onClick={showNext}
                            aria-label="Next temple"
                        >
                            &#10095;
                        </button>
                    </>
                )}
            </div>

            <div className="places-indicators">
                {cardInfo.map((place, index) => (
                    <button
                        key={place.id}
                        type="button"
                        className={`places-dot ${
                            index === currentIndex ? 'active' : ''
                        }`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to ${place.name}`}
                        aria-current={
                            index === currentIndex ? 'true' : undefined
                        }
                    />
                ))}
            </div>
        </section>
    );
}

export default Places;