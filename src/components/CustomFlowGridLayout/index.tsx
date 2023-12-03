import React from 'react';
import CustomFlowItem from './comps/CustomFlowItem';
import CustomFlowItemProps from './comps/CustomFlowItem';
import * as styles from './index.module.less';

type CustomFlow = {
  dataSource: Array<typeof CustomFlowItemProps>,

}

function CustomFlow({ dataSource }: CustomFlow) {
  return (
    <div className={styles.customFlowWrap}>
      {
        dataSource?.map((it) => (<CustomFlowItem key={it?.key} data={it} />))
      }
    </div>
  );
}

export default CustomFlow;
