import React from 'react';
import { Spin } from 'antd';

const LoadingSpinner = () => {
  return (
    <div style={{ position: 'relative', float: 'left', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <Spin />
    </div>
  )
}

export default LoadingSpinner;