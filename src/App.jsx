import "./App.css";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Stacks from "./components/Stacks";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center">
        <Header />
        <Profile />
        <Stacks />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
