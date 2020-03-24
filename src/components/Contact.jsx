import React from 'react';

function Contact(props) {
    return (
        <section className="contact">
            <ContactDescription contact={props.contact} accounts={props.accounts}/>
            {/* <ContactImage image={props.contact.image}/> */}
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

function Account(props) {
    const icon = `fab fa-${props.name}`;
    
    return (
        <a href={props.url}>
            <i className={icon}></i>
      </a>
    );
}

function ContactImage(props) {
    return (
        <section className="image">
            <img src={props.image} ></img>
        </section>
    );
}

export default Contact;