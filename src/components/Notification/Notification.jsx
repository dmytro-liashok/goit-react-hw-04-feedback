import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p>{message}</p>;
};

Notification.propType = {
  options: PropTypes.string.isRequired,
};


export default Notification;
