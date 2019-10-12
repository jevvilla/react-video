import React from 'react';

import './styles.scss';

const Categories = ({ children, title }) => (
  <>
    <h3 className='categories__title'>{title}</h3>
    {children}
  </>
);

export default Categories;
