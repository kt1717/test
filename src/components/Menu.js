const Menu = ({ onSelect }) => {
    return (
      <div>
        <h3>Menu</h3>
        <ul>
          <li onClick={() => onSelect('section1')}>Section 1</li>
          <li onClick={() => onSelect('section2')}>Section 2</li>
          <li onClick={() => onSelect('section3')}>Section 3</li>
        </ul>
      </div>
    );
  };
  
  export default Menu;