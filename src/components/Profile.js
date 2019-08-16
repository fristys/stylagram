import React from 'react';
import styled from 'styled-components';

import ProfileContainer from './Contaner';
import Image from './Image';

const ProfileInfo = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 2rem;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        margin-top: 3.5rem;
    }
`;

const ProfileImage = styled.div`
    width: 150px;
    height: 150px;
    background: #eee;
    color: #eee;
    border-radius: 50%;
    ${props => (props.hasStory ? 'padding: .25rem' : '')}
    ${props => (props.hasStory ? 'border: 2px solid #dd326f' : '')}
    margin: 0 auto 2rem auto;
    flex-shrink: 0;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        margin: initial;
    }

    img {
        width: 100%;
        height: 150px;
        border-radius: 50%;
        cursor: pointer;
    }
`;

const ProfileMetadata = styled.div`
    width: 100%;

    @media screen and (min-width: 768px) {
        max-width: 60%;
        padding: 0 4rem;
    }
`;

const ProfileTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: initial;
    }

    h1 {
        font-size: 1.5rem;
        font-weight: 300;
        margin: 0; padding: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

const FollowButton = styled.button`
    background: ${props => props.followed ? 'transparent' : '#3897f0'};
    border: 1px solid ${props => props.followed ? '#dbdbdb' : '#3897f0'} !important;
    color: ${props => props.followed ? '#262626' : '#fff'};
    ${props => props.followed ? 'font-weight: 600;' : ''}
    padding: .25rem 2rem;
    border-radius: 3px;
    border: 0;
    cursor: pointer;
    margin-top: 1rem;

    @media screen and (min-width: 768px) {
        margin-top: 0;
        margin-left: 1rem;
    }

    &:hover {
        opacity: .9;
    }
`;

const ProfileStats = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 2rem 0;
    font-size: 1rem;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: initial;
    }
    
    a, a:visited {
        color: #262626;
        text-decoration: none;

        @media screen and (min-width: 768px) {
            margin-right: 2rem;
        }

        &:last-child {
            margin-right: 0;
        }

        span {
            font-weight: 600;
            padding-right: .5rem;
        }
    }
`;

const ProfileDescription = styled.div`
    text-align: center;
    
    @media screen and (min-width: 768px) {
        text-align: initial;
    }

    p {
        margin: 0;
        padding: .25rem 0;

        strong {
            font-weight: 600;
        }
    }
`;

const ProfileImages = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 1.5rem;
`;

function Profile({ metadata }) {
    return (
        <ProfileContainer column>
            <ProfileInfo>
                <ProfileImage hasStory>
                    <img src={metadata.avatar.url} alt={metadata.avatar.alt} />
                </ProfileImage>

                <ProfileMetadata>
                    <ProfileTitle>
                        <h1>{metadata.nickname}</h1>
                        <FollowButton followed={metadata.followed}>{metadata.followed ? 'Unfollow' : 'Follow'}</FollowButton>
                    </ProfileTitle>

                    <ProfileStats>
                        <a href="#posts">
                            <span>{metadata.posts}</span>
                            posts
                        </a>

                        <a href="#followers">
                            <span>{metadata.followers}</span>
                            followers
                        </a>

                        <a href="#following">
                            <span>{metadata.following}</span>
                            following
                        </a>
                    </ProfileStats>

                    <ProfileDescription>
                        <p><strong>{metadata.name}</strong></p>
                        <p>{metadata.description}</p>
                    </ProfileDescription>
                </ProfileMetadata>
            </ProfileInfo>

            <ProfileImages>
                {metadata.images.map((image, index) => <Image metadata={image} key={index} />)}
            </ProfileImages>
        </ProfileContainer>
    );
}

export default Profile;