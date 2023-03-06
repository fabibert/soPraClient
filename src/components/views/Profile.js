import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {api} from "../../helpers/api";
import user from "../../models/User";

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
        <div>
            {userData ? ( //TODO: maybe delete this line because covered in line 18-19
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
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Profile;