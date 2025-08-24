import React from 'react';
import Hero from '../components/Hero';
import Schedule from '../components/Schedule';
import Exco from '../components/Exco';
import PlanningCommittee from '../components/PlanningCommittee';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Schedule />
      <Exco />
      <PlanningCommittee />
    </>
  );
};

export default HomePage;
