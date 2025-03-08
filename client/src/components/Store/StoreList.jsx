import React,  { useEffect, useState } from 'react';
import axios from 'axios';

const StoreList = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetch('')
      .then((res) => res.json())
      .then((data) => setStores(data));
  }, []);

  return (
    <div>
      {stores.map((store) => (
        <div key={store.id}>
          <h3>{store.name}</h3>
          <p>{store.address}</p>
        </div>
      ))}
    </div>
  );
};

export default StoreList;
