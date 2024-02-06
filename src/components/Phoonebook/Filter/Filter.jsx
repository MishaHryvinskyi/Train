const Filter = ({ filter, changeFilter }) => {
    return (
        <>
            <label htmlFor="">
                Filter by name 
                <input 
                    type="text" 
                    value={filter} 
                    onChange={changeFilter}
                />
            </label>
        </>
    )
}

export default Filter;