import { UserItem, Btn, IconUser, IconTel, IconDelete } from "./UserList.styled";

const UserList = ({ contacts, removeContact }) => {
    return(
        <ul>
        {contacts.map(({ id, name, number}) => (
        <UserItem key={id}>
            <p>
                <IconUser /><span>{name}</span> : <IconTel /><span>{number}</span>
            </p>
            <Btn onClick={() => removeContact(id)}>Delete<IconDelete /></Btn>
        </UserItem>
        ))}
      </ul>
    )
}

export default UserList;