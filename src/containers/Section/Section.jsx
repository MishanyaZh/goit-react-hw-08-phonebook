import PropTypes from 'prop-types';
import { Container, Subtitle } from '../Section/Section.styled';

const SectionContacts = ({ title, children }) => (
  <Container>
    {title && <Subtitle>{title}</Subtitle>}
    {children}
  </Container>
);

export default SectionContacts;

SectionContacts.propTypes = {
  title: PropTypes.string,
};
