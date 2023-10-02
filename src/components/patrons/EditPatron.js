import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { getPatron, updatePatron } from "../../data/patronsData.js";

export default function EditPatron() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [patron, setPatron] = useState({});
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")

    useEffect(() => {
        getPatron(id).then(setPatron);
    }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const updatedPatron = {
            id,
            email,
            address
        };

        updatePatron(id, updatedPatron).then(() => {
            navigate(`/patrons/${id}`);
        });
    };

    return <Form onSubmit={handleFormSubmit}>
        <FormGroup>
            <Label for="email">
                Email
            </Label>
            <Input
            id="email"
            name="email"
            placeholder={patron.email}
            type="email"
            onChange={(e) => {
                setEmail(e.target.value)
            }}
            />
        </FormGroup>
        <FormGroup>
            <Label for="address">
                Address
            </Label>
            <Input
            id="address"
            name="address"
            placeholder={patron.address}
            type="address"
            onChange={(e) => {
                setAddress(e.target.value)
            }}
            />
        </FormGroup>
        <Button
        color="primary"
        size="lg">
            Submit
        </Button>
    </Form>
}