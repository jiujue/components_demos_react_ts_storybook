import React from 'react';
import { Tooltip } from 'antd';
import * as styles from './index.module.less';

export type CustomFlowItemProps = {
  data:{
    key:string,
    avatar:string,
    title:string,
  },
  key?:string
}

function CustomFlowItem({ data, key }: CustomFlowItemProps) {
  console.log(
    { data },
  );
  return (
    <div className={styles.customFlowItemWrap} key={key}>

      <div className="custom-flow-item-title">
        <Tooltip title={data?.title} placement="topLeft">
          {data?.title}
        </Tooltip>

      </div>
      <div className="custom-flow-item-avatar">
        <img src={data?.avatar} alt="avatar" />
      </div>
    </div>
  );
}

export default CustomFlowItem;
