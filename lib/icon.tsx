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
const Icon: React.FunctionComponent<IconProps> = (props) => {
  const { className, ...restprops } = props;
  return (
    <svg className={classes('lui-icon', className)} {...restprops}>
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  );
};
export default Icon;
