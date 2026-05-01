import { ButtonHTMLAttributes, ReactNode, memo } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: 'primary' | 'secondary' | 'danger';
    children: ReactNode;
    as?: 'a';
}

const themesCfg = {
    primary: 'btn btn-primary',
    secondary: 'btn btn-secondary',
    danger: 'btn btn-danger',
}

const Button = memo(({ theme = 'primary', children, ...props }: IProps) => {
    const themeClassName = themesCfg[theme];
    const className = themeClassName + ' ' + props.className;

    return (
        <button {...props} className={className}>
            {children}
        </button>
    )
})

export default Button;

Button.displayName = 'Button';
