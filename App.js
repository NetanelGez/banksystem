import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Homepage from "./Components/Homepage";
import Register from "./Components/Register";
import Admin from "./Components/Admin";
import Name from "./Components/Name";
import Edit from "./Components/Edit";
import "./App.css";

function App() {
  const [customers, setCustomers] = useState([]);
  const [choosenCustomer, setChoosenCustomer] = useState();
  const [customersTransfers, setCustomersTransfers] = useState([]);
  const addUser = (customerId, userName, userPassword, money) => {
    let newArr = [];
    newArr.push(...customers, {
      customerId: customerId,
      userName: userName,
      userPassword: userPassword,
      money: money,
    });
    setCustomers(newArr);
  };

  const customersLogin = (user, index) => {
    setChoosenCustomer({ user, index });
    // editData(index);
  };

  //דוחף אובייקט חדש המכיל את כל ההוצאות של הלקוח , לא מסויים.
  // const addTransfers = (price, product) => {
  //   let transfers = [];
  //   customers.map((customer, index) => {
  //     if (index == choosenCustomer.index) {
  //       transfers.push(price, product);
  //       // setChoosenCustomer({ transfers });
  //     }
  //   });
  //   setCustomers([...customers]);
  // };
  

  // setProducts(
  //   products.map((product) =>
  //     product.id == id ? { ...product, inPlace: !product.inPlace } : product
  //   )
  // );
  // const editData = (customerId, userName, userPassword, money, index) => {
  //   if (customers[index] === choosenCustomer.index) {
  //     setCustomers([...customers, (customers[index]: )]);
  //   }
  // };
  return (
    <div className="App">
      <Router>
        <Link to="/">Homepage</Link>
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return (
                <Homepage
                  customers={customers}
                  customersLogin={customersLogin}
                />
              );
            }}
          />
          <Route
            exact
            path="/Register"
            component={() => {
              return <Register customers={customers} addUser={addUser} />;
            }}
          />
          <Route
            exact
            path="/Admin"
            component={() => {
              return (
                <Admin
                  customers={customers}
                  customersLogin={customersLogin}
                  choosenCustomer={choosenCustomer}
                />
              );
            }}
          />
          <Route
            exact
            path="/Name"
            component={() => {
              return (
                <Name
                  customers={customers}
                  customersLogin={customersLogin}
                  choosenCustomer={choosenCustomer}
                />
              );
            }}
          />
          <Route
            exact
            path="/Edit"
            component={() => {
              return (
                <Edit
                  customers={customers}
                  customersLogin={customersLogin}
                  choosenCustomer={choosenCustomer}
                />
              );
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
