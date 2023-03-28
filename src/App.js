import { useContext, useState } from "react";
import LeftSection from "./components/Section/LeftSection";
import MiddleSection from "./components/Section/MiddleSection";
import RightSection from "./components/Section/RightSection";
import { MainContext } from "./context/CounterContex";
import {Route, Routes} from "react-router-dom";
import Profile from "./components/Section/Profile";
import Auth from "./components/Auth/Auth";

function App() {
  const context = useContext(MainContext);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);
  const [counter5, setCounter5] = useState(0);

  return (
    <MainContext.Provider
      value={{
        counter1,
        setCounter1,
        counter2,
        setCounter2,
        counter3,
        setCounter3,
        counter4,
        setCounter4,
        counter5,
        setCounter5,
      }}
    >
      <div className="App">
        <section className="w-[1540px] flex justify-between mx-auto p-5">
          <LeftSection />
            <Routes>
                <Route path='/auth' element={<Auth/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
          <RightSection />
        </section>
      </div>
    </MainContext.Provider>
  );
}

export default App;
