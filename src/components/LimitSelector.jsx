const LimitSelector = ({limit, onChange}) => {
    return ( 
        <div className="controls">
        <label htmlFor="limit">Show:  </label>
        {/* add limit state as dependency in our useEffect so it re-renders on change */} 
        <select style={{ backgroundColor: 'gray'}} onChange={onChange}>
        {/* // setLimit(Number(e.target.value))} value={limit} id="limit" */}
          <option value="5">5</option>
          <option selected value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>  
     );
}
 
export default LimitSelector;