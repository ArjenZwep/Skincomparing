import Link from 'next/link';
import React from 'react';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, NavLink} from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <li>
        <Link href="#vote">
          <NavLink>Compare</NavLink>
        </Link>
      </li>   
    </Div1>
    <Div2>
      <li>
        <Link href="#stats">
          <NavLink>Statistics</NavLink>
        </Link>
      </li>   
    </Div2>
    </Container>
);

export default Header;
