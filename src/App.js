import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import NewObjective from "./components/NewObjective";
import Home from "./components/home";
import DeleteID from "./components/DeleteID";
import ShowObjective from "./components/ShowObjective";
import EditEdit from "./components/EditEdit";
import Extra from "./components/Extra";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/new-objective">New Objective</NavLink>
          </li>
          <li>
            <NavLink to="/delete-objective">Delete Objective</NavLink>
          </li>
          <li>
            <NavLink to="/show-objective">Show Objective</NavLink>
          </li>
          <li>
            <NavLink to="/edit-objective">Edit Objective</NavLink>
          </li>
          <li>
          <NavLink to="/extra">Extra</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-objective" element={<NewObjective />} />
        <Route path="/delete-objective" element={<DeleteID />} />
        <Route path="/show-objective" element={<ShowObjective />} />
        <Route path="/edit-objective" element={<EditEdit />} />
        <Route path="/extra" element={<Extra />}/>
      </Routes>
    </Router>
  );
}
export default App;