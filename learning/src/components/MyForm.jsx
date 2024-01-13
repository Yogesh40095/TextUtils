import React,{useState} from "react";




export default function MyForm(props) {
    const changeUp = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uprecase", "Success");
    }
    const changeLo = ()=>{
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "Success");
    }
    const clear = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert(" Texe is  cleared", "Success");
    }
    const onChangeing = (event)=>{
        setText(event.target.value);
    }
    const[text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#142c6e'}}>
            <h1>{props.head}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'gray':'white',color: props.mode==='dark'?'white':'#142c6e'}} value={text} onChange={onChangeing} id="myText" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={changeUp}>Change to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={changeLo}>Change to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={clear}>Clear text</button>
        </div>
        <div className="container my-3"  style={{color: props.mode==='dark'?'white':'#142c6e'}}>
            <h1>Text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
