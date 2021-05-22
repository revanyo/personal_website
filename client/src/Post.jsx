import React, { useState, useEffect } from 'react';

import axios from 'axios';


export default function Post(props) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    return (
        <div>
            <form>
                <input value="Enter Title" onChange={(e) => setTitle(e.target.value)}></input>
                <input value="Enter Text" onChange={(e) => setBody(e.target.value)}></input>
                <input type="submit" onClick={() => props.post(title, body)}></input>
            </form>
        </div>
    )
}