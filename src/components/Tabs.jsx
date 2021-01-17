import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Tabs.scss';
import Tab from './Tab';
import Content from './Content';

const Tabs = ({ children: data }) => {
  const [activeTab, setActiveTab] = useState('');

  const onClickTabItem = (tab) => setActiveTab(tab);

  useEffect(() => {
    const nonEmptyTabs = data.filter((item) => item.props.children.length > 0);
    setActiveTab(nonEmptyTabs[0].props.label);
  }, []);

  return (
    <div className="tabs-wrapper">
      <div className="tabs">
        <ol className="tab-list">
          {data.map((child) => {
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
          })}
        </ol>
        <div className="tab-content">
          {data.map((child) => {
            const { label } = child.props;
            const contacts = child.props.children;
            if (child.props.label !== activeTab) return undefined;
            return <Content key={label} contacts={contacts} />;
          })}
        </div>
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

export default Tabs;
