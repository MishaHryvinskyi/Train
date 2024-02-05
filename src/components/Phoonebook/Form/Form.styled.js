import styled from "@emotion/styled";

const FormEl = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    label {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 28px;
        font-weight: 800;
        margin-bottom: 10px;

        input {
            width: 500px;
            font-size: 28px;
            padding: 10px;
            border-radius: 10px;
            margin: 10px;
            background-color: #ff9a3c;
            border: none;
        }
    }

    button {
        cursor: pointer;
        font-size: 20px;
        font-weight: 800;
        padding: 12px;
        border: none;
        border-radius: 50px;
        background-color: #3a9188;
        color: #b8e1dd;
        box-shadow: -webkit-box-shadow: 0px 0px 26px 1px rgba(58,145,136,1);
        -moz-box-shadow: 0px 0px 26px 1px rgba(58,145,136,1);
        box-shadow: 0px 0px 26px 1px rgba(58,145,136,1);
        
        &:hover {
            background-color: #b8e1dd;
            color: #3a9188;
            box-shadow: -webkit-box-shadow: 0px 0px 26px 1px rgba(184,225,221,1);
            -moz-box-shadow: 0px 0px 26px 1px rgba(184,225,221,1);
            box-shadow: 0px 0px 26px 1px rgba(184,225,221,1);
        }
    }
`;

export { FormEl };