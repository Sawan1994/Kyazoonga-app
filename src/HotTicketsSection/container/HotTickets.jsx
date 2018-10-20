import React from 'react';
import { hotTicketsList } from "../../assets/data";
import { TicketCard } from '../components/TicketCard';

export const HotTicketsSection = () => {
    return (
        <section className="hot-ticket-sec ticket-boxes">
            <div className="container">
                <h2 className="site-title">Hot Tickets <small>Get tickets to your favourite events</small></h2>
                <div className="row">
                    {hotTicketsList.map(item => (
                        <TicketCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}