// import { Title } from "./components/title";
// import { Button } from "./components/button";

import {
  Button,
  Title,
  Container,
  Comments,
  Header,
  Footer,
  UserProfile,
} from "./components";

import "./App.css";

function App() {
  function alerta() {
    alert("Mi primera aplicación en React");
  }

  const buttonTitle = "Mi primer button";
  const url =
    "https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg";

  const user = {
    name: "Luis", 
    lastName: "Diego", 
    birthday: "27/02/1990", 
    email: "lfdiego7@gmail.com", 
    image: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png",
  };

  const data = [
    { title: "Title 1", description: "Description 1" },
    { title: "Title 2", description: "Description 2" },
    { title: "Title 3", description: "Description 3" },
    { title: "Title 4", description: "Description 4" },
    { title: "Title 5", description: "Description 5" },
  ];

  return (
    <Container className="App">
      <Header />
      <Title />
      <UserProfile user={user} />
      <br />
      <Button value={buttonTitle} />
      <Comments data={data} />
      <Footer />
    </Container>
  );
}

export default App;
