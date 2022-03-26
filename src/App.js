import logo from "./logo.svg";
import "./App.css";
import { Button, ButtonGroup } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
