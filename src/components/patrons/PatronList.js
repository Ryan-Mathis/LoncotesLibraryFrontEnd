import { useEffect, useState } from "react";
import { deactivatePatron, getPatrons } from "../../data/patronsData.js";
import { Button, Table } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

export default function PatronList() {
    const navigate = useNavigate();
    const [patrons, setPatrons] = useState([]);

    useEffect(() => {
        getPatrons().then(setPatrons);
    }, []);

    const handleDeactivate = (e) => {
        e.preventDefault();
        deactivatePatron(e.target.value).then(() => {
            getPatrons().then(setPatrons);
        });
    };

    return (
        <div className="container">
            <div className="sub-menu bg-light">
                <h4>Patrons</h4>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Active Status</th>
                    </tr>
                </thead>
                <tbody>
                    {patrons.map((p) => (
                        <tr key={`patrons-${p.id}`}>
                            <th scope="row">{p.id}</th>
                            <td>{p.firstName} {p.lastName}</td>
                            <td>{p.address}</td>
                            <td>{p.email}</td>
                            <td>{p.isActive ? "Active" : "Inactive"}</td>
                            <td>
                                <Link to={`${p.id}`}>Details</Link>
                            </td>
                            <td>{p.isActive 
                            ? <Button 
                            value={p.id}
                            onClick={handleDeactivate}>Deactivate</Button> 
                            : null}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}