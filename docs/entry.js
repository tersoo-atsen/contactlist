
    window.reactComponents = {};

    window.vueComponents = {};

  
      import React from "react";

      import ReactDOM from "react-dom";


      import ReactWrapper from '../node_modules/better-docs/lib/react-wrapper.js';

      window.React = React;

      window.ReactDOM = ReactDOM;

      window.ReactWrapper = ReactWrapper;

    
    import './styles/reset.css';

    import './styles/iframe.css';

  import Component0 from '../src/App.jsx';
reactComponents['App'] = Component0;

import Component1 from '../src/components/ContactInfo.jsx';
reactComponents['ContactInfo'] = Component1;

import Component2 from '../src/components/Content.jsx';
reactComponents['Content'] = Component2;

import Component3 from '../src/components/Modal.jsx';
reactComponents['Modal'] = Component3;

import Component4 from '../src/components/Tab.jsx';
reactComponents['Tab'] = Component4;

import Component5 from '../src/components/Tabs.jsx';
reactComponents['Tabs'] = Component5;