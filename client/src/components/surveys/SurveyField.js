// Survey Field contains logic to render a single label and text input

import React from 'react';

export default ({ input, label, meta: { touched, error } }) => {
  const className = `form-group ${touched && error ? 'has-danger' : ''}`;
  return (
    <div className={className}>
      <label className="form-control">{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched ? error : ''}
      </div>
    </div>
  );
};
