import "bootstrap/dist/css/bootstrap.min.css"
import Footing from "./Components/pages/Footing";
import NavbarSection from "./Components/pages/NavbarSection";
import Section from "./Components/pages/Section";



function App() {
  return (
    <div className="App">
      <NavbarSection></NavbarSection>
      <Section></Section>
      <Footing></Footing>
    </div>
  );
}

export default App;
