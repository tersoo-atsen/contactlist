import React from 'react';
import PropTypes from 'prop-types';

import './Tab.scss';

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

  if (activeTab === label) className += ' tab-list-active';
  if (disabled) className += ' disabled';

  return (
    <li
      className={className}
      onClick={!disabled ? handleClick : null}
      aria-hidden="true"
    >
      <span className="label">{label}</span>
      <span className="count">{`[${count}]`}</span>
    </li>
  );
};
Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
};

export default Tab;
