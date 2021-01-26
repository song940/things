import { createElement as h } from 'https://lsong.org/tinyact/src/h.js';

export const List = ({ onReachEnd, children }) => {
  const onScroll = e => {
    const dom = e.target;
    
    console.log(dom.offsetTop, dom.scrollTop);
    // onReachEnd();
  };
  return h('ul', { className: 'list', onScroll },
    children.map(item => h(ListItem, null, item))
  );
};

export const ListItem = ({ children }) => {
  return h('li', { className: 'list-item' }, children);
};