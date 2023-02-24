import { useState, useEffect } from 'react';
import axios from 'axios';

export function getBuyerInfo() {
  const [List, setList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/')
      .then(response => {
        setList(response.data);
        // console.log(response.data);
      });
  }, []);

  return List;
}

export function getBuyerList() {
  const [list, setList] = useState<string>();

  useEffect(() => {
    (async () => {
      setList(
        await axios.get('http://localhost:3001/list').then((result) => {

          return JSON.stringify(result.data);
        })
      );
    })();
  });

  // console.log(list);
  return (list ? JSON.parse(list) : []);
}