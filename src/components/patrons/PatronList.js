import { useEffect, useState } from "react";
import { getPatrons } from "../../data/patronsData.js";
import { Table } from "reactstrap";

export default function PatronList() {
    const [patrons, setPatrons] = useState([]);

    useEffect(() => {
        getPatrons().then(setPatrons);
    }, []);

    return (
        <div className="container">
            <div className="sub-menu bg-light">
                <h4>Patrons</h4>
            </div>
            <Table>
                <thead>
                    <tr>
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
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}