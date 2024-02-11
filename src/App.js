import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import Questions from "./components/Questions";

function App() {
  return (
    <BrowserRouter>
      <div className="App min-h-[100vh] bg-gradient-to-r from-violet-600 to-fuchsia-600">
        <header className="h-24 bg-gradient-to-r from-violet-900 to-fuchsia-900">
          <h1 className="text-center text-3xl font-bold pt-6">
            Quiz Application
          </h1>
        </header>
        <main id="quiz">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/questions" element={<Questions />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
