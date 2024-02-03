import styled from "@emotion/styled";

const setBgColor = ({ type }) => {
    switch(type){
        case "good":
            return '#42b883';
        case "neutral":
            return '#fdffcd';
        case "bad":
            return '#ff7e67';
        default: 
            return '#d5def5';
    }
}

export const Btn = styled.button`
    padding: 20px;
    font-size: 20px;
    font-weight: 700;
    border: none;
    border-radius: 70px;
    cursor: pointer;
    margin: 20px;
    background-color: ${setBgColor};
    box-shadow: -webkit-box-shadow: 0px 0px 68px 0px rgba(213,222,245,1);
    -moz-box-shadow: 0px 0px 68px 0px rgba(213,222,245,1);
    box-shadow: 0px 0px 68px 0px rgba(213,222,245,1);

    &:hover {
        background-color: #d5def5;
        color: ${setBgColor}
    }
`;