import textStyles from './BodyText.module.scss';

const BodyText = ({ children }) => {
    return (
        <p
            className={`${textStyles['body-text']}`}
            dangerouslySetInnerHTML={{ __html: children }}
        ></p>
    );
};

export default BodyText;
