import React, {useState} from 'react';
import "./modal.css"
import {Box, TextField} from "@mui/material";

const AddTaskModal = (props) => {

    const [title, setTitle, description, setDescription] = useState();

    function addTask() {
        let dateTime = (new Date().toLocaleDateString()) + ' в ' + new Date().toLocaleTimeString();
        props.data.push({
            "taskId": (props.data.length + 1).toString(),
            "title": title,
            "creationDate": dateTime,
            "taskDescription": description
        });
        console.log(props.data);
    }

    return (
        <div className={props.active ? "modal active" : "modal"} onClick={() => props.setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <h2>Добавление записи</h2>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Title"
                        multiline
                        maxRows={4}
                        onChange={event => setTitle(event.target.value)}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Description"
                        multiline
                        maxRows={4}
                        onChange={event => setDescription(event.target.value)}
                    />
                </Box>
                <button className='open-btn' onClick={addTask}>Добавить</button>
            </div>
        </div>
    );
}

export default AddTaskModal;