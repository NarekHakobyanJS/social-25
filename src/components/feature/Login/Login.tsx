
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, type ChangeEvent } from 'react';
import Button from '@mui/material/Button';
import { useAppDispatch } from '../../../store/hooks';
import { loginThunk } from '../../../store/slices/authSlice';


export default function Login() {
    const dispatch = useAppDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault(); // form-ի reload-ը կանխելու համար
        dispatch(loginThunk({ email, password }))
    };

    return (
        <Box
            onSubmit={handleSubmit}
            component="form"
            sx={
                {
                    width: '600px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    margin: '60px auto'
                }
            }
            noValidate
            autoComplete="off"
        >
            <TextField
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                label="Email"
                variant="outlined" />
            <TextField
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                label="Password"
                variant="outlined" />
            <Button type='submit' variant="contained" color="success">
                Login
            </Button>
        </Box>
    );
}