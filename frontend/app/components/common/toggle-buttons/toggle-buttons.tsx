import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useState } from 'react';

type ToggleButtonsProps = {
  selectedValue?: string;
  toggleValues: string[];
  toggleLabels: string[];
  handleChange?: (event: React.MouseEvent<HTMLElement>, newValue: string | null) => void;
};
const ToggleButtons = ({
  selectedValue,
  toggleValues,
  toggleLabels,
  handleChange,
}: ToggleButtonsProps) => {
  return (
    <ToggleButtonGroup
      value={selectedValue}
      color="primary"
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      {toggleValues.map((val, index) => (
        <ToggleButton
          key={val}
          value={val}
          aria-label={val}
          sx={{
            textTransform: 'none', // no uppercase
            paddingX: 3,
            paddingY: 1.5,
            borderRadius: 2,
            mb: 1,
            mt: 1,
            fontSize: '13px',
            fontWeight: 'bold',
            border: '1px solid #5392d0ff',
            color: selectedValue === val ? '#fff' : '#5796d5ff',
            backgroundColor: selectedValue === val ? '#5796d5ff' : 'transparent',
            '&:hover': {
              backgroundColor: selectedValue === val ? '#1565c0' : 'rgba(25, 118, 210, 0.1)',
            },
          }}
        >
          {toggleLabels[index]}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default ToggleButtons;
