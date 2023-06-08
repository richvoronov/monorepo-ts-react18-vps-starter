import React from 'react';

export const Header = ({ slot1, slot2, slot3 }: {
  slot1?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
}) => {
  return (
    <div>
      <div>
        {slot1}
      </div>
      <div>
        {slot2}
      </div>
      <div>
        {slot3}
      </div>
    </div>
  );
};
