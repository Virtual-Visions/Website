import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        {/* Other navigation items */}
        <li>
          <Link to="/imprint">Imprint</Link>
        </li>
        {/* Other navigation items */}
      </ul>
    </nav>
  );
}

export default Navigation;