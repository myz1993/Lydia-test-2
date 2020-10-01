import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';
//import wechat from '../Icons/wechat.svg';

const fn = () => {
  console.log('fn');
};
ReactDOM.render(
  <div>
    {/* <Icon name="wechat" />
    <Icon name="alipay" /> */}
    <Icon name="qq" onClick={fn} />
  </div>,
  document.querySelector('#Root')
);
