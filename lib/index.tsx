import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';
//import wechat from '../Icons/wechat.svg';

const fn: React.MouseEventHandler = (e) => {
  console.log(e.target);
};
ReactDOM.render(
  <div>
    {/* <Icon name="wechat" />
    <Icon name="alipay" /> */}
    <Icon
      name="qq"
      onClick={fn}
      onMouseEnter={() => console.log('enter')}
      onMouseLeave={() => console.log('leave')}
      onTouchStart={() => console.log('touch')}
    />
  </div>,
  document.querySelector('#Root')
);
