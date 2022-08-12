import PropTypes from 'prop-types';
import { Title, FeedbackSection } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <FeedbackSection>
      <Title>{title}</Title>
      {children}
    </FeedbackSection>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
