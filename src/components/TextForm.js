import React, {useState} from 'react'

export default function TextForm(props){
  const [text, setText] = useState("");

  const handleOnChange = (event)=>{
    setText(event.target.value);
    console.log(event.target.value);
  }

  const handleUpClick = ()=>{
    let newEditedText = text.toUpperCase();
    setText(newEditedText);
    props.showAlert("Converted To Uppercase","success");
  }

  const handleLoClick = ()=>{
    let newEditedText = text.toLocaleLowerCase();
    setText(newEditedText);
    props.showAlert("Converted To Lowercase","success");
  }

  const handleclearClick = ()=>{
    setText("");
    props.showAlert("Text Cleared","success");
  }

  const handleCopy = ()=>{
    let copiedText = text;
    navigator.clipboard.writeText(copiedText); 
    document.getSelection().removeAllRange();
    props.showAlert("Copied To Clipboard","success");
  }

  const handleExtraSpaces = ()=>{
    let editedText = text.split(/[ ]+/);
    setText(editedText.join(" ")); 
    props.showAlert("Removed Extra Spaces","success");
  }

  const handleFirstUpperClick = ()=>{
    const lower = text.toLowerCase();
    let splitText = lower.split(" ");
    let editedText = splitText[0].toString().charAt(0).toUpperCase() +splitText[0].toString().slice(1)+" ";

    for(let i=1;i<splitText.length;i++){
            let temp = splitText[i].toString();
          if(editedText.slice(-2)===". "){
            temp = temp.charAt(0).toUpperCase() + temp.slice(1);
          }
          editedText = editedText + temp + " ";

    }
    console.log(editedText);
    setText(editedText);
    props.showAlert("First Letters Are Converted to Uppercase","success");

  }
  return (
    <>
    <div className='container'>
        <h1 style={{color : props.mode==='light'?'#33b0ec':'white'}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode==='dark'?'#1C0C5B':'white', color:props.mode==='light'?'black':'white'}} id="myBox" rows="8" spellCheck="true"></textarea>

            <button disabled={text.length===0} type="button" className="btn btn-outline-primary mx-2 my-2 btn-light" style={{backgroundColor:props.btnColor, color:props.btnText}} onClick={handleUpClick}>Convert To Uppercase</button>

            <button disabled={text.length===0} type="button" className="btn btn-outline-primary mx-2 my-2 btn-light" style={{backgroundColor:props.btnColor, color:props.btnText}} onClick={handleLoClick}>Convert To Lowercase</button>

            <button disabled={text.length===0}  type="button" className="btn btn-outline-primary mx-2 my-2 btn-light" style={{backgroundColor:props.btnColor, color:props.btnText}} onClick={handleclearClick}>Clear Text</button>

            <button disabled={text.length===0}  type="button" className="btn btn-outline-primary mx-2 my-2 btn-light" style={{backgroundColor:props.btnColor, color:props.btnText}} onClick={handleCopy}>Copy Text</button>

            <button disabled={text.length===0}  type="button" className="btn btn-outline-primary mx-2 my-2 btn-light" style={{backgroundColor:props.btnColor, color:props.btnText}} onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            <button disabled={text.length===0}  type="button" className="btn btn-outline-primary mx-2 my-2 btn-light" style={{backgroundColor:props.btnColor, color:props.btnText}} onClick={handleFirstUpperClick}>Capitalize First Letter of Sentence</button>

            
        </div>
    </div>
    <div className="container my-3" style={{color : props.mode==='light'?'#33b0ec':'white'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing To Preview"}</p>

    </div>
    </>
  )
}
