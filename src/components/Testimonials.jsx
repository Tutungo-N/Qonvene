import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-8">Why People Love QonVene</h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
        <div className="space-y-4">
          <p className="text-2xl font-bold">100+</p>
          <p>Events Hosted</p>
        </div>
        <div className="space-y-4">
          <p className="text-2xl font-bold">5,000+</p>
          <p>Connections Made</p>
        </div>
        <div className="space-y-4">
          <p className="text-2xl font-bold">4.8/5</p>
          <p>Average Rating</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

