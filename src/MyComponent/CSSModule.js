import React from 'react';
import styles from '../MyStyle/CSSModule.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const CSSModule = () => {
  return (
    <div className={cx('wrapper', 'invented')}>
      hi I am <span className="something">CSS Module</span>
    </div>
  );
};

export default CSSModule;
