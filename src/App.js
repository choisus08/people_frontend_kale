import { Outlet } from "react-router-dom"; // if have a subroute, use Outlet to render 
import Header from './components/header'

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
