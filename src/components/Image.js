import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
    position: relative;
    flex-basis: 100%;
    padding: 1rem;

    @media screen and (min-width: 768px) {
        flex-basis: calc(33.333% - 2rem);
    }

    img {
        cursor: pointer;
        width: 100%;
    }
`;

const ImageOverlay = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 1rem; bottom: 1rem;
    left: 1rem; right: 1rem;
    color: #FFF;
    font-weight: 600;
    background: rgba(0,0,0, .5);
    cursor: pointer;

    ${ImageContainer}:hover & {
        display: flex !important;
    }

    img {
        width: 1.5rem;
        margin-right: .5rem;
    }
`;

function Image({ metadata }) {
    return (
        <ImageContainer>
            <ImageOverlay>
                <img src="instagram-comments.png" alt="comments" />
                {metadata.comments}
            </ImageOverlay>
            <img src={metadata.url} alt={metadata.alt} />
        </ImageContainer>
    );
}

export default Image;