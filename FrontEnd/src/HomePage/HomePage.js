import HamburgerMenu from "./HamburgerMenu";
import "./HomePage.css"; // Import CSS file for styling

const HomePage = ({ onLogoutSuccess }) => {
  // const [loggedIn, setLoggedIn] = useState(false);

  // const handleLogout = () => {
  //   setLoggedIn(true);
  // };
  return (
    <div>
      <div className="flex">
        <HamburgerMenu handleLogout={onLogoutSuccess} />
        <div className="title">Wack Chat</div>
      </div>
    </div>
  );
};

export default HomePage;
