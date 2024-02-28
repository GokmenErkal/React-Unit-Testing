import React, { useState } from 'react'

function Todo() {

    const [text, setText] = useState("");
    const [items, setItems] = useState([]);

    return (
        <div>
            <label>
                Text
                <input value={text} onChange={(e) => setText(e.target.value)} />
            </label>
            <button onClick={() => { setItems([...items, text]); setText(''); }}>Ekle</button>

            <div>
                <ul>
                    {
                        items.map((item, key) => (
                            <li key={key}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Todo