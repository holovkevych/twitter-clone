import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function SearchTextField() {
  return (
    <Paper
      component="form"
      sx={{ 
        p: '2px 4px', 
        display: 'flex', 
        alignItems: 'center', 
        width: 400, 
        borderRadius: 30,
        backgroundColor: "#f8f9fa",
        maxWidth: '100%', 
      }}
    >
      <SearchIcon sx={{ p: '10px' }} />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Пошук у Твітері"
        inputProps={{ 'aria-label': 'Пошук у Твітері' }}
      />
    </Paper>
  );
}
