import columnsStyles from './MultiColumn.module.scss';

import Heading from '../Heading';
import BodyText from '../BodyText';

const MultiColumn = ({ content }) => {
    return (
        <section className={`${columnsStyles['column-section']}`}>
            <div className={`${columnsStyles['column-container']}`}>
                <Heading style='heading-2' level='2'>
                    {content.title}
                </Heading>
                <div className={`${columnsStyles['column-content']}`}>
                    {content.content.map((x) => (
                        <div
                            className={`${columnsStyles['column-info']}`}
                            key={x.id}
                        >
                            <Heading style='heading-4' level='4'>
                                {x.heading}
                            </Heading>
                            <BodyText>{x.copy}</BodyText>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MultiColumn;
