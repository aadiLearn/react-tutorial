import React, { useState } from 'react'
import './TextForm.css'



export default function TextForm(props) {

    const handleOnChange = (event) => { 

        setText(event.target.value);
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

    const handleUpClick = () => {
        // console.log("up is clicked" + text);

        setText(text.toUpperCase())
    }


    const handleDownClick = () => {
        // console.log("downclicked")
        setText(text.toLowerCase())
    }


    const [text, setText] = useState('Enter Here');



    return (
        <div>
            <h2>{props.heading}</h2>
            <div className="form-group">

                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"  ></textarea>
                <br />
                <button className="btn btn-primary" id='buttonUpper' onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary" id='buttonLower' onClick={handleDownClick}>Convert to lowercase</button>
            <button type="submit" onClick={speak} className="btn btn-primary" id='buttonLower'>Speak</button>
            </div>

            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} Words and {text.length} characters</p>
                <p>Will take about {text.split(" ").length*0.008} minutes to read</p>
                <h2>Preview</h2>
                {text}
            </div>
            
        </div>
    )
}

