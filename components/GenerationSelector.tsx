import React, { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import styles from '../styles/GenerationSelector.module.css';

interface Props {
  gen: string
  setGen: (gen: string) => void
}

const GenerationSelector = ({ gen, setGen }: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    setGen(event.target.value as string);
  };

  return (
    <>
      <Box sx={{ minWidth: 120 }} className={styles['selector']}>
        <FormControl fullWidth>
          <InputLabel id="gen-select-label">gen</InputLabel>
          <Select
            labelId="gen-select-label"
            id="gen-select"
            value={gen}
            label="gen"
            onChange={handleChange}
          >
            <MenuItem value={1}>1st</MenuItem>
            <MenuItem value={2}>2nd</MenuItem>
            <MenuItem value={3}>3rd</MenuItem>
            <MenuItem value={4}>4th</MenuItem>
            <MenuItem value={5}>5th</MenuItem>
            <MenuItem value={6}>6th</MenuItem>
            <MenuItem value={7}>7th</MenuItem>
            <MenuItem value={8}>8th</MenuItem>
            <MenuItem value={9}>All Gens!</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

export default GenerationSelector;