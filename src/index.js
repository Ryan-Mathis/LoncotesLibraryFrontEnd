import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MaterialList from "./components/tickets/MaterialList";
import MaterialDetails from "./components/tickets/MaterialDetails";
import CreateMaterial from "./components/tickets/CreateMaterial";
import PatronList from "./components/patrons/PatronList.js";
import PatronDetails from "./components/patrons/PatronDetails.js";
import EditPatron from "./components/patrons/EditPatron.js";
import CheckoutsList from "./components/checkouts/CheckoutsList.js";
import BrowseAvailable from "./components/checkouts/BrowseAvailable.js";
import CheckoutForm from "./components/checkouts/CheckoutForm.js";
import OverdueList from "./components/checkouts/OverdueList.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="materials">
          <Route index element={<MaterialList />} />
          <Route path=":id" element={<MaterialDetails />} />
          <Route path="create" element={<CreateMaterial />} />
        </Route>
        <Route path="patrons">
          <Route index element={<PatronList />} />
          <Route path=":id" element={<PatronDetails />} />
          <Route path=":id/edit" element={<EditPatron />} />
        </Route>
        <Route path="checkouts" element={<CheckoutsList />} />
        <Route path="overdueCheckouts" element={<OverdueList />} />
        <Route path="browse">
          <Route index element={<BrowseAvailable />} />
          <Route path=":id" element={<CheckoutForm />} />
        </Route> 
      </Route>
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
