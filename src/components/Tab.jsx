import React from 'react';
import PropTypes from 'prop-types';

import './Tab.scss';

/**
 * Component for showing details of the user.
 *
 * @component
 */
const Tab = (props) => {
  const {
    activeTab,
    label,
    onClick,
    disabled,
    count,
  } = props;

  const handleClick = () => onClick(label);

  let className = 'tab-list-item';

  if (activeTab === label) className += ' tab-list-item--active';
  if (disabled) className += ' tab-list-item--disabled';

  return (
    <li
      className={className}
      onClick={!disabled ? handleClick : null}
      aria-hidden="true"
    >
      <span className="tab-list-item__label">{label}</span>
      <span className="tab-list-item__count">{`[${count}]`}</span>
    </li>
  );
};
Tab.propTypes = {
  /**
  * Current selected tab
  */
  activeTab: PropTypes.string.isRequired,
  /**
  *  The tab label
  */
  label: PropTypes.string.isRequired,
  /**
  * Currently selected tab
  */
  onClick: PropTypes.func.isRequired,
  /**
  * Specifies if the tab is disabled
  */
  disabled: PropTypes.bool.isRequired,
  /**
  * The number of contacts on a given tab
  */
  count: PropTypes.number.isRequired,
};

export default Tab;
