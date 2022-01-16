import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const App = (props) => {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password == "" || email == "") {
            alert("All fields are mandatory");
            return;
        }
        props.addContactHandler({ "password": password, "email": email });
        setPassword('');
        setEmail('');
        navigate('/');
    }

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='email'>Email: </label>
                    <input
                        type='email'
                        id='email'
                        name='emial'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password: </label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default App;
