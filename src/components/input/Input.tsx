import React, { ChangeEvent, FC, InputHTMLAttributes } from 'react';
import '../../styles/global.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className: string;
    icon?: any;
    onError?: any;
}

const Input: FC<InputProps> = ({ className, icon, onError, ...rest }) => {
    return (
        <div>
            <div className={className}>
                <input className='input-inner' {...rest} />
                <div className='input-icon'>{icon}</div>
            </div>
            <div className='txt-error'>{onError}</div>
        </div>
    );
};

export default Input;
