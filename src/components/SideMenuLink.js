import { Link } from 'react-router-dom';

import './SideMenuLink.css';

const SideMenuLink = ({ route, label, sideMenuDisplayHandler }) => {
    return (
        <li>
            <Link to={route} onClick={event => sideMenuDisplayHandler(0)}>
                {label}
            </Link>
        </li>
    );
};

export default SideMenuLink;
