// import React, { useEffect, useState } from 'react';

// const Home = () => {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:5000/api/message')
//       .then((response) => response.json())
//       .then((data) => setMessage(data.message));
//   }, []);

//   return (
//     <div>
//       <h1>Home</h1>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from 'react';

const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Use a relative path here
    fetch('/api/message')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <p>{message}</p>
    </div>
  );
};

export default Home;
