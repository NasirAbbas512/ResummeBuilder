import { formatMs } from '@material-ui/core';
import './App.css';
import LinearStepper from './LinearStepper';
import {CssBaseline, Container, Paper, Box} from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Container component={Box} p={4} fixed>
        <Paper component={Box} >
          <LinearStepper/>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
