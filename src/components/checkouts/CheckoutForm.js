import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMaterial } from "../../data/materialsData.js";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { createCheckout } from "../../data/checkoutsData.js";

export default function CheckoutForm() {
    const { id } = useParams();
    const [material, setMaterial] = useState({});
    const [patronId, setPatronId] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        getMaterial(id).then(setMaterial);
    })

    const submit = () => {
        const newCheckout = {
            materialId : material.id,
            patronId : patronId
        }
        createCheckout(newCheckout).then(() => {
            navigate("/browse");
        });
    };

    if (!material) {
        return null;
    }

    return (
        <div className="container">
            <h4>Checkout Form</h4>
            <Form>
                <FormGroup>
                    <Label htmlFor="materialName">Title</Label>
                    <Input
                        plaintext
                        value={material.materialName}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="patronId">
                        Please enter the Id of the patron who is checking out this book:
                    </Label>
                    <Input
                        id="patronId"
                        name="patronId"
                        type="patronId"
                        onChange={(e) => {
                            setPatronId(e.target.value);
                        }}
                    />
                </FormGroup>
                <Button onClick={submit}>Submit</Button>
            </Form>
        </div>
    );
};