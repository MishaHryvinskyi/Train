import styled from "@emotion/styled";
import { FaUserAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";

const IconDelete = styled(RiDeleteBin5Line)`
    background-color: #ffc93c;
    border-radius: 50%;
    padding: 5px;
    color: #155263;
    width: 20px;
    height: 20px;
    margin: 0 10px;
`;

const IconUser = styled(FaUserAlt)`
    background-color: #ffc93c;
    border-radius: 50%;
    padding: 10px;
    color: #155263;
    width: 20px;
    height: 20px;
    margin: 0 10px;
`;

const IconTel = styled(BsFillTelephoneFill)`
    background-color: #ffc93c;
    border-radius: 50%;
    padding: 10px;
    color: #155263;
    width: 20px;
    height: 20px;
    margin: 0 10px;
`;

const UserListEl = styled.ul`
    
`;

const UserItem = styled.li`
    width: 800px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    padding: 10px;
    background-color: #ff9a3c;
    border-radius: 10px;

    p {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #155263;
        font-size: 28px;
        font-weight: 800;
        margin-right: 20px;
    }
`;

const Btn = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 600;
    background-color: #ff6f3c;
    color: #155263;

    &:hover {
        background-color: #155263;
        color: #ff6f3c;
    }
`;

export { 
    UserItem, 
    UserListEl, 
    Btn, 
    IconUser,
    IconTel,
    IconDelete 
};