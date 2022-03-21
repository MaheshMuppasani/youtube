import styled from "styled-components"

const Conatainer = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500
`

const Announcement = () => {
    return (
        <Conatainer>
            Super Deal! free shipping on orders over $100
        </Conatainer>
    )
}

export default Announcement
