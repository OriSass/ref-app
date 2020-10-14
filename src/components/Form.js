import React, {useState, useRef} from 'react'

function Form(props) {

    const [user, setUser] = useState();
    const [content, setContent] = useState();
    const userRef = useRef();
    const contentRef = useRef();

    const handleKey = (keyCode, origin) => {
        if(keyCode === 13) {
            switch(origin) {
                case 'user':
                    contentRef.current.focus();
                    break;
                case 'content':
                    userRef.current.focus();
                    break;
            }
        }
    }
    return (
        <div>
        {console.log(props)}
        <div key="form-header">
                <h2>Add a header!</h2>
        </div>
        <div key="form-inputs">
          <input type="text" placeholder="User" ref={userRef} required 
            onChange={(e) => setUser(e.target.value)}
            onKeyUp={(e) => handleKey(e.keyCode, "user")} />
          <input type="text" placeholder="Content" ref={contentRef} required 
             onChange={(e) => setContent(e.target.value)}
             onKeyUp={(e) => handleKey(e.keyCode, "content")} />
          <button onClick={() => props.onSubmit({ user, content })}> Submit </button>
        </div>
        </div>
    )
}

export default Form
