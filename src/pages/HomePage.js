import React from 'react';
import Hero from '../components/Hero';
import Schedule from '../components/Schedule';
import Exco from '../components/Exco';
import PlanningCommittee from '../components/PlanningCommittee';
import Map from '../components/Map';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Schedule />
      <Exco />
      <PlanningCommittee />
      <Map />
    </>
  );
};

export default HomePage;