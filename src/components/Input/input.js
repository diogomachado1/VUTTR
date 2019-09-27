import React from 'react';
import ReactSVG from 'react-svg';
import PropTypes from 'prop-types';

import { Container, InputBossabox } from './styles';

export default function InputWithIcon({ icon, ...rest }) {
  return (
    <Container>
      <InputBossabox icon={icon} {...rest} />
      {icon && <ReactSVG src={icon} />}
    </Container>
  );
}

InputWithIcon.propTypes = {
  icon: PropTypes.string,
};

InputWithIcon.defaultProps = {
  icon: undefined,
};
