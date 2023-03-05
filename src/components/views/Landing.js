import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Button} from 'components/ui/Button';
import 'styles/views/Login.scss';
import BaseContainer from "components/ui/BaseContainer";

const Landing = props => {
    const history = useHistory();

    const handleLoginClick = () => {
        history.push('/login');
    };

    const handleRegisterClick = () => {
        history.push('/register');
    };

    return (
        <BaseContainer>
            <div className="landing button-container">
                <Button
                    onClick={handleLoginClick}
                >
                    Login
                </Button>
            </div>
            <div className="landing button-container">
                <Button
                    onClick={handleRegisterClick}
                >
                    Register
                </Button>
            </div>
        </BaseContainer>
    );
};

export default Landing;
