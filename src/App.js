import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">WELCOME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="card">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            className="img"
            variant="top"
            src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/84088601_177051513561445_3334964920486723584_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7a1959&_nc_ohc=qfpCNPo0eR8AX_Os9rE&_nc_ht=scontent.ftun1-2.fna&oh=00_AfA7wjIf-PJaT3EVtjMyjx-q7NRFPlSyJQ6oWi4mBl6KHg&oe=65BCA66E"
          />
          <Card.Body>
            <Card.Title>about me</Card.Title>
            <Card.Text>yassine jlassi 22 years old</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="al">
        <Alert className="alert" variant="success">
          <Alert.Heading>have a nice search in my web </Alert.Heading>
          <p>
            Welcome to our web development content creator page! Whether you're
            a beginner looking to learn the basics of web development or an
            experienced developer wanting to level up your skills, you've come
            to the right place. Our content creator is dedicated to providing
            you with comprehensive tutorials, step-by-step guides, and practical
            tips to help you build amazing websites and web applications. From
            HTML and CSS to JavaScript frameworks and backend technologies, we
            cover a wide range of topics to cater to your learning needs. Join
            our community of web enthusiasts and embark on your journey to
            becoming a proficient web developer today
          </p>
          <hr />
          <p className="mb-0">have a nice day and welcome to my page</p>
        </Alert>
      </div>
    </div>
  );
}

export default App;
