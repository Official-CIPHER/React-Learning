import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <div className="parent">
        <Card user="Aman" age={18} img='https://plus.unsplash.com/premium_vector-1719858610096-bba4498e5fc1?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'/>
        <Card user="Vishal" age={22} img='https://plus.unsplash.com/premium_vector-1719858611039-66c134efa74d?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0' />
        <Card user="Aditya" age={23} img='https://plus.unsplash.com/premium_vector-1719858610584-14eae64834af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D' />
      </div>
    </>
  );
};

export default App;
