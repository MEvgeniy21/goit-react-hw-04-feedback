import PropTypes from 'prop-types';
import { TextStat } from 'components/Statistics/Statistics.styled';

export default function Notification({ message }) {
  return <TextStat>{message}</TextStat>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
