import "./ModalConnect.css";
import BtnConnect from "../buttons/BtnConnect";
import Close from "../icons/Close";
import mmLogo from "../../assets/mm-logo.png";
import udLogo from "../../assets/ud-logo.png";

export default function ModalConnect({
    showModalConnect,
    closeModalConnect,
    handleLogin
}) {

    const handleOnClick = e => {
        if(e.target.className === "modal__connect__wrapper") {
            closeModalConnect();
        }
    }

    return (
        <>
            {
                showModalConnect &&
                <div
                    className="modal__connect__wrapper"
                    onClick={handleOnClick}
                >
                    <div className="modal__connect__wrapper--wallets">
                        <button
                            className="modal__connect__wrapper--close"
                            onClick={() => closeModalConnect()}
                        ><Close /></button>
                         <h3>Connect your wallet</h3>
                        <BtnConnect
                            imgSrc={mmLogo}
                            title="Login with MetaMask"
                            handleLogin={handleLogin}
                            value="mm"
                        />
                        <BtnConnect
                            imgSrc={udLogo}
                            title="Login with Unstoppable Domains"
                            handleLogin={handleLogin}
                            value="ud"
                        />
                    </div>
                </div>
            }
        </>
    );
}
