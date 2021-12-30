import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import MainView from "./views/main";
function App() {
  return (
    <div className="App">
      <Header />
      <MainView className="App-main" />
      <Footer />
    </div>
  );
}

export default App;
