import { useEffect, useState } from "react"
import { getPatron } from "../../data/patronsData.js"
import { useNavigate, useParams } from "react-router-dom";
import { Button, Table } from "reactstrap";

export default function PatronDetails() {
    const { id } = useParams();
    const [patron, setPatron] = useState({});
    const navigate = useNavigate();


    useEffect(() => {
        getPatron(id).then(setPatron);
    }, []);

    if (!patron) {
        return null;
    }


    return (
        <div className="container">
            <h2>{patron.firstName} {patron.lastName}</h2>
            <Button
                color="primary"
                onClick={() => {navigate(`/patrons/${id}/edit`)}}>
                Edit
            </Button>
            <Table>
                <tbody>
                    <tr>
                        <th scope="row">Email</th>
                        <td>{patron.email}</td>

                    </tr>
                    <tr>
                        <th scope="row">Address</th>
                        <td>{patron.address}</td>
                    </tr>
                    <tr>
                        <th scope="row">Active Status</th>
                        <td>{patron.isActive ? "Active" : "Inactive"}</td>
                    </tr>
                </tbody>
            </Table>
            <h4>Late Fees</h4>
            {patron.balance ? (
                <Table>
                    <thead>
                        <tr>
                            <th>Material</th>
                            <th>Late Fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patron.checkouts.map((co) => (
                            <tr key={`checkout-${co.id}`}>
                                <td>{co.material.materialName}</td>
                                <td>{co.lateFee}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <p>No late fees for this patron</p>
            )}
        </div>
    );
}