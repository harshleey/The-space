import React, { useEffect, useState } from "react";
import data from "../data.json"


const Destination = ({ tab }) => {
  const [activeTab, setActiveTab] = useState("1");
  const [destinationData, setDestinationData] = useState(data.destinations);

  const handleClick = (e) => {
    setActiveTab(e.target.id)
  }


  return (
    <section className="destination">
      <div className="dest-left">
      <h2 className="destination-heading">01 Pick a Destination</h2>

        <div className='destination-images'>
            {destinationData.map((tab, i) =>
                <div key={i}>
                    {activeTab === `${tab.id}` && 
                    <img src={tab.images.png} className="destination-img" alt={`${tab.name} - image`}/>}
                </div>
            )}
        </div>
      </div>
      
      <div className="dest-right">
        <div className='destination-tabs'>
            {destinationData.map((tab, i) =>
                <button className="destination-tab" key={i} id={tab.id} disabled={activeTab === `${tab.id}`} onClick={(handleClick)}>{tab.name}</button>
            )}
        </div>
        
        <div className='destination-content'>
            {destinationData.map((tab, i) =>
                <div key={i}>
                    {activeTab === `${tab.id}` && 
                    <div>
                      <p className='destination-title'>{tab.name}</p>
                      <p className="dest-description">{tab.description}</p>
                    </div>}
                </div>
            )}
        </div>

        <div className='destination-footer'>
            {destinationData.map((tab, i) =>
                <div key={i}>
                    {activeTab === `${tab.id}` && 
                    <div className="distance-time">
                      <div className="distance">
                        <h3>AVG. DISTANCE</h3>
                        <p className='dest-kilo'>{tab.distance}</p>
                      </div>

                      <div className="travel-time">
                        <h3>EST. TRAVEL TIME</h3>
                        <p className="dest-travel">{tab.travel}</p>
                      </div>
                      
                      
                    </div>}
                </div>
            )}
        </div>
      </div>
      
    </section>
  );
};


export default Destination;

