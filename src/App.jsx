import NavBar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemList/ItemListContainer"

const App = () => {
  return (
    <>
      <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi proyecto de Market Virtual" />
      </div>
    </>
  );
};

export default App;
