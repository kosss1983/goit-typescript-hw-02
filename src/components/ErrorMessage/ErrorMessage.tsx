import s from './ErrorMessage.module.css';
import React from 'react';

const ErrorMessage: React.FC = () => {
  return (
    <div className={s.error}>
      <span>Something went wrong!</span>
    </div>
  );
};

export default ErrorMessage;
