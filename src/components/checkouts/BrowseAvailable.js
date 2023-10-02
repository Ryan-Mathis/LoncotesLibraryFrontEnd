import { useEffect, useState } from "react";
import { getAvailableMaterials } from "../../data/materialsData.js";
import { Button, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function BrowseAvailable() {
    const navigate = useNavigate();
const [availableMaterials, setAvailableMaterials] = useState([])

useEffect(() => {
    getAvailableMaterials().then(setAvailableMaterials);
}, []);

return (
    <div className="container">
    <div className="sub-menu bg-light">
      <h4>Available Materials</h4>
    </div>
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Type</th>
          <th>Genre</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {availableMaterials.map((m) => (
          <tr key={`availableMaterials-${m.id}`}>
            <th scope="row">{m.id}</th>
            <td>{m.materialName}</td>
            <td>{m.materialType.name}</td>
            <td>{m.genre.name}</td>
            <td>
              <Button onClick={() => navigate(`${m.id}`)}>Checkout</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);
}