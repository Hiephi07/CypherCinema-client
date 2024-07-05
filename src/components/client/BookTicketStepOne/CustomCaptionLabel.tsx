import React from 'react';
import { format } from 'date-fns';

interface Props {
  displayMonth: Date;
  displayIndex?: number;
}

const CustomCaptionLabel = ({ displayMonth } : Props) => {
  const month = format(displayMonth, 'MMMM'); // Format month
  const year = format(displayMonth, 'yyyy'); // Format year

  return (
    <div>
      <span>{year}</span><span>{month}</span> 
    </div>
  );
};

export default CustomCaptionLabel;
