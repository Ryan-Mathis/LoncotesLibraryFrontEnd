import { Button, Table } from "reactstrap";
import { getCheckouts, returnCheckout } from "../../data/checkoutsData.js";
import { useEffect, useState } from "react";

export default function CheckoutsList() {
    const [checkouts, setCheckouts] = useState([]);

    useEffect(() => {
        getCheckouts().then(setCheckouts);
    }, []);

    const handleReturn = (e) => {
        e.preventDefault();
        returnCheckout(e.target.value).then(() => {
            getCheckouts().then(setCheckouts);
        });
    };

    return (
        <div className="container">
            <div className="sub-menu bg-light">
                <h4>Checkouts</h4>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Patron</th>
                        <th>Material</th>
                        <th>Checkout Date</th>
                        <th>Return Date</th>
                    </tr>
                </thead>
                <tbody>
            {checkouts.map((co) => (
                <tr key={`checkouts-${co.id}`}>
                    <td>{co.patron.firstName} {co.patron.lastName}</td>
                    <td>{co.material.materialName}</td>
                    <td>{co.checkoutDate?.split("T")[0]}</td>
                    <td>{co.returnDate?.split("T")[0]}</td>
                    <td>{!co.returnDate 
                    ? <Button 
                    value={co.id}
                    onClick={handleReturn}>
                        Return Book
                    </Button>
                    : null }</td>
                </tr>
            ))}
                </tbody>
            </Table>
        </div>
    )
};