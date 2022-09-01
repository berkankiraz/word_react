import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.css";
import Level1 from "./Levels/Level1";
import Level2 from "./Levels/Level2";
import Level3 from "./Levels/Level3";
import Level4 from "./Levels/Level4";
import AddWord from "./Components/AddWord";
import SignIn from "./Components/Pages/SignIn";

import AllCards from "./Components/Pages/AllCards";
import Cookies from "universal-cookie";
import QuizStarted from "./Components/QuizStarted";
const cookies = new Cookies();

// get token generated on login
const token = cookies.get("TOKEN");

function App() {
  if (!token) {
    return (
      <div>
        <Header></Header>

        <SignIn></SignIn>
      </div>
    );
  } else {
    return (
      <div>
        <Header></Header>

        <Routes>
          <Route path="/level1" element={<Level1 />}></Route>
          <Route path="/level2" element={<Level2 />}></Route>
          <Route path="/level3" element={<Level3 />}></Route>
          <Route path="/level4" element={<Level4 />}></Route>
          <Route path="/allcards" element={<AllCards />}></Route>
          <Route path="/addword" element={<AddWord />}></Route>
          <Route path="/quizstarted" element={<QuizStarted />}></Route>
          <Route path="/" element={<SignIn />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
