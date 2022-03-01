import React, { useState } from 'react';

import accordionStyles from './Accordion.module.scss';

import Heading from '../../Heading';
import BodyText from '../../BodyText';

const AccordionItem = ({ title, copy }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div className={`${accordionStyles['accordion-item']}`}>
                <div
                    className={`${accordionStyles['accordion-title']}`}
                    onClick={() => setIsActive(!isActive)}
                >
                    <Heading style='heading-3' level='3'>
                        {title}
                        <span>{isActive ? ' -' : ' +'}</span>
                    </Heading>
                </div>
                {isActive && (
                    <div className={`${accordionStyles.panel}`}>
                        <BodyText>{copy}</BodyText>
                    </div>
                )}
            </div>
        </>
    );
};

export default AccordionItem;
