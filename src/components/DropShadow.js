import './DropShadow.css';

const DropShadow = ({ sideMenuDisplayHandler, stat }) => {
    return (
        <div
            id="drop-shadow"
            className={stat ? 'show' : 'hide'}
            onClick={event => sideMenuDisplayHandler(false)}></div>
    );
};

export default DropShadow;
