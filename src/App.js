import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [distance, setDistance] = useState(0);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state
  
useEffect(() => {
  const interval = setInterval(() => {
    fetch("http://localhost:5000/api/route")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch distance");
        }
        return res.json();
      })
      .then((data) => {
        setDistance(data.distance);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, 1000); // Fetch every 1 second

  return () => clearInterval(interval); // Clear the interval on component unmount
}, []);


  const [zoomLevel, setZoomLevel] = useState(1);
  const [lefteye, setLefteye] = useState(0);
  const [righteye, setRighteye] = useState(0);

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.1, 8));
    setLefteye((prevLeft) => prevLeft + 0.25);
    setRighteye((prevRight) => prevRight + 0.25);
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 0.5));
    setLefteye((prevLeft) => prevLeft - 0.25);
    setRighteye((prevRight) => prevRight - 0.25);
  };

  return (
    <>
      <div className="app">
          <div className="alert">
            <h5><strong>Note : </strong>This is just a Prototype Not An Actual product</h5>
          </div>
        <div
          className="text"
          style={{
            transform: `scale(${zoomLevel})`,
            transition: "transform 0.3s ease",
          }}
        >

         <br />
         <br />
          <label id="l5">you to the cat up dog</label>
          <br />
          <label id="l6">and is play come you see</label>
          <br />
          <label id="l7">for not to look my you for the</label>
          <br />
          <label id="l8">or the not dog cat you to see</label>
          <br />
          <label id="l9">up to play see the see the look any</label>
          <br />
          <label id="l10">for call play not up play</label>
          <br />
          <label id="l11">my is dog you up come </label>
          <br />
          <label id="l12">for not to look my you for the</label>
          <br />
          <label id="l13">or the not dog cat you to see</label>
          <br />
          <label id="l14">up to play see the see</label>
          <br />
          <label id="l15">for call play not up play</label>
          <br />
          <label id="l16">my is dog you up come </label>
          <br />
        </div>

        <div className="output">
          <div className="btn">
            <button onClick={handleZoomIn}>Zoom In</button>
            <button onClick={handleZoomOut}>Zoom Out</button>
          </div>
          Zoom Level<input type="text" value={zoomLevel.toFixed(2)} readOnly />
          <div className="left">
            <label>Left Eye</label>
            <input type="text" value={lefteye.toFixed(2)} readOnly />
          </div>
          <div className="right">
            <label>Right Eye</label>
            <input type="text" value={righteye.toFixed(2)} readOnly />
          </div>
          {loading ? (
            <h5>Loading distance...</h5>
          ) : error ? (
            <h5>Distance: {error}</h5>
          ) : (
            <h5>Distance: {distance} cm</h5>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
