import { createElement as h } from 'https://lsong.org/tinyact/src/h.js';

export const Header = ({ title }) => {
  return h('header', { className: 'header' },
    h('h1', null, title)
  );
};