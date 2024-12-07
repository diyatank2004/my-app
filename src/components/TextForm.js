import React, { useState } from 'react';//hooks = useState

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }

    const handleLcClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const removeSpaces = () => {
        let newText = text.replace(/\s+/g, " ").trim();
        setText(newText);
        props.showAlert("Removed spaces","success");
    }

    const clearText = () => {
        setText("");
        props.showAlert("Cleared text","success");
    }

    const copyClipB = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard","success");
    }

    const reverseText = () => {
        let newText = text.split(" ").reverse().join(" ");
        setText(newText);
        props.showAlert("Text Reversed","success");
    }

    // const findReplace = (findWord, replaceWord) => {
    //     const regex = new RegExp(findWord, 'gi');
    //     let newText = text.replace(regex, replaceWord);
    //     setText(newText);
    // }

    const [text, setText] = useState("");

    return (
        <>
            <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} style={{backgroundColor:props.mode==="dark"?"#092855":"white",color:props.mode==="dark"?"white":"black"}} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-secondary mx-2" onClick={handleLcClick}>Convert To Lowercase</button>
                <button className="btn btn-success mx-2" onClick={removeSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-warning mx-2" onClick={copyClipB}>Copy to Clipboard</button>
                <button className="btn btn-info mx-2" onClick={reverseText}>Text Reversal</button>
                {/* <button className="btn btn-info mx-2" onClick={() => findReplace("findWord", "replaceWord")}>Find and Replace</button> */}
                <button className="btn btn-danger mx-2" onClick={clearText}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h2>Text Summary</h2>
                <p>{text.split(" ").filter(word => word !== "").length} words and {text.replace(/\s+/g, '').length} characters</p>
                <p>{0.008 * text.split(" ").filter(word => word !== "").length} Minutes read</p>
                <h3>Preview the text</h3>
                <p style={{border:"2px solid",padding:"5px"}}>{text.length>0?text:"Enter Something to preview it here"}</p>
            </div>
        </>
    );
}
