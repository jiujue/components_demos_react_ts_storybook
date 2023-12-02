import React from 'react';
import * as styles from './index.module.less';

export type CustomFlowItemProps = {
  data:{
    key:string,
    avatar:string,
    title:string,
  },
  key:string
}

function CustomFlowItem({ data }: CustomFlowItemProps) {
  console.log(
    { data },
  );
  return (
    <div className={styles.customFlowItemWrap}>

      <div className="custom-flow-item-title">
        {data?.title}
      </div>
      <div className={styles.customFlowItemAvatar}>
        <img src={data?.avatar} alt="avatar" />
      </div>
    </div>
  );
}

export default CustomFlowItem;
