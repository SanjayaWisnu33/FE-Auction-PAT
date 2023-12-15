import { useAuth } from "../helpers/hooks/Authentication";

export function Header(){
    const { user } = useAuth()
    return(
            <div className="header">
                <div>
                <img src="assets/av-logo.png" alt="Image" className="img-fluid header-logo"/>
                </div>
                <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", marginLeft: "auto", marginEnd: "0px"}}>
                    <h1 className="header-text">{user?.username}</h1>
                    <img src="assets/profile.png" style={{ height: "60px", margin: "auto"}}/>
                </div>
            </div>
    );
}
