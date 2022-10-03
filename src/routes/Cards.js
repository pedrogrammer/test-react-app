import { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import PersonCards from '../components/PersonCards';

import './Cards.css';

const Cards = () => {
    const [cardData, setCardData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(12);

    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setCardData(data);
                setLoading(false);
            });
    };

    useEffect(() => fetchData(), []);

    // Get current posts
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

    // Change page
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        console.log(pageNumber);
    };

    return (
        <section id="cards-section">
            <PersonCards cards={currentCards} loading={loading} />
            <Pagination
                cardsPerPage={cardsPerPage}
                totalCards={cardData.length}
                paginate={paginate}
            />
        </section>
    );
};

export default Cards;
