
import { v4 as uuidv4 } from 'uuid';
import './userForm.css'

export function UserForm ({setUser}) {

    async function handleSubmit (e) {
        e.preventDefault();
        const userName = e.target.user.value;
        const _id = uuidv4();
        const userCreatedResponse = await fetch(`http://localhost:5000/user/${_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName,
                _id,
            })
        })
        const userCreated = await userCreatedResponse.json();
        console.log(userCreated)
        setUser(userCreated);
        e.target.user.value = '';
    }
    return (
        <form onSubmit={handleSubmit} className='userForm'>
            <input type={'text'} name='user'/>
            <input type={'submit'}/>
        </form>
    )
}