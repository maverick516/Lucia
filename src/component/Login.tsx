import "@twa-dev/sdk";
import "../App.css";
import "../index.css";
import Logo from "../assets/mainLogo.svg";

function Login(props: any) {
  return (
    <div className="App">
      <div className="Loginbg">
        <div className="mainlogo">
          <img src={Logo} />
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <button
          onClick={() => props.connection.connect.connection()}
        >
          connect
        </button>
      </div>
      </div>
    </div>
  );
}

export default Login;
