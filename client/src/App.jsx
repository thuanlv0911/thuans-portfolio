import './App.css';
import Layout from './components/Layout/Layout';
import ScrollToTop from "react-scroll-to-top";
import Nav from './components/MobileNav/Nav';


function App() {
  return (
    <>
      <Nav />
      <Layout />
      <ScrollToTop
        smooth
        color="#2196F3"
        style={{
          backgroundColor: "#ddd",
          borderRadius: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      />

    </>
  );
}

export default App;
