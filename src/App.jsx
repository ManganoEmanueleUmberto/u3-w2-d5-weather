import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import WeatherPage from "./components/WeatherPage";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route
            path="/search/:id"
            element={
              <>
                <Topbar />
                <WeatherPage />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
