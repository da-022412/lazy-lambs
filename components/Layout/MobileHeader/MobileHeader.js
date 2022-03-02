import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import headerStyles from '../Header/Header.module.scss';

import MobileNav from './MobileNav';

import Logo from '../../../assets/images/logo.svg';
import Menu from '../../../assets/images/menu.webp';
import Close from '../../../assets/images/close.webp';

const MobileHeader = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <header className={headerStyles.header}>
                <div className={`${headerStyles['header-container']}`}>
                    <figure className={headerStyles.logo}>
                        <Link href='/'>
                            <a>
                                <Image
                                    src={Logo}
                                    width={110}
                                    height={50}
                                    alt='Logo'
                                />
                            </a>
                        </Link>
                    </figure>
                    <figure
                        className={headerStyles.menu}
                        onClick={() => setIsActive(!isActive)}
                    >
                        {isActive ? (
                            <Image
                                src={Close}
                                width={24}
                                height={24}
                                alt='Close'
                            />
                        ) : (
                            <Image
                                src={Menu}
                                width={24}
                                height={24}
                                alt='Menu'
                            />
                        )}
                    </figure>
                </div>
            </header>
            {isActive && <MobileNav />}
        </>
    );
};

export default MobileHeader;
