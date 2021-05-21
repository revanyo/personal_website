import React, { useState, useEffect } from 'react';

import axios from 'axios';


export default function Post(props) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')


    function post(e) {
        axios.post('/blogs', {
            title: title,
            body: body
        }).then(() => {
            window.alert('Success');
        })
    }

    return (
        <div>
            <form>
                <input onChange={(e) => setTitle(e.target.value)}></input>
                <input onChange={(e) => setBody(e.target.value)}></input>
                <input type="submit" onClick={() => post()}></input>

            </form>
        </div>
    )
}