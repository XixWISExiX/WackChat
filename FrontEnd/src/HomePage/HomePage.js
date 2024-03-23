import ChatBox from "./ChatBox";
import HamburgerMenu from "./HamburgerMenu";
import "./HomePage.css"; // Import CSS file for styling

const HomePage = ({ onLogoutSuccess }) => {
  return (
    <div>
      <div className="homepage-container">
        <div className="flex">
          <HamburgerMenu handleLogout={onLogoutSuccess} />
          <div className="title">Wack Chat</div>
        </div>
        <div className="chatbox-container">
          <ChatBox />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
