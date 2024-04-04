import React from 'react';
import './MicrophoneSection.css';
import graph from '../../images/Graph.svg';

const MicrophoneSection = ({ id, values }) => {
  return (
    <div className="micro-wrap">
      <h1>{id} микрофон</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2>График амплитудного спектра</h2>
          <img src={graph} alt="График" />
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '50%',
            justifyContent: 'center',
          }}
        >
          {values.map((item) => (
            <div className="card">
              <span>Максимальное значение</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MicrophoneSection;
