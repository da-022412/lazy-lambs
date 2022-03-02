import Link from 'next/link';

import navStyles from './MobileNav.module.scss';

const MobileNavItem = ({ title, slug }) => {
    return (
        <div className={`${navStyles['link-container']}`}>
            <Link href={slug}>
                <a className={`${navStyles['link-text']}`}>{title}</a>
            </Link>
        </div>
    );
};

export default MobileNavItem;
