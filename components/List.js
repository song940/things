import { h } from '../react.js';

export const List = ({ onReachEnd, children }) => {
  const onScroll = e => {
    const dom = e.target;
    
    // console.log(dom.offsetTop, dom.scrollTop);
    // onReachEnd();
  };
  return h('ul', { className: 'list', onScroll },
    children.map(child => h(ListItem, null, child))
  );
};

export const ListItem = ({ children }) => {
  return h('li', { className: 'list-item' }, children);
};