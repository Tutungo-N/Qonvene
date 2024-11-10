import React from 'react';
import event1Image from '../assets/event1.jpg';
import event2Image from '../assets/event2.jpg';
import event3Image from '../assets/event3.jpg';
import event4Image from '../assets/event4.jpg';
import event5Image from '../assets/event5.jpg';
import event6Image from '../assets/event6.jpg';

const EventCarousel = () => {
  const events = [
    { id: 1, title: 'Corporate Gala', image: event1Image, description: 'Happening on 5th December, Corporate Gala brings together top corporate executives across the global ICT sector.' },
    { id: 2, title: 'Bitcoin Networking Event', image: event2Image, description: 'This event brings together all bitcoin enthusiasts across the globe.' },
    { id: 3, title: 'Business Seminar', image: event3Image, description: 'Open to any business person, an entreprenuer, or anyone who thinks of starting a business.' },
    { id: 4, title: 'Virtual Culinary', image: event4Image, description: 'A virtual culinary competition on who can showcase their culinary skills better.'},
    { id: 5, title: 'Dinner Best Practices', image: event5Image, description: 'Teaching chefs the best practices for setting up a corporate dinner table.'},
    { id: 6, title: 'Public Celebration', image: event6Image, description: 'Celebrating world sportmanship virtually.'},
    // Add more events as needed
  ];

  return (
    <div className="py-8 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">Trending Events</h2>
      <div className="flex overflow-x-scroll space-x-4 px-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="min-w-[300px] bg-white shadow-lg rounded-lg p-4 transform transition-transform duration-500 ease-out hover:scale-105"
          >
            <img src={event.image} alt={event.title} className="w-full h-40 object-cover rounded-md mb-4 transition-transform duration-500 ease-out hover:scale-110" />
            <h3 className="text-lg font-bold">{event.title}</h3>
            <p className="text-gray-600">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCarousel;
