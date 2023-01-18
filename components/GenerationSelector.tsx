import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import styles from '../styles/GenerationSelector.module.css';

const GenerationSelector = () => {
  const [gen, setGen] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setGen(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }} className={styles['selector']}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">gen</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
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
          <MenuItem value={10}>All Gens!</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default GenerationSelector;