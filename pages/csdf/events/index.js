import { useState } from 'react';
import { useRouter } from 'next/router';

function EventList( {eventList, categoryData, optionSelected} ) {

    const [events, setEvents] = useState(categoryData);
    const [selected, setSelected] = useState(optionSelected.category);
    const router = useRouter();
    const categoryList = [];
    
    function search(value, key, myArray){
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i][key] === value) {
                return myArray[i];
            }
        }
    }

    const fetchEvents = async (e)=> {
        const category = (e.target.value !== 'all') ? `?category=${e.target.value}` : '';
        const response = await fetch(`http://localhost:4000/events${category}`);
        const data = await response.json();
        setSelected(e.target.value);
        setEvents(data);
        router.push(`/csdf/events${category}`, undefined, {shallow: true});
    }
    
    return (
        <div>
            {
                eventList.map((event) => {
                    // Remove duplicate category on the select options
                    if( !search(event.category, 'category', categoryList) ) {
                        categoryList.push(event)
                    }
                })
            }
            <select onChange={fetchEvents} defaultValue={selected}>
                <>
                    <option value="all">All</option>
                </>
                {
                    categoryList.map((event) => {
                        return (
                            <option key={event.id} value={event.category}>{event.category}</option>
                        )
                    })
                }
            </select>
            <h1>List of events</h1>
            {
                events.map((event) => {
                    return (
                        <div key={event.id}>
                            <h2>
                                {event.id} {event.title} {event.date} | {event.category}
                            </h2>
                            <p>{event.description}</p>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export async function getServerSideProps(context) {
    const { query } = context;
    let { category } = query;
    const queryString = category ? `category=${category}` : '';
    const eventsResponse = await fetch(`http://localhost:4000/events`);
    const eventData = await eventsResponse.json();
    const categoryResponse = await fetch(`http://localhost:4000/events?${queryString}`);
    const categoryData = await categoryResponse.json();
    category = (typeof category !== 'undefined') ? category : 'all';
    return {
        props: {
            eventList: eventData,
            categoryData: categoryData,
            optionSelected: {category : `${category}`}
        }
    }
}


export default EventList;