import columnsStyles from './MultiColumn.module.scss';

import Heading from '../Heading';
import BodyText from '../BodyText';

const MultiColumn = ({ content }) => {
    return (
        <section>
            <div className={`${columnsStyles['columns-container']}`}>
                <Heading style='heading-2' level='2'>
                    {content.title}
                </Heading>
                <div className={`${columnsStyles['columns']}`}>
                    {content.content.map((x, y) => (
                        <div
                            className={`${columnsStyles['column-content']}`}
                            key={y}
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
