import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React , {useState} from 'react';
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import ProjectComponent from './components/projects';
import AboutComponent from './components/about';
import ContactFormComponent from './components/contact';
import NavigationComponent from './components/navigation';


function App() {
  const [pageSelection, setPageSelection] = useState("Projects");

  const displayPage = () => {
    if (pageSelection === "About") {
    return <AboutComponent/>}
      if (pageSelection === "Projects") {
      return <ProjectComponent/>}
      if (pageSelection === "ContactMe") {
      return <ContactFormComponent/>}
      /* if (pageSelection === "Resume") {
      return <Resume/>}
      } */
    }

  return (
    <div className="App">
  <NavigationComponent 
      setPageSelection={setPageSelection}
      pageSelection={pageSelection}
      />
      {displayPage()}
      <FooterComponent/>
    </div>

  );
}

export default App;
