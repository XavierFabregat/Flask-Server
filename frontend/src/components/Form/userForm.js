
import { v4 as uuidv4 } from 'uuid';
import './userForm.css'

export function UserForm ({setUser}) {

    async function handleSubmit (e) {
        e.preventDefault();
        const method = e.target.method.value;
        const userName = e.target.user.value;
        const _id = uuidv4();
        const searchQuery = (method === 'POST') ? _id : userName;
        const userCreatedResponse = await fetch(`http://localhost:5000/user/${searchQuery}`, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: method === 'POST' ? JSON.stringify({
                userName,
                _id,
            }) : null
        })
        const userCreated = await userCreatedResponse.json();
        console.log(userCreated)
        setUser(userCreated);
        e.target.user.value = '';
    }
    return (
        <form onSubmit={handleSubmit} className='userForm'>
            <input type={'text'} name='user'/>
            <select name='method'>
                <option value={'GET'}> GET </option>
                <option value={'POST'}> POST </option>
            </select>
            <input type={'submit'}/>
        </form>
    )
}