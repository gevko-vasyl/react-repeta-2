const Filter = ({ value, onChange }) => (
  <label>
    Name filter
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;
