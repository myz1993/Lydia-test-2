import React from 'react';
import '../Icons/wechat.svg';
import '../Icons/alipay.svg';
import '../Icons/qq.svg';
//import './importicons';
import './icon.scss';
import classes from './helpers/classes';
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}
const Icon: React.FunctionComponent<IconProps> = ({ className, name, ...restprops }) => {
  return (
    <svg className={classes('lui-icon', className)} {...restprops}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
};
export default Icon;
