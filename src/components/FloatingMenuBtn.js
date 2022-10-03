import './FloatingMenuBtn.css';

const FloatingMenuBtn = ({ sideMenuDisplayHandler }) => {
    return (
        <button
            id="fries-menu-btn"
            onClick={event => sideMenuDisplayHandler(true)}>
            <div></div>
            <div id="middle-fry"></div>
            <div></div>
        </button>
    );
};

export default FloatingMenuBtn;
