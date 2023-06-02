import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data)
  console.log(people)
  return (
    <main>
      <section className='container'>
        <h2 style={{textAlign:'center'}}>Birthdays Reminder</h2>
        <h3 style={{textAlign:'center'}}>{people.length} birthdays today </h3>
        <List people={people} />
<button onClick={()=> setPeople([])}>Clear All</button>
      </section>

    </main>
  )
}

export default App;
