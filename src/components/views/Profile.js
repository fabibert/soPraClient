import {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {api, handleError} from "../../helpers/api";
import user from "../../models/User";
import BaseContainer from "components/ui/BaseContainer";
import 'styles/views/Profile.scss';
import User from "../../models/User";

const Profile = () => {
    const {id} = useParams();
    const [userData, setUserData] = useState(null);

    const history = useHistory();

    const edit = () => {
            // Login successfully worked --> navigate to the route /game in the GameRouter
            history.push(`/users/${id}/editor`);
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get(`/users/${id}`);
            setUserData(response.data);
        };
        fetchData();
    }, [id]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <BaseContainer>
            {userData.token === localStorage.getItem("token") ? (
                <div>
                    <button onClick={() => edit()}>
                        edit
                    </button>
                </div>
            ) : null
            }
            <div className="profile container">
                <div className="profile info">
                    <div>
                        <h1>User Information</h1>
                        <p>
                            <strong>Username:</strong> {userData.username}
                        </p>
                        <p>
                            <strong>Status:</strong> {userData.status}
                        </p>
                        <p>
                            <strong>CreationDate:</strong> {userData.creationDate}
                        </p>
                        <p>
                            <strong>Birthday:</strong> {userData.birthDay}
                        </p>
                    </div>
                </div>
            </div>
        </BaseContainer>
    );
};

export default Profile;