import { FormEl } from "../Form/Form.styled";

const Filter = ({ filter, changeFilter }) => {
    return (
        <FormEl>
            <label htmlFor="">
                Filter by name 
                <input 
                    type="text" 
                    value={filter} 
                    onChange={changeFilter}
                    placeholder="Find by name"
                />
            </label>
        </FormEl>
    )
}

export default Filter;