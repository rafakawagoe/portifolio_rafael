import MyPhoto from "../../assets/perfil.webp";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="container-flex">
      <div className="coluna-imagem">
        <img src={MyPhoto} alt="My Photo" srcSet={`${MyPhoto} 3000w`} />
      </div>
      <div className="coluna-texto">
        <h1>Welcome to My Portfolio</h1>
        <p>
          My name is Rafael Kawagoe and this is the home page of my portfolio
          website.
        </p>
      </div>
    </div>
  );
}
export default HomePage;
