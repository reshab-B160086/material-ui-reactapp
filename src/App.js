import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, ButtonGroup } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import { Checkbox } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import { Typography, Container, Paper, Grid } from "@material-ui/core";
import "fontsource-roboto";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #333, #999)",
    border: 0,
    borderRadius: 15,
    color: "white",
    padding: "0 30px",
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

function CheckBoxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          icon={<DeleteIcon />}
        />
      }
      label="Test Checkbox"
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <div className="App">
          <header className="App-header">
            <Typography variant="h1">Welcome to MUI</Typography>
            <Typography variant="subtitle1">Lear the MUI</Typography>
            <ButtonStyled />
            <Grid container spacing={4} justifyContent="space-between">
              <Grid item>
                <Paper style={{ width: 50, height: 70 }} />
              </Grid>
              <Grid item>
                <Paper style={{ width: 50, height: 70 }} />
              </Grid>
              <Grid item>
                <Paper style={{ width: 50, height: 70 }} />
              </Grid>
              <Grid item>
                <Paper style={{ width: 50, height: 70 }} />
              </Grid>
            </Grid>

            {/* <TextField
              variant="filled"
              color="secondary"
              label="Enter the email"
              type="email"
              placeholder="test@test.com"
            /> */}
            <CheckBoxExample />
            <ButtonGroup variant="contained">
              <Button endIcon={<SaveIcon />} size="large" color="primary">
                Save
              </Button>
              <Button endIcon={<DeleteIcon />} size="large" color="secondary">
                Discard
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
