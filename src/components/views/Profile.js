import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {api} from "../../helpers/api";
import user from "../../models/User";
import BaseContainer from "components/ui/BaseContainer";
import 'styles/views/Profile.scss';

const Profile = () => {
    const {id} = useParams();
    const [userData, setUserData] = useState(null);

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
                    <button>edit</button>
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