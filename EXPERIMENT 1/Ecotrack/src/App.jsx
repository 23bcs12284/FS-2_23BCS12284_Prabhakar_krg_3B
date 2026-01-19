import Dashboard from "./pages/dashboard.jsx";
import Log from "./pages/log.jsx";
import Header from "./components/header.jsx";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header title="Dashboard" />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/log" element={<Log />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
