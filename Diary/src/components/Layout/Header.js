import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
 
export default () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="headline" color="colorSecondary" noWrap>
          The Apaws Diary
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
