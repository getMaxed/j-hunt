import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const Logout = ({ username, logout }) => {
    console.log(username);
    return (
        <div
            style={{
                position: 'fixed',
                right: '10px'
            }}
        >
            <p style={{ margin: 0, padding: 0 }}>{username}</p>
            <svg
                onClick={() => logout()}
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="50px"
                height="50px"
                viewBox="0 0 490.3 490.3"
                style={{ enableBackground: 'new 0 0 490.3 490.3' }}
                xmlSpace="preserve"
            >
                <g>
                    <g>
                        <path
                            d="M0,121.05v248.2c0,34.2,27.9,62.1,62.1,62.1h200.6c34.2,0,62.1-27.9,62.1-62.1v-40.2c0-6.8-5.5-12.3-12.3-12.3
			s-12.3,5.5-12.3,12.3v40.2c0,20.7-16.9,37.6-37.6,37.6H62.1c-20.7,0-37.6-16.9-37.6-37.6v-248.2c0-20.7,16.9-37.6,37.6-37.6h200.6
			c20.7,0,37.6,16.9,37.6,37.6v40.2c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-40.2c0-34.2-27.9-62.1-62.1-62.1H62.1
			C27.9,58.95,0,86.75,0,121.05z"
                        />
                        <path
                            d="M385.4,337.65c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l83.9-83.9c4.8-4.8,4.8-12.5,0-17.3l-83.9-83.9
			c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l63,63H218.6c-6.8,0-12.3,5.5-12.3,12.3c0,6.8,5.5,12.3,12.3,12.3h229.8l-63,63
			C380.6,325.15,380.6,332.95,385.4,337.65z"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
};

const mapStateToProps = state => ({
    username: state.auth.user.username
});

export default connect(
    mapStateToProps,
    { logout }
)(Logout);
