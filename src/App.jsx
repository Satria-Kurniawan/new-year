import ParticlesContainer from "./components/Particles";
import CountdownTimer from "./components/CountdownTimer";
import Wishes from "./components/Wishes";

export default function App() {
  return (
    <>
      <ParticlesContainer />
      <main className="h-screen flex justify-center items-center container mx-auto px-5">
        <div className="sm:w-[40vw] text-white">
          <CountdownTimer />
          <br />
          <Wishes />
        </div>
      </main>
    </>
  );
}
