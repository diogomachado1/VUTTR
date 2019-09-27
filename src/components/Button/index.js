import React from 'react';
import ReactSVG from 'react-svg';

import PropTypes from 'prop-types';

import {
  ButtonCustom,
  ButtonQuartiaryCustom,
  ButtonTerciaryCustom,
} from './styles';

const buttonProps = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

const buttonDefaultProps = {
  icon: undefined,
};

export function Button(props) {
  const { icon, children } = props;
  return (
    <ButtonCustom {...props}>
      {icon && <ReactSVG src={icon} />}
      {children}
    </ButtonCustom>
  );
}

Button.propTypes = buttonProps;
Button.defaultProps = buttonDefaultProps;

export function ButtonTerciary({ icon, children, ...rest }) {
  return (
    <ButtonTerciaryCustom {...rest}>
      {icon && <ReactSVG src={icon} />}
      {children}
    </ButtonTerciaryCustom>
  );
}

ButtonTerciary.propTypes = buttonProps;
ButtonTerciary.defaultProps = buttonDefaultProps;

export function ButtonQuartiary({ icon, children, ...rest }) {
  return (
    <ButtonQuartiaryCustom {...rest}>
      {icon && <ReactSVG src={icon} />}
      {children}
    </ButtonQuartiaryCustom>
  );
}

ButtonQuartiary.propTypes = buttonProps;
ButtonQuartiary.defaultProps = buttonDefaultProps;
