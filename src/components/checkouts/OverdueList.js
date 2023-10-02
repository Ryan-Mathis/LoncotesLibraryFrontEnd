import { Button, Table } from "reactstrap";
import { getOverdueCheckouts} from "../../data/checkoutsData.js";
import { useEffect, useState } from "react";

export default function OverdueList() {
    const [overdueCheckouts, setOverdueCheckouts] = useState([]);

    useEffect(() => {
        getOverdueCheckouts().then(setOverdueCheckouts);
    }, []);

    return (
        <div className="container">
            <div className="sub-menu bg-light">
                <h4>Overdue Checkouts</h4>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Patron</th>
                        <th>Material</th>
                        <th>Checkout Date</th>
                    </tr>
                </thead>
                <tbody>
            {overdueCheckouts.map((co) => (
                <tr key={`overdue-checkouts-${co.id}`}>
                    <td>{co.patron.firstName} {co.patron.lastName}</td>
                    <td>{co.material.materialName}</td>
                    <td>{co.checkoutDate?.split("T")[0]}</td>
                </tr>
            ))}
                </tbody>
            </Table>
        </div>
    )
};