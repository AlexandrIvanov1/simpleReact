import React from 'react';
import './App.css';
import { Accordion } from './components/accordion/Accordion';



function App() {
    return (
        <div style={{margin: '30px'}}>
            <Accordion title='menu' collapsed={true}/>
            <Accordion title='user' collapsed={false}/>
        </div>
    );
}

export default App;
