import React from 'react';
import '../Icons/wechat.svg';
import '../Icons/alipay.svg';
import '../Icons/qq.svg';
//import './importicons';
import './icon.scss';
interface IconProps {
  name: string;
  onClick: () => void;
}
const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className="lui-icon" onClick={props.onClick}>
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  );
};
export default Icon;
