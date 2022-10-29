import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from '../Acomplishments/AcomplishmentsStyles';

export default function Statistics(props) {
  let [topScoreNames, setScoreNames] = useState({"one": "", "two": "", "three": "", "four": "", "five": ""})
  let [topScore, setTopScore] = useState({"one": "", "two": "", "three": "", "four": "", "five": ""})
  let [topWinsNames, setTopWinsNames] = useState({"one": "", "two": "", "three": "", "four": "", "five": ""})
  let [topWins, setTopWins] = useState({"one": "", "two": "", "three": "", "four": "", "five": ""})
  const baseUrl = 'http://localhost:5000'

  // Fetch two championsskins here
  async function getComparison() {
      let res = await axios.get(`${baseUrl}/stats`);
      if (res.status===200){
          setScoreNames({"one": res.data["top5_name"][0], "two": res.data["top5_name"][1], "three": res.data["top5_name"]["two"], "four": res.data["top5_name"]["three"], "five": res.data["top5_name"]["four"]})
          setTopScore({"one": res.data["top5_score"][0], "two": res.data["top5_score"][1], "three": res.data["top5_score"]["two"], "four": res.data["top5_score"]["three"], "five": res.data["top5_score"]["four"]})
          setTopWinsNames({"one": res.data["top5_wins_names"][0], "two": res.data["top5_wins_names"][1], "three": res.data["top5_wins_names"]["two"], "four": res.data["top5_wins_names"]["three"], "five": res.data["top5_wins_names"]["four"]})
          setTopWins({"one": res.data["top5_wins"][0], "two": res.data["top5_wins"][1], "three": res.data["top5_wins"]["two"], "four": res.data["top5_wins"]["three"], "five": res.data["top5_wins"]["four"]})
      } else {
          console.log("Invalid Query");
      }
  }

function refreshSkins(winner, loser){
    getComparison();
}


const data = [
  topScoreNames,
  topScore,
  topWinsNames,
  topWins
];

return(
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText>1.{card.one}</BoxText>
          <BoxText>2.{card.two}</BoxText>
          <BoxText>3.{card.three}</BoxText>
          <BoxText>4.{card.four}</BoxText>
          <BoxText>5.{card.five}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);


}