const Title = () => (
    <div className="logo">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvw9_YpLBp84k98-MM2im5z6dpNfchjfUJLcQNiDb2rA&s" />
    </div>
  );
const Header = () =>(
    <>
          <Title />
        <div className="nav-items">
          <ul>
            <li>Home </li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        </>
)
export default Header