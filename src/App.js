import './App.css';
import Main from './Components/Main'
import Header from './Components/Header'
import UserContext from './Context/UserContext';



function App() {

    const user = {
      name1: 'Ali',
      age1: '21',
      email1: 'ali@gmail.com',

      name2: "John",
      age2: '30',
      email2: 'john@gmail.com'
    }

    

  return (
    <>
      <UserContext.Provider value={user}>
        <Main />
        <br />
        <hr />
        <Header />
      </UserContext.Provider>
    </>
  );
}

export default App;
