import React, { useState, useEffect, useRef } from 'react';

const Testimonials = () => {
  // Target values for each statistic
  const targetEvents = 100;
  const targetConnections = 5000;
  const targetRating = 4.8;

  // State variables for counting animation
  const [eventsCount, setEventsCount] = useState(0);
  const [connectionsCount, setConnectionsCount] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const sectionRef = useRef(null);

  // Incremental speed and duration for counting
  const duration = 5000; // in milliseconds
  const incrementSpeed = 20; // in milliseconds

  useEffect(() => {
    // Intersection Observer setup
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isCounting) return;
    // Increment function to update each count
    const incrementCount = (setCount, target) => {
      const increment = target / (duration / incrementSpeed);
      const interval = setInterval(() => {
        setCount((prevCount) => {
          const newCount = prevCount + increment;
          if (newCount >= target) {
            clearInterval(interval);
            return target;
          }
          return newCount;
        });
      }, incrementSpeed);
    };

    // Start counting animations
    incrementCount(setEventsCount, targetEvents);
    incrementCount(setConnectionsCount, targetConnections);
    incrementCount(setRatingCount, targetRating);

    // Clean up intervals on component unmount
    return () => {
      clearInterval(incrementCount);
    };
  }, [isCounting]);

  return (
    <section ref={sectionRef} className="py-12 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-8">Why People Love QonVene</h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
        <div className="space-y-4">
          <p className="text-2xl font-bold">{Math.round(eventsCount)}+</p>
          <p>Events Hosted</p>
        </div>
        <div className="space-y-4">
          <p className="text-2xl font-bold">{Math.round(connectionsCount)}+</p>
          <p>Connections Made</p>
        </div>
        <div className="space-y-4">
          <p className="text-2xl font-bold">{ratingCount.toFixed(1)}/5</p>
          <p>Average Rating</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

