import HomePage from './pages/Home';
// import img from './logo.svg';
// import Card from './components/Card';
// import Header from './components/Header';





// const styles = 
//   backgroundColor: 'red',
//   fontSize:100,
//   color: 'white',

 /*const user = {
  name: 'belal',
  age:26,
  love: ['mom','dad'],
  subjects: [
    { subject:'math',mark:75 },
    { subject:'arabic',mark:45}
  ],
}*/

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#222',
    fontSize:30,
    color: 'white', }}>
      <HomePage/>
      {/* <Header/> */}
      {/* <div>first</div>
      <div>decond</div>
      <from>
        <label htmlFor="input">my input</label>
        <input id="input" type="password"/>
        <p>iam {user.name} and my age is {user.age} and i love my {user.love.join(" and ")} i passed in {user.subjects.filter((sub) => sub.mark >= 50)[0].subject}  </p>
      </from>
      <img src={img}  alt='belal' />
      <Card title={'belal'} body={'belal kafarna'} imgSrc={'./logo.svg'} /> */}
      
    </div>
  )
};

export default App;
