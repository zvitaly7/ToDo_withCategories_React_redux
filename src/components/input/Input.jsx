import React from 'react';

export const Input = props => {
    const onChangeInternal = e =>
        props.onChange && props.onChange(e.target.value);

    const onBlurInternal = e =>
        props.onBlur && props.onBlur(e.target.value);

    return (
        <input
            {...props}
            onBlur={onBlurInternal}
            onChange={onChangeInternal}
        >
            {props.children}
        </input>
    );
};