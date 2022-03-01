export default Nav;

import navStyles from './Nav.module.scss';

const CONTENT = [
    {
        title: 'Club',
        slug: '#club',
    },
    {
        title: 'Roadmap',
        slug: '#roadmap',
    },
    {
        title: 'Team',
        slug: '#team',
    },
    {
        title: 'FAQ',
        slug: '/faqs',
    },
];

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <NavItems items={CONTENT} />
        </nav>
    );
};

export default Nav;
