import SideMenuLink from './SideMenuLink';

import './SideMenu.css';

const SideMenu = ({ sideMenuDisplayHandler, stat }) => {
    const linksData = [
        {
            route: '/',
            label: 'Home',
        },
        {
            route: '/cards',
            label: 'Task one: Cards',
        },
        {
            route: '/chart',
            label: 'Task two: Chart',
        },
        {
            route: '/quiz',
            label: 'Task three: Quiz',
        },
    ];

    return (
        <aside id="side-menu" className={stat ? 'show' : 'hide'}>
            <div id="title">APP MENU</div>
            <ul>
                {linksData.map(link => (
                    <SideMenuLink
                        route={link.route}
                        label={link.label}
                        sideMenuDisplayHandler={sideMenuDisplayHandler}
                    />
                ))}
            </ul>
        </aside>
    );
};

export default SideMenu;
