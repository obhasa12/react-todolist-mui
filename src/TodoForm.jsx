import { useState } from 'react';
import { ListItem, TextField, InputAdornment, IconButton } from '@mui/material';
import { Create } from '@mui/icons-material';

function TodoForm({addTodo}) {
    const [text, setText] = useState("")

    const handleChange = (e) => {
        setText(text => e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }

    return (  
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="standard-basic" 
                    label="Add Todo" 
                    variant="standard" 
                    onChange={handleChange}
                    value={text}
                    InputProps = {{
                        endAdornment : (
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="create todo"
                                edge="end"
                                type='submit'
                                >
                                    <Create />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </form>
        </ListItem>
    );
}

export default TodoForm;