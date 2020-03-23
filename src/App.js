import React, { useContext } from "react";
// import {hot} from "react-hot-loader";
import content from "./content";
import ThemeContext, { ThemeProvider } from "./context/ThemeContext";

function NavigationItem(props) {
  return (
    <li>
      <a href={`#${props.itemName}`}>
        {props.itemName.toUpperCase()}
      </a>
    </li>
  );
}

function NavigationBar(props) {
  return (
    <nav id="site-nav" role="navigation">
      <ul>
        {props.categories.map((value, index) => {
          return <NavigationItem key={index} itemName={value}/>
        })}
      </ul>
    </nav>
  );
}

// MARK: Accounts

function Account(props) {
  const icon = `fab fa-${props.name}`;

  return (
    <a href={props.url}>
      <i className={icon}>
      </i>
    </a>
  );
}

// MARK: Contact info

function ContactAccounts(props) {
  const keys = Object.keys(props.accounts);
  return (
    <section className="accountBar">
      {keys.map((value, index) => {
        return(
          <Account name={value} key={index} url={props.accounts[value]}/>
        );
      })}
    </section>
  );
}

function ContactDescription(props) {
  return (
    <section className="description">
      <h1>{props.contact.name}</h1>
      <h2>{props.contact.currentRole}</h2>
      {/* <h3>
        {`${props.contact.age} years old ${props.contact.currentRole} from ${props.contact.location}. Currently working at ${props.contact.company}.`}
      </h3> */}
      <ContactAccounts accounts={props.accounts}/>
    </section>
  );
}

function ContactImage(props) {
  return (
    <section className="image">
      <img src={props.image} ></img>
    </section>
  );
}

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

  // const button = context.dark ? <button id="themeSwitcher" onClick={switchTheme}>🌞</button> : <button id="themeSwitcher" onClick={switchTheme}>🌚</button>;  
  // return button;

  // return <h1>HI!</h1>;
}

function Contact(props) {
  return (
    <section className="contact">
        <ContactDescription contact={props.contact} accounts={props.accounts}/>
        {/* <ContactImage image={props.contact.image}/> */}
    </section>
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

function TrajectoryItem(props) {
  const options = {dateStyle: 'short', weekday: 'long', year: 'numeric', month: 'long'};
  const start = `${props.startDate.toLocaleDateString("en-US", options)}`;
  const end = props.endDate ? ` - ${props.endDate.toLocaleDateString("en-US", options)}` : ' - today';
  const date = start + end;
  return(
    <section className="trajectoryItem">
      <div className="trajectoryHeading">
        <h3 className="company">{props.company}</h3>
        <h3>{`(${date})`}</h3>
      </div>
      <h4 className="role">{props.role}</h4>
      <p>{props.description}</p>
    </section>
  );
}

function Trajectory(props) {
  const exp = Object.keys(props.trajectory);
  exp.reverse();
  return(
    <section className="trajectory">
      <h2>Trajectory</h2>
      {exp.map((value, index) => {
        return (
          <TrajectoryItem exp={value} 
                          key={index} 
                          company={props.trajectory[value].company}
                          role={props.trajectory[value].role}
                          description={props.trajectory[value].description}
                          startDate={props.trajectory[value].date.start}
                          endDate={props.trajectory[value].date.end}
                          />
        );
      })}
  </section>
  );
}

function NavigationHeader(props) {
  return (
    <div className="navigationHeader">
      <Contact contact={props.contact} accounts={props.accounts}/>
      <ThemeSwitcher/>
    </div>
  )
}

function Main(props) {
  return(
    // <ThemeProvider>    Commenting since at this moment we don't need to provide the Context from this level
    <main className="main">
      <NavigationHeader contact={props.content.contact} accounts={props.content.accounts}/>
      {/* <Contact contact={props.content.contact} accounts={props.content.accounts}/> */}
      {/* <PortfolioShowcase/> */}
      <Trajectory trajectory={props.content.trajectory}/>
    </main>
    // </ThemeProvider>
  );
}

function Portfolio() {

  let categories = Object.keys(content);
  return (
    // <React.Fragment>
      // {/* <NavigationBar categories={categories}/> */}
      <ThemeProvider>
        <Main content={content}/>
      </ThemeProvider>
    // </React.Fragment>
  );
}

// export default hot(module) (Portfolio);

export default Portfolio;