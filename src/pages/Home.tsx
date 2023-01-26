import {
  ReccalsSlider,
  BackgroundMain,
  Partners,
  Reserves,
  Advantages,
  Message,
  Savety,
  Exchange,
} from "../components/Home";

const Home = () => {
  return (
    <main className="main main-wrapper">
      <BackgroundMain />
      <Savety />
      <Message />
      <Exchange />
      <Advantages />
      <Reserves />
      <ReccalsSlider />
      <Partners />
    </main>
  );
};

export default Home;
