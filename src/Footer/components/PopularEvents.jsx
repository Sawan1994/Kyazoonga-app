import React from 'react';
import { popularEventsList } from "../../assets/data";

export const PopularEvents = () => (
    <ul>
        {popularEventsList.map(item => (
            <li key={item.id}><a href={item.link}>{item.event_name}</a></li>
        ))}
    </ul>
);