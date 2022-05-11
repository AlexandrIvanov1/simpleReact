import React from 'react';
import './App.css';
import { Accordion } from './components/accordion/Accordion';
import {Rating} from "./components/rating/Rating";
import {OnOff} from "./components/onOff/OnOff";



function App() {
    return (
        <div style={{margin: '30px'}}>
            <Accordion title='menu' collapsed={true}/>
            <Accordion title='user' collapsed={false}/>

            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

            <OnOff toggle={false}/>
            <OnOff toggle={true}/>
        </div>
    );
}

export default App;
