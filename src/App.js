import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/dashboard';

const Card = ({ title, content }) => (
  <div className='card'>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

let data = null;

const App = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:3000/tasks')
      .then(res => res.json())
      .then(data => setData(data))
      .then(data => console.log(data));
  }, []);

  // convert data to array

  return (
    <div className='app'>
      <Dashboard>
        {[...new Array(data && data.length)].map((_, i) => (
          <Card
            // use id in data as key
            key={data && data[i].id}
            title={`{data.id} ${i + 1}`}
            content={data && data.map(task => <p>{task.Status}</p>)}
          />
        ))}
      </Dashboard>
    </div>
  );
};

export default App;
