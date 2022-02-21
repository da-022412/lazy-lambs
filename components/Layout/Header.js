import Link from 'next/link';
import Image from 'next/image';

import headerStyles from './Header.module.scss';

import Nav from '../Nav';

import Logo from '../../assets/images/logo.svg';

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className={`${headerStyles['header-container']}`}>
                <figure className={headerStyles.logo}>
                    <Link href='/'>
                        <a>
                            <Image src={Logo} height='65' width='140' />
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

export default Header;
