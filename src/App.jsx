import React, { useContext } from "react";
// import {hot} from "react-hot-loader";
import content from "./content";
import ThemeContext, { ThemeProvider } from "./context/ThemeContext";
import NavigationBar from "./components/NavigationBar";
import Contact from "./components/Contact";
import Trajectory from "./components/Trajectory";

function ThemeSwitcher(props) {
  const context = useContext(ThemeContext);
  const switchTheme = () => {
    context.toggleDark();
  }
  
  return (context.dark ? 
    <button id="themeSwitcher" onClick={switchTheme}>🌞</button> 
    : 
    <button id="themeSwitcher" onClick={switchTheme}>🌚</button>
  );
}

function PortfolioShowcase() { 
  return (
    <section className="projects">
      {/* <h2>{content.projects.length > 1 ? `This is a list of the projects I've worked on:` : `This is the project I've worked on:`}</h2> */}
      <h2>{`A cool site in progress! :)`}</h2>
    </section>
  );
}

function Header(props) {
  return (
    <div className="header">
      <Contact contact={props.contact} accounts={props.accounts}/>
      <ThemeSwitcher/>
    </div>
  )
}

function Main(props) {
  return(
    <main className="main">
      <Header contact={props.content.contact} accounts={props.content.accounts}/>
      {/* <PortfolioShowcase/> */}
      <Trajectory trajectory={props.content.trajectory}/>
    </main>
  );
}

function App() {
  return (
      <ThemeProvider>
        <Main content={content}/>
      </ThemeProvider>
  );
}

export default App;