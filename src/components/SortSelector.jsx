const SortSelector = ({sortBy, onSortChange}) => {

    const optionsArray = [
        <option key="market_cap_desc" value="market_cap_desc">Market Cap (High To Low)</option>,
        <option key="market_cap_asc" value="market_cap_asc">Market Cap (Low To High)</option>,
        <option key="price_desc" value="price_desc">Price (High To Low)</option>,
        <option key="price_asc" value="price_asc">Price (Low To High)</option>,
        <option key="change_desc" value="change_desc">Change (High To Low)</option>,
        <option key="change_asc" value="change_asc">Change (Low To High)</option>,
    ];

    return ( 
        <div className="controls">
            <label htmlFor="sort">Sort By:</label>
            <select name="" id="sort" 
                    value={sortBy}
                    onChange={(e) => onSortChange(e.target.value)}
                    style={{ backgroundColor: 'gray'}}   
            >    
            {optionsArray}
            </select>
        </div>
     );
    }
 
export default SortSelector;