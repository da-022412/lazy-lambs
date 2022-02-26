import Image from 'next/image';

import columnsStyles from './Columns.module.scss';

import Heading from '../Heading';
import BodyText from '../BodyText';
import List from '../List';
import Button from '../Button';

const Columns = ({ content }) => {
    return (
        <section>
            <div className={`${columnsStyles['columns-container']}`}>
                <Heading style='heading-2' level='2'>
                    {content.title}
                </Heading>
                <div className={`${columnsStyles['columns']}`}>
                    <div className={`${columnsStyles['column-content']}`}>
                        {content.subTitle ? (
                            <Heading style='heading-3' level='3'>
                                {content.subTitle}
                            </Heading>
                        ) : null}
                        {content.copy
                            ? content.copy.map(({ text }, y) => (
                                  <BodyText key={y}>{text}</BodyText>
                              ))
                            : null}
                        {content.list ? <List content={content.list} /> : null}
                        {content.btn ? (
                            <Button style='primary-btn' link={content.link}>
                                {content.btn}
                            </Button>
                        ) : null}
                    </div>
                    <div className={`${columnsStyles['column-content']}`}>
                        <Image src={content.img} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Columns;
