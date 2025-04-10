import React from 'react';
import Creature from './Creature';

const Creatures = ({ creatures }) => {
// const Creatures = ({ creatures = [] }) => {  // chatgpt fix (tbc)
  return (
    <section>
        <div className="title">
            <h2>hyrule creatures</h2>
            <div className='underline'></div>
        </div>
        <div>
            {creatures.map((creature) => {
                return <Creature key={creature.id} {...creature}></Creature>
            })}
        </div>
    </section>
  );
};

export default Creatures;