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
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
};

export default Tab;
