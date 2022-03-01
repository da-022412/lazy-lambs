import navStyles from './MobileNav.module.scss';

import MobileNavItems from './MobileNavItems';

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

const MobileNav = () => {
    return (
        <nav className={navStyles.nav}>
            <MobileNavItems items={CONTENT} />
        </nav>
    );
};

export default MobileNav;
