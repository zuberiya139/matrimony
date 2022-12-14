/* eslint-disable no-nested-ternary */
import clx from 'utils/clx';

interface ButtonProps {
    text: string;
    color?: 'one' | 'two' | 'three' | 'four' | 'five';
    rounded?: boolean;
    onClick?: () => void;
    submit?: boolean;
    additionalStyles?: string;
    additionalButtonStyles?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
    const { text, color, onClick, submit, rounded, additionalStyles, additionalButtonStyles } =
        props;

    return (
        <button
            color={color}
            onClick={onClick}
            type={submit ? 'submit' : 'button'}
            className={clx(
                'w-full py-2 border-[1px]  text-md border-gray-500 ',
                rounded ? '!rounded-md' : ' ',
                additionalButtonStyles || null,
                color === 'one'
                    ? 'bg-primary-background hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-700 '
                    : color === 'two'
                    ? 'bg-white hover:bg-primary-background hover:text-white active:bg-red-700  focus:outline-none focus:ring focus:ring-red-700 '
                    : color === 'three'
                    ? 'bg-green-400 hover:bg-green-500 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-600 '
                    : color === 'four'
                    ? 'bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-600 '
                    : color === 'five'
            )}
        >
            <span className={clx(additionalStyles || null)}>{text}</span>
        </button>
    );
};

export default Button;
