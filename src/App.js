import { useEffect, useState } from 'react';
import './App.css';
import Questions from './Questions';
import axios from 'axios'
import data from './data'

function App() {



  return (
    <main>
    <div className="container">
      <h2>Question and Answers</h2>
      <section className='info'>
      {data?.map((d)=>{
        return(
          <>
          <Questions d={d} key={d.id}/>
          </>
        )
      })}
      </section>
    </div>
    </main>
  );
}

export default App;
