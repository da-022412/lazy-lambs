import accordionStyles from './Accordion.module.scss';

import AccordionItem from './AccordionItem';

const Accordion = ({ items }) => {
    return (
        <div className={`${accordionStyles['accordion-container']}`}>
            {items.map(({ title, copy }, index) => (
                <AccordionItem title={title} copy={copy} key={index} />
            ))}
        </div>
    );
};

export default Accordion;
