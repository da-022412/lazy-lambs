import buttonStyles from './Button.module.scss';

const Button = ({ children, style }) => {
    return <div className={`${buttonStyles[style]}`}>{children}</div>;
};

export default Button;
