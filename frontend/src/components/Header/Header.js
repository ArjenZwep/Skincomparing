import Link from 'next/link';
import React from 'react';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, NavLink} from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#Statistics">
          <NavLink>Statistics</NavLink>
        </Link>
      </li>   
    </Div2>
    </Container>
);

export default Header;
