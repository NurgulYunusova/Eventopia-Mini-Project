import { Container } from "@mui/material";
import NotFoundImage from "../../assets/images/pana.svg";

function NotFound() {

        return (
                <Container>
                    <div className="not-found">
                        <h1>Ooops!!</h1>
                        <img
                            src={NotFoundImage}
                            width={500}
                            height={500}
                            alt="not found"
                        />

                        <p>We can’t seem to find the page you are looking for.</p>
                    </div>
                </Container>
        );
    }


export default NotFound;
