import React, {
    ChangeEvent,
    FC,
    InputHTMLAttributes,
    TextareaHTMLAttributes,
} from 'react';
import '../../styles/global.scss';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className: string;
    icon?: any;
    onError?: any;
}

const TextArea: FC<TextAreaProps> = ({ className, icon, onError, ...rest }) => {
    return (
        <div>
            <div className={className}>
                <textarea className='input-inner' {...rest} />
                <div className='input-icon'>{icon}</div>
            </div>
            <div className='txt-error'>{onError}</div>
        </div>
    );
};

export default TextArea;
