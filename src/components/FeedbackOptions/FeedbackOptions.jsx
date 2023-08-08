import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, handleFeedback }) => {
  const optionsKeys = Object.keys(options);
  return (
    <div>
      {optionsKeys.map(optionKey => (
        <button
          className={css.button}
          type="button"
          key={optionKey}
          onClick={() => {
            handleFeedback(optionKey);
          }}
        >
          {optionKey}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propType = {
  options: PropTypes.object.isRequired,
  handleFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

