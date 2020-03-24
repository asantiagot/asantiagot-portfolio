import React from 'react';

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

  export default Trajectory;