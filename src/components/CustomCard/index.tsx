import React from 'react';
import * as styles from './index.module.less';

type Props = {
	title?: string
}

function CustomCard({ title }: Props) {
  return (
    <div className={styles.customCardWrap}>
      <h1>
        CustomCard:
        {title}
      </h1>
    </div>
  );
}

export default CustomCard;
