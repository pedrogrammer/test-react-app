import './Pagination.css';

const Pagination = ({ cardsPerPage, totalCards, paginate }) => {
    const pageNumbers = [];

    for (let page = 1; page <= Math.ceil(totalCards / cardsPerPage); page++)
        pageNumbers.push(page);

    return (
        <nav id="pagination-nav">
            <ul id="pagination">
                {pageNumbers.map(number => (
                    <li className="page-item" key={number}>
                        <button
                            onClick={() => paginate(number)}
                            className="page-link">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
