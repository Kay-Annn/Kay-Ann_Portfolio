import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavigationComponent from './components/navigation';
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import ProjectComponent from './components/projects';
import AboutComponent from './components/about';
import ContactFormComponent from './components/contact';

function App() {
  return (
    <div className="App">

      {/* <NavigationComponent /> */}
     
      <HeaderComponent/>

      <AboutComponent/>

      <ProjectComponent/>

      <ContactFormComponent/>
    
      <FooterComponent />
      
    </div>
  );
}

export default App;
