import logoimg from "../assets/logo.jpg";
export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoimg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <button>Cart(0)</button>
      <nav />
    </header>
  );
}
