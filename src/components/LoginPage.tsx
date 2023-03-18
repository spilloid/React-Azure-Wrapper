import React from 'react';
import { Button, Container, Grid, makeStyles, TextField } from '@material-ui/core';
import { TextFieldFactory } from './TextFieldFactory';

const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
});

export const LoginPage: React.FC = () => {
  const classes = useStyles();
  const textFieldFactory = new TextFieldFactory();

  return (
    <Container maxWidth="xs" className={classes.root}>
      <Grid container alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
        <Grid item>
          <form>
            {textFieldFactory.createTextField('username', 'Username')}
            {textFieldFactory.createTextField('password', 'Password', 'password')}
            <Button variant="contained" color="primary" type="submit">Login</Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

