import Acomplishments from '../components/Acomplishments/Acomplishments';
import Hero from '../components/Hero/Hero';
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Comparison from "../components/Comparison/Comparison";
import Statistics from '../components/Statistics/Statistics';


const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
      </Section>
      <Technologies />
      <Statistics />
    </Layout>
  );
};

export default Home;
