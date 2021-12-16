import Todo from './components/todo'

function App() {
  const handleClick = ()=>{
    alert('hello selamat belajar unit tesitng')
  }
  return (
   <div>
     <h1>belajar unit testing</h1>
      {/* <Button title="delete" onClick={handleClick}/> */}
      <Todo/>
   </div>
  );
}

export default App;
