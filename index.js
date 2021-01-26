import { ready } from 'https://lsong.org/scripts/dom.js';
// import { createElement as h, render } from 'https://lsong.org/tinyact/src/index.js';
import { h, render, useState, useEffect } from 'https://unpkg.com/htm/preact/standalone.module.js';

import { Header, Panel, List } from './components/index.js';

const data = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'a',
  'b',
  'c',
  'd',
  'e',
  'a',
  'b',
  'c',
  'd',
  'e',
  'a',
  'b',
  'c',
  'd',
  'e',
  'a',
  'b',
  'c',
  'd',
  'e',
  'a',
  'd',
  'e',
  'a',
  'd',
  'e',
  'a',
  'b',
  'c',
  'd',
  'e',
  'a',
  'd',
  'e',
  'a',
  'b',
  'c',
  'd',
  'e',
  'a',
  'b',
  'c',
  'd',
  'e',
  'a',
  'b',
  'c',
  'd',
  'e',
  'a',
  'b',
  'c',
  'd',
  'e',
];

const Page = ({ children }) => {
  return h('div', { className: 'app-container' }, children);
};

const App = () => {
  const onReachEnd = e => {
    console.log('onReachEnd', e);
  };
  return h(Page, null,
    h(Header, { title: 'Things' }),
    h(Panel, { title: 'Panel' },
      h(List, { onReachEnd }, data)
    )
  );
};

ready(() => {
  const app = document.getElementById('app');
  render(h(App), app);
});
