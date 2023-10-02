import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { getMaterials, removeMaterialFromCirculation } from "../../data/materialsData";
import { Link } from "react-router-dom";

export default function MaterialList() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    getMaterials().then(setMaterials);
  }, []);

  const handleRemoveFromCirculation = (e) => {
    e.preventDefault();
    removeMaterialFromCirculation(e.target.value).then(() => {
      getMaterials().then(setMaterials)
    });
    };

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Materials</h4>
        <Link to="/materials/create">Add</Link>
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
          {materials.map((m) => (
            <tr key={`materials-${m.id}`}>
              <th scope="row">{m.id}</th>
              <td>{m.materialName}</td>
              <td>{m.materialType.name}</td>
              <td>{m.genre.name}</td>
              <td>
                <Link to={`${m.id}`}>Details</Link>
              </td>
              <td>
                <Button value={m.id}
                onClick={handleRemoveFromCirculation}>Remove From Circulation</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
