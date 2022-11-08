import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from '../Acomplishments/AcomplishmentsStyles';
import Button from '../../styles/GlobalComponents/Button';

export default function Statistics(props) {
  let [topScoreNames, setScoreNames] = useState({"title": "Top score skins", "one": "", "two": "", "three": "", "four": "", "five": ""})
  let [topScore, setTopScore] = useState({"title": "Elo score points", "one": "", "two": "", "three": "", "four": "", "five": ""})
  let [topWinsNames, setTopWinsNames] = useState({"title": "Top wins skins", "one": "", "two": "", "three": "", "four": "", "five": ""})
  let [topWins, setTopWins] = useState({"title": "Amount of wins", "one": "", "two": "", "three": "", "four": "", "five": ""})
  const baseUrl = 'http://localhost:5000'

  // Fetch two championsskins here
  async function getComparison() {
      let res = await axios.get(`${baseUrl}/stats`);
      if (res.status===200){
          setScoreNames({"title": "Top score skins", "one": "1: " + res.data["top5_name"][0], "two": "2: " + res.data["top5_name"][1], "three": "3: " + res.data["top5_name"][2], "four": "4: " + res.data["top5_name"][3], "five": "5: " + res.data["top5_name"][4]})
          setTopScore({"title": "Elo score points", "one": res.data["top5_score"][0], "two": res.data["top5_score"][1], "three": res.data["top5_score"][2], "four": res.data["top5_score"][3], "five": res.data["top5_score"][4]})
          setTopWinsNames({"title": "Top wins skins", "one": res.data["top5_wins_names"][0], "two": res.data["top5_wins_names"][1], "three": res.data["top5_wins_names"][2], "four": res.data["top5_wins_names"][3], "five": res.data["top5_wins_names"][4]})
          setTopWins({"title": "Amount of wins", "one": res.data["top5_wins"][0], "two": res.data["top5_wins"][1], "three": res.data["top5_wins"][2], "four": res.data["top5_wins"][3], "five": res.data["top5_wins"][4]})
      } else {
          console.log("Invalid Query");
      }
  }

function refreshSkins(winner, loser){
    getComparison();
}


const data = [
  topScoreNames,
  topScore
];

useEffect(() => {
  getComparison()
}, [])

return(
  //TODO weergave is strange op dit moment, moet gefixed worden, lijst wordt niet goed weergeven, eerst proberen met 1 naam van de 5.
  <Section id="stats">
    <SectionTitle>Ranking statistics</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText>{card.title}</BoxText>
          <br></br>
          <BoxText>{card.one}</BoxText>
          <BoxText>{card.two}</BoxText>
          <BoxText>{card.three}</BoxText>
          <BoxText>{card.four}</BoxText>
          <BoxText>{card.five}</BoxText>
        </Box>
      ))}
    </Boxes>
    <Button onClick={props.handleClick}>See more</Button>
    <SectionDivider/>
  </Section>
);


}