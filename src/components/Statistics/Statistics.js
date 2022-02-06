import PropTypes from 'prop-types';
import s from './Statistics.module.css';
function get_random_color() {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
}

const Statistics = ({ title, statics }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.titleHead}>{title}</h2>}
      <ul className={s.statList}>
        {statics.map(el => {
          let { id, label, percentage } = el;
          return (
            <li
              key={id}
              className={s.item}
              style={{ backgroundColor: get_random_color() }}
            >
              <span className={s.textLabel}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  statics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

// Statistics.propTypes = {
//   PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     percentage: PropTypes.number.isRequired,
//   }),
// };

export default Statistics;
