import Link from 'next/link';

import navStyles from './Nav.module.scss';

const links = [
    {
        id: 0,
        title: 'Club',
        slug: '#club',
    },
    {
        id: 1,
        title: 'Roadmap',
        slug: '#roadmap',
    },
    {
        id: 2,
        title: 'Team',
        slug: '#team',
    },
    {
        id: 3,
        title: 'FAQ',
        slug: '/faqs',
    },
];

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            {links.map((x) => (
                <div className={`${navStyles['link-container']}`} key={x.id}>
                    <Link href={x.slug} key={x.id}>
                        <a className={`${navStyles['link-text']}`}>{x.title}</a>
                    </Link>
                </div>
            ))}
        </nav>
    );
};

export default Nav;
