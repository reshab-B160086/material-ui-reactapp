import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, ButtonGroup } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import { Checkbox } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { TextField } from "@material-ui/core";

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
    <div className="App">
      <header className="App-header">
        <TextField
          variant="filled"
          color="secondary"
          label="Enter the email"
          type="email"
          placeholder="test@test.com"
        />
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
  );
}

export default App;
