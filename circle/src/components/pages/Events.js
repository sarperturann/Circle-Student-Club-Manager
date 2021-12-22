import React from 'react';
import '../../App.css';
import './PageStyles.css';
import EventsCards from '../EventsCards';
import FilteringComponent from '../FilteringComponent';
import eventsList from './eventsList';

// Events
export default function Events() {
    return(
    <> 
    <div class="titlebar">
    <li>
        <h1>Events</h1>
    </li>
        <FilteringComponent eventsList = {eventsList}></FilteringComponent>
    </div>

    <h2>This Week</h2>
    <hr />
    <EventsCards eventsList = {eventsList}/>

    <h2 id="secondTitle">Next Week</h2>
    <hr />
    <EventsCards eventsList = {eventsList}/>

    </>
    );
}