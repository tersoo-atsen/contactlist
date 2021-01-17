import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Tabs.scss';
import Tab from './Tab';
import Content from './Content';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState('');

  const onClickTabItem = (tab) => setActiveTab(tab);

  useEffect(() => {
    let mounted = true;
    const arr = children.filter((data) => data.props.children.length > 0);

    if (mounted) setActiveTab(arr[0].props.label);

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="tabs-wrapper">
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child) => {
            const { label } = child.props;
            const contacts = child.props.children;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
                disabled={contacts.length === 0}
                count={contacts.length}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
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
