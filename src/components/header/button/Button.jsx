import { StyledButton } from './style';

export function Button( { text , icon }) {
    return (
        <StyledButton>
            { icon }
            <span>{ text }</span>
        </StyledButton>
    )

}