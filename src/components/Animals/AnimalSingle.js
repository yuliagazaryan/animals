import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AnimalSingle = (props) => {
  let { animal } = useParams();
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const url = `https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=3&titles=${animal}`;
  const extractAPIContents = json => {
    const { pages } = json.query;
    return Object.keys(pages).map(id => pages[id].extract);
  };

  const getContents = async () => {
    let resp;
    let contents = [];
    setLoading(true);
    try {
      resp = await fetch(url);
      const json = await resp.json();
      contents = extractAPIContents(json);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
    setContents(contents);
  };

  useEffect(() => {
    getContents();
  }, []);

  if (loading) return "Loading ...";
  if (error) return "An error occurred";

  return <div className="single-page">
    <h1>This is the page for {animal} </h1>
        <img src={`https://source.unsplash.com/1600x900/?${animal}`} alt="animal picture" />
        
        {contents.map(content => (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      ))}

  </div>;
};

export default AnimalSingle;
