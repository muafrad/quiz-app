import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const { login } = useAuth();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await login(email, password);
            history.push("/");
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to LogIn!");
        }
    }
    return (
        <Form style={{ height: '330px' }} onSubmit={handleSubmit}>
            <TextInput type="text" placeholder="Enter email" icon="alternate_email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextInput type="password" placeholder="Enter password" icon="lock" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button disabled={loading} type="submit">SUBMIT NOW</Button>
            {error && <p className="error">{error}</p>}
            <div class="info">
                Don't have an account?
                <Link to="/signup"> Signup</Link> instead.
            </div>
        </Form>
    );
};

export default LoginForm;