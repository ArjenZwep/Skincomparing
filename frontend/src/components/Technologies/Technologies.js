import React, { useState, useEffect } from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import axios from 'axios';
import { Grid, Paper, ThemeProvider, Typography } from '@material-ui/core';
import {useSpring, animated} from 'react-spring';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import Skin from '../Skin/Skin'

export default function Technologies(props) {
  let [skinOne, setSkinOne] = useState({name: "Hextech Sejuani", imgurl: "https://www.mobafire.com/images/champion/skins/landscape/sejuani-hextech-762x.jpg", id: 0})
  let [skinTwo, setSkinTwo] = useState({name: "Heartseeker Jinx", imgurl: "https://www.mobafire.com/images/champion/skins/landscape/jinx-heartseeker-762x.jpg", id: 0})

  // Fetch two championsskins here
  async function getComparison() {
      let res = await axios.get("/skin");
      if (res.status===200){
          setSkinOne({name: res.data["skin1name"], imgurl: res.data["skin1img"], id: res.data["skin1id"]})
          setSkinTwo({name: res.data["skin2name"], imgurl: res.data["skin2img"], id: res.data["skin2id"]});
      } else {
          console.log("Invalid Query");
      }
  }

  // Post the winner back to the backend to be stored in the database
  function postWinner(winner, loser) {
      console.log(winner)
      let res = axios.post(`/skin?winnerId=${winner}&loserId=${loser}`);
  }

  function refreshSkins(winner, loser){
      postWinner(winner, loser);
      getComparison();
  }

  useEffect(() => {
      getComparison()
  }, [])


return(
  <Section id="tech">
    <List>
      <ListItem>
        <ListContainer>
          <ListParagraph>
            <Paper onClick={() => refreshSkins(skinOne.id, skinTwo.id)}>
              <Skin imgname={skinOne.imgurl} name={skinOne.name}/>
            </Paper>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListParagraph>
            <Paper onClick={() => refreshSkins(skinTwo.id, skinOne.id)}>
              <Skin imgname={skinTwo.imgurl} name={skinTwo.name}/>
            </Paper>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);
}