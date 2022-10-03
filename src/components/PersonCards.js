import './PersonCards.css';

const PersonCards = ({ cards, loading }) => {
    if (loading) return <h2 id="loader">Loading ...</h2>;

    return (
        <div id="cards-wrapper">
            {cards.map(card => (
                <article className="person-card" key={card.id}>
                    <h2 id="title">{card.title}</h2>
                    <p id="body">{card.body}</p>
                </article>
            ))}
        </div>
    );
};

export default PersonCards;
