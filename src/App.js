import Header from "./Components/Organisms/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <h2>This app was created using</h2>
        <ul>
          <li>Postgres</li>
          <li>React</li>
          <li>Express</li>
        </ul>
        <p>
          For use, modify the sql_info_connection.js file store on
          ./server/postgres directory.
        </p>
      </div>
    </div>
  );
}

export default App;
