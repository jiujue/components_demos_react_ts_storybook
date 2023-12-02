import React from 'react';
import * as styles from './index.module.less';

export type CustomFlowItemProps = {
  data:{
    key:string,
    avatar:string,
    title:string,
    dataSource:{}
  },
  key:string
}

function CustomFlowItem({ data }: CustomFlowItemProps) {
  return (
    <div className={styles.customFlowItemWrap} />
  );
}

export default CustomFlowItem;
