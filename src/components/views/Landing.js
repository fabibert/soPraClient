import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Button} from 'components/ui/Button';
import 'styles/views/Landing.scss';
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
            <div className="landing container">
                <div className="landing form">
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
                </div>
            </div>
        </BaseContainer>
    );
};

export default Landing;
