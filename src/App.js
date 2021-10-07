import "./App.css";
import { Footer } from "./MyComponents/Footer";
import { Header } from "./MyComponents/Header";
import { Table } from "./MyComponents/Table";
import { Forms } from "./MyComponents/Forms";
import { Lor } from "./MyComponents/Lor";
import data from "./userData.json";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  function onSub(event) {
    let iName;
    let iContact;
    let iDescription;
    let iId;
    console.log("Add Clicked");
    event.preventDefault();
    iName = document.getElementById("Name").value;
    iContact = document.getElementById("Contact").value;
    iDescription = document.getElementById("Description").value;
    if (iName === "") {
      window.alert("Name cannot be empty!");
    } else {
      iId = Detai.length + 1;
      const profile = {
        Id: iId,
        Name: iName,
        Contact: iContact,
        Description: iDescription,
      };

      const profiles = [...Detai, profile];
      setDetai(profiles);
    }
    document.getElementById("myForm").reset();
  }

  function onDel(ID) {
    const newArr = [...Detai];
    const index = Detai.findIndex((item) => item.Id === ID);
    let count = 1;
    newArr.splice(index, 1);
    newArr.forEach((element) => {
      element.Id = count;
      count++;
    });
    console.log("The index is", index);
    setDetai(newArr);
    console.log("Delete clicked");
    console.log(ID, "is the ID");
    console.log("Inside delete function", Detai);
  }

  const [Detai, setDetai] = useState(data);

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/Lor">
            <Lor />
          </Route>
          <Route path="/">
            <Table Detai={Detai} onDel={onDel} />
            <Forms onSub={onSub} />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}
export default App;

/*
    document.getElementById("Name").value = "";
    document.getElementById("Contact").value = "";
    document.getElementById("Description").value = ""; 

<Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <Table Detai={Detai} onDel={onDel} />
                  <Forms onSub={onSub} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/Lor" component={Lor}></Route>
          */
