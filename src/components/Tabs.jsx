import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Tabs.scss';
import Tab from './Tab';
import Content from './Content';

/**
 * Component for showing details of the contact.
 *
 * @component
 */
const Tabs = ({ children: data }) => {
  const [activeTab, setActiveTab] = useState('');

  const onClickTabItem = (tab) => setActiveTab(tab);

  useEffect(() => {
    const nonEmptyTabs = data.filter((item) => item.props.children.length > 0);
    setActiveTab(nonEmptyTabs[0].props.label);
  }, []);

  const renderTabs = data.map((child) => {
    // children here implies the contacts for a given label
    const { label, children } = child.props;

    return (
      <Tab
        activeTab={activeTab}
        key={label}
        label={label}
        onClick={onClickTabItem}
        disabled={children.length === 0}
        count={children.length}
      />
    );
  });

  const renderContent = data.map((child) => {
    const { label, children } = child.props;
    if (child.props.label !== activeTab) return undefined;
    return <Content key={label} contacts={children} />;
  });

  return (
    <div className="tab-menu">
      <h2 className="tab-menu__title">Contacts</h2>
      <div className="tab-menu__container">
        <ol className="tab-menu__list">
          {renderTabs}
        </ol>
        <div className="tab__content">
          {renderContent}
        </div>
      </div>
    </div>
  );
};

Tabs.propTypes = {
  /**
  * Array of tabs and contacts
  */
  children: PropTypes.instanceOf(Array).isRequired,
};

export default Tabs;
