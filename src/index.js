import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';

const Root = () => {
  let [message, setMessage] = useState('no good');
  useEffect(() => {
    async function getMessage() {
      const text = await axios.get('/message');
      setMessage(text.data.text);
    }
    getMessage();
  }, []);

  return <h1>{message}</h1>;
};

const root = createRoot(document.getElementById('root'));

root.render(<Root />);
