import React, { useState, useEffect } from 'react';

const App = () => {
  const [questions, setQuestions] = useState([]);
  
  useEffect(() => {
    let isMounted = true; // Track whether the component is mounted

    fetch('http://localhost:4000/questions')
      .then(response => response.json())
      .then(data => {
        if (isMounted) {
          setQuestions(data); // Update state only if mounted
        }
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });

    return () => {
      isMounted = false; // Cleanup: set to false when unmounted
    };
  }, []);

  // Render component
  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};

export default App;
