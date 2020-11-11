import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


function App() {
  var table_rows = [];
  for(let i = 0; i < 8; i++) {
    table_rows.push((<tr class="chessboard">
    <td class="chessboard"></td>
    <td class="chessboard"></td>
    <td class="chessboard"></td>
    <td class="chessboard"></td>
    <td class="chessboard"></td>
    <td class="chessboard"></td>
    <td class="chessboard"></td>
    <td class="chessboard"></td>
</tr>));
  }
  return (
    <>
      <Router>
        <Switch>
          <table class="chessboard">
         {table_rows}
          </table>
          <Route path='/' exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
