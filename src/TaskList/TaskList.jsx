import React from 'react';
import {List, ListItem, ListItemText, Typography} from "@mui/material";

const TaskList = (props) => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                props.data.map((value) => (
                <ListItem
                    key={value.taskId}
                    alignItems="flex-start" >

                    <ListItemText
                        primary={`${value.creationDate} ${value.title}` }
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="textPrimary"
                                >
                                    {` ${value.taskDescription}`}
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
                ))}
        </List>
    );
}

export default TaskList;