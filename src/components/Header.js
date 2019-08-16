import React from 'react';
import styled from 'styled-components';

import NavContainer from './Contaner';

const Navbar = styled.div`
    background: #FFF;
    border-bottom: 1px solid rgba(0,0,0, .0975);
    height: 77px;
`;

const Logo = styled.div`
    text-align: center;

    @media screen and (min-width: 768px) {
        text-align: initial;
    }
    
    flex-grow: 1;

    img {
        height: 29px;
    }
`;

const SearchBar = styled.div`
    display: none;

    @media screen and (min-width: 768px) {
        display: initial;
    }
    
    input {
        background: #fafafa;
        border: solid 1px #dbdbdb;
        border-radius: 3px;
        color: #262626;
        outline: 0;
        text-align: center;
        padding: 3px 10px;
        transition: all .15s;

        &:focus {
            background: #FFF;
            text-align: left;
        }

        &::placeholder {
            color: #999;
            font-size: 14px;
            font-weight: 300;
        }
    }
`;

const NavActions = styled.div`
    display: none;

    @media screen and (min-width: 768px) {
        display: flex;
    }

    justify-content: right;
    flex-grow: 1;

    button {
        height: 29px;
        margin: 0;
        padding: 0;
        cursor: pointer;
        background: transparent;
        border: 0;
        margin-right: 1.5rem;

        &:last-child {
            margin-right: 0;
        }

        img {
            height: 29px;
        }
    }
`;

function Header() {
    return (
        <Navbar>
            <NavContainer center height="77px">
                <Logo>
                    <a href="#instagramo">
                        <img src="instagram-logo.png" alt="Instagram" />
                    </a>
                </Logo>

                <SearchBar>
                    <input type="search" placeholder="Search" />
                </SearchBar>

                <NavActions>
                    <button>
                        <img src="instagram-discover.png" alt="Discover" />
                    </button>

                    <button>
                        <img src="instagram-notifications.png" alt="Notifications" />
                    </button>

                    <button>
                        <img src="instagram-profile.png" alt="Profile" />
                    </button>
                </NavActions>
            </NavContainer>
        </Navbar>
    );
}

export default Header;