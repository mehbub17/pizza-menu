
import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App() {
    return <div className='container'>
        <Header  />
        <Menu  />
        <Footer />
    </div> 
}

function Header() {

  //styling components in jsx --> properties is js object
    // const style={color: "red", fontSize: "50px",textTransform: "uppercase"};
    const style={};

    return (
      <header className='header'>
        <h1 style={style} >First Pizza Then Life</h1>
      </header>
    )
}

function Menu() {

  const pizzas = pizzaData;

    return (
    
      <main className="menu">
        <h2>Our Menu</h2>

      {pizzas.length>0 ? (
        <ul className='pizzas'>
          {pizzaData.map((pizza)=> (
            <Pizza pizzaObject={pizza} key={pizza.name} />
          )
          )}
      </ul>
      ):<p>We are working on our menu. Please comeback later :)</p>}


        {/* <Pizza 
          name='Focaccia'
          ingredients='Bread with italian olive oil and rosemary' 
          photoName='pizzas/focaccia.jpg' price={10}/>


        <Pizza 
          name= "Pizza Salamino"
          ingredients= "Tomato, mozarella, and pepperoni"
          price= {15}
          photoName= "pizzas/salamino.jpg"/> */}

        
    </main>

    )
}

function Pizza(props) {
    // console.log(props)
    return (
      <li className='pizza'>
        <img src={props.pizzaObject.photoName }alt={props.pizzaObject.name} />
        <div>
          <h3>{props.pizzaObject.name}</h3>
          <p>{props.pizzaObject.ingredients}</p>
          <span>{props.pizzaObject.price + 2}</span>
        </div>
      </li>
    );



}



function Footer() {
    
    // return React.createElement('footer',null,'We are currently open!')
    // nice way

    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22

    const isOpen = hour >=openHour && hour <=closeHour;

    // if(isOpen)
    //     openStatus = "   We are currently Open"
    // else
    //     openStatus = "   Sorry, We are currently closed."


    return(
      <footer className='footer'> {isOpen ? (
        <div className='order'>
          <p>We are currently Open. Closing at {closeHour}:00 hours</p>
          <button className='btn'>Order Now</button>
        </div>
      ):<p>Sorry, We are currently closed. Will open at {openHour}:00 </p>} </footer>
    )
}








const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<React.StrictMode>
    <App />
</React.StrictMode>);