import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ options, totalFeedback, positiveFeedback }) => {
  const { good, neutral, bad } = options;
  return (
    <ul className={css.list}>
      <li>
        <p>
          Good: <span>{good}</span>
        </p>
      </li>
      <li>
        <p>
          Neutral: <span>{neutral}</span>
        </p>
      </li>
      <li>
        <p>
          Bad: <span>{bad}</span>
        </p>
      </li>
      <li>
        <p>
          Total: <span>{totalFeedback}</span>
        </p>
      </li>
      <li>
        <p>
          Positive feedback: <span>{positiveFeedback}%</span>
        </p>
      </li>
    </ul>
  );
};

Statistics.propType = {
  options: PropTypes.object.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;
