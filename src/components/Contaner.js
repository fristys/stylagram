import styled from 'styled-components';

export default styled.div`
    display: flex;
    ${props => (props.column ? 'flex-direction: column' : '')}
    ${props => (props.center ? 'align-items: center;' : '')}
    width: 100%;
    ${props => (props.height ? `height: ${props.height};` : '')}
    margin: 0 auto;

    @media screen and (min-width: 768px) {
        width: 70%;
    }

    @media screen and (min-width: 992px) {
        width: 50%;
    }
`;