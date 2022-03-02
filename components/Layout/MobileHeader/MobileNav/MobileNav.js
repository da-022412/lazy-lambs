import navStyles from './MobileNav.module.scss';

import MobileNavItems from './MobileNavItems';
import Button from '../../../Button';
import SocialIcons from '../../../SocialIcons';
import BodyText from '../../../BodyText';

const CONTENT = {
    links: [
        {
            title: 'Club',
            slug: '/#club',
        },
        {
            title: 'Roadmap',
            slug: '/#roadmap',
        },
        {
            title: 'Team',
            slug: '/#team',
        },
        {
            title: 'FAQ',
            slug: '/faqs',
        },
    ],
    footer: '© 2022 MetaSpeed, Inc. All rights reserved.',
};

const MobileNav = () => {
    return (
        <nav className={navStyles.nav}>
            <div className={`${navStyles['nav-container']}`}>
                <MobileNavItems items={CONTENT.links} />
                <div className={`${navStyles['btn-container']}`}>
                    <Button style='primary-btn' link='#'>
                        Become a Member
                    </Button>
                </div>
                <div className={`${navStyles['nav-footer']}`}>
                    <SocialIcons />
                    <BodyText>{CONTENT.footer}</BodyText>
                </div>
            </div>
        </nav>
    );
};

export default MobileNav;
