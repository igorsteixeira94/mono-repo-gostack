import React from 'react';
import { ButtonRect,TextBtn } from './styles';

const Button = ({style, label, ...rest}) =>
<ButtonRect style={style} {...rest}>
<TextBtn>{label}</TextBtn>
</ButtonRect>

;

export default Button;
