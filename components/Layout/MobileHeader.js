import Link from 'next/link';
import headerStyles from './Header.module.scss';

import Nav from '../Nav';

import Logo from '../../assets/images/logo.svg';

const MobileHeader = () => {
    return (
        <header className={headerStyles.header}>
            <div className={`${headerStyles['header-container']}`}>
                <figure className={headerStyles.logo}>
                    <Link href='/'>
                        <a>
                            <Logo />
                        </a>
                    </Link>
                </figure>
                <Nav />
                <div className={`${headerStyles['btn-container']}`}>
                    <div className={`${headerStyles['primary-btn']}`}>
                        Become a Member
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MobileHeader;
