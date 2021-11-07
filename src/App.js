import "./App.css";
import AuthButton from "./components/AuthButton";
import Habits from "./components/Habits";
import MainSection from "./components/MainSection";
import SideSection from "./components/SideSection";
import { TitleLogo } from "./components/TitleLogo";

function App() {
  return (
    <div className="h-screen flex">
      <SideSection>
        <TitleLogo />
        <Habits />
      </SideSection>
      <MainSection />

      {/* <AuthButton text="sign up"/>
      <AuthButton text="log in"/> */}

    </div>
  );
}

export default App;
