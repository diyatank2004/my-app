import React from 'react';

export default function About(props) {
  const getStyle = () => {
    return {
      color: props.mode === "dark" ? "white" : "#052d67",
      backgroundColor: props.mode === "dark" ? "#052d67" : "white",
    };
  };

  return (
    <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <h2 className="my-3">About TextUtils</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={getStyle()}>
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={getStyle()}>
              What is TextUtils?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>TextUtils is a simple tool to analyze text.</strong> It allows users to perform various operations on their text, such as converting it to uppercase or lowercase, removing extra spaces, reversing the text, and more.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={getStyle()}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={getStyle()}>
              Key Features
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>TextUtils offers various useful features:</strong>
              <ul>
                <li>Convert text to uppercase or lowercase</li>
                <li>Remove extra spaces</li>
                <li>Reverse text for fun transformations</li>
                <li>Copy text to clipboard with a single click</li>
                <li>Clear text with one click</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item" style={getStyle()}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={getStyle()}>
              Why use TextUtils?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>TextUtils is fast, easy, and efficient.</strong> It provides a quick way to manipulate and analyze your text directly in the browser without needing additional tools.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
