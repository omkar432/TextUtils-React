import React from 'react'

export default function About(props) {
    
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    let myStyle = {
      color: props.mode === 'dark'?'white':'black',
      backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
      // border: '2px solid',
      // borderColor: props.mode === 'dark'?'white':'#042743'
    }

  return (
    <div className="container">
        <h1 className="my-3" style={{color: props.mode === 'dark'?'white':'black'}}>About Us</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>
        Textutils gives you a way to analyze your text quickly abd efficiently. Be it word count, 
        character count or
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
         <strong>Free to use</strong>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils is a free character counter tool that provides instant character count & word 
        count statistics for a given text. TextUtils reports the number of words and characters.
        Thus it is suitable for writing text with word/ character limit.
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>
        This word counter software in any web browsers such as Chrome, Firefox, Internet Explorer, 
        Safari, Opera. It suits to count characters in facebook, blog, books, excel document,
        pdf document, essays, etc.
         </div>
    </div>
  </div>
</div>
</div>
  )
}
