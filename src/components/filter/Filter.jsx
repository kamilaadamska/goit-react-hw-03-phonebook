import PropTypes from 'prop-types';
import css from './filter.module.css';

export const Filter = ({ findContact, filter }) => {
  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={findContact}
        value={filter}
        className={css.filterInput}
      />
    </label>
  );
};

Filter.propTypes = {
  findContact: PropTypes.func,
  filter: PropTypes.string,
};
