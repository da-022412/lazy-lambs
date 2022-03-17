import Image from 'next/image';

import footerStyles from './Footer.module.scss';

import Container from '../../Container';
import Form from './Form';
import ContactInfo from './ContactInfo';

import Logo from '../../../assets/images/metaspeed_white.webp';

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <Container>
                <div className={`${footerStyles['footer-container']}`}>
                    <Form />
                    <ContactInfo />
                </div>

                <div className={`${footerStyles['footer-container2']}`}>
                    <Image src={Logo} height={52} width={200} alt='Metaspeed' />
                    &copy; 2022 MetaSpeed, Inc. All rights reserved.
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
