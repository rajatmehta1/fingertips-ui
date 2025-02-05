import logo from './logo.svg';
import './App.css';
import SideNav from './components/sidenav';
import MainContent from './components/maincontent';

function App() {
  return (
    <div className="g-sidenav-show bg-gray-100">
      <SideNav/>
      <MainContent/>
     </div> 
  );
}

export default App;
