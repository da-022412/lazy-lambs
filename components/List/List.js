import listStyles from './List.module.scss';

const List = ({ content }) => {
    return (
        <ul>
            {content.map((x, y) => {
                <li className={`${listStyles['list-item']}`} key={y}>
                    {x.li}
                </li>;
            })}
        </ul>
    );
};

export default List;
