import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Routes from "./routes";

function App() {
  return (
    <>
      <main className="relative w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center">
        <Navbar />
        <Routes />
        <Footer />
      </main>
    </>
  );
}

export default App;
