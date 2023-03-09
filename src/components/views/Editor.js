import React, { useState } from 'react';
import {api, handleError} from "../../helpers/api";
import {useHistory, useParams} from "react-router-dom";

function Editor() {
    const history = useHistory();
    const {id} = useParams();
    const [birthDay, setBirthDay] = useState('');
    const [username, setUsername] = useState('');
    const handleChangeBirthDay = (e) => {
        setBirthDay(e.target.value);
    };

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    };

    const checkVerification = async () => {
        const response = await api.get(`/users/${id}`);
        if(response.data.token !== localStorage.getItem("token")){
            history.push(`/users/${id}`);
        }
    }

    checkVerification();

    const handleSubmit = async () => {
        try{
            const birthDayFormat = birthDay ? birthDay + "T00:00:00" : null;
            const body = JSON.stringify({birthDay: birthDayFormat, username: username})
            await api.put(`/users/${id}`, body);
        }
        catch{
            alert(`Something went wrong during editing. Only unique usernames allowed.`)
        }
        history.push(`/users/${id}`);
    };

    return (
        <div>
            <label>
                UserName:
                <input type="text" onChange={handleChangeUsername}/>
            </label>
            <label>
                Birthday:
                <input type="date" onChange={handleChangeBirthDay}/>
            </label>
            <button type="submit" onClick={() => handleSubmit()}>Save</button>
        </div>
    );
}

export default Editor;