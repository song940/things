import { ready } from 'https://lsong.org/scripts/dom.js';
// import { createElement as h, render } from 'https://lsong.org/tinyact/src/index.js';
import { h, render, useState, useEffect } from './react.js';

import { Header, Panel, List } from './components/index.js';


const Page = ({ children }) => {
  return h('div', { className: 'container app-container' }, children);
};

const Card = ({ data }) => {
  const { img, title, description, link } = data;
  const onClick = () => {
    location.href = link
  };
  return h('div', { className: 'card', onClick }, [
    h('img', { src: img }),
    h('div', { className: 'card-content' }, [
      h('h3', null, title),
      h('p', null, description),
    ])
  ]);
};

const categories = [
  {
    title: 'Book',
    value: 'book'
  },
  {
    title: 'Music',
    value: 'music'
  },
  {
    title: 'Movie',
    value: 'movie'
  }
];


const getDefaultCategory = () => {
  const { hash } = location;
  const value = hash.slice(1);
  return categories.find(x => x.value === value) || categories[0];
};

const App = () => {
  const [category, setCategory] = useState(getDefaultCategory());
  const [data, setData] = useState([]);
  const onChange = e => {
    const { value } = e.target;
    const selected = categories.find(x => x.value === value);
    location.hash = `#${selected.value}`;
    setCategory(selected);
  };
  const loadData = () => {
    fetch(`data/${category.value}.json`)
      .then(res => res.json())
      .then(res => setData(res), setData([]))
  };

  useEffect(() => {
    loadData();
  }, [category]);
  return h(Page, null,
    h(Header, { title: 'Things' }),
    h('select', { onChange, value: category.value },
      categories.map(x => h('option', { value: x.value }, x.title))
    ),
    h(Panel, { title: category.title },
      h(List, {},
        data.map(item => h(Card, { data: item }))
      )
    )
  );
};

ready(() => {
  const app = document.getElementById('app');
  render(h(App), app);
});
