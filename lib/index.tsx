import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';
//import wechat from '../Icons/wechat.svg';

ReactDOM.render(
  <div>
    <Icon name="wechat" />
    <Icon name="alipay" />
    <Icon name="qq" />
  </div>,
  document.querySelector('#Root')
);
