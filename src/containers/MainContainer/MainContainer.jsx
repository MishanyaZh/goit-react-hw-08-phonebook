import PropTypes from 'prop-types';

import { MainContainer, Title } from './MainContainer.styled';

const MContainer = ({ children, title }) => (
  <MainContainer>
    <Title>{title}</Title>
    {children}
  </MainContainer>
);

export default MContainer;

MContainer.propTypes = {
  title: PropTypes.string,
};
