import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useAuth } from "../hooks/useAuth";

const NavbarLogin = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleLogout = async () => {
        try {
            await signOut(auth)
        } catch(error) {
            console.log(error.message);
        }
    }
    
    return (
        <div className="navbar bg-base-100 fixed z-20 top-0">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={() => navigate("/about")}><a>About Me</a></li>
                    <li>
                    <a>My Work</a>
                    <ul className="p-2">
                        <li onClick={() => navigate("/photography")}><a>Photography</a></li>
                        <li onClick={() => navigate("/design")}><a>Design</a></li>
                    </ul>
                    </li>
                    <li><a href = "https://www.instagram.com/kitandcaboodledoodles/" target = "_blank">My Instagram</a></li>
                    <li onClick={() => navigate("/contact")}><a>Contact Me</a></li>
                </ul>
                </div>
                <a className="btn btn-ghost text-xl" onClick={() => navigate("/")}>My Portfolio</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li onClick={() => navigate("/about")}><a>About Me</a></li>
                <li>
                    <details>
                    <summary>My Work</summary>
                    <ul className="p-2">
                        <li onClick={() => navigate("/photography")}><a>Photography</a></li>
                        <li onClick={() => navigate("/design")}><a>Design</a></li>
                    </ul>
                    </details>
                </li>
                <li><a href = "https://www.instagram.com/kitandcaboodledoodles/" target = "_blank">My Instagram</a></li>
                <li onClick={() => navigate("/contact")}><a>Contact Me</a></li>
                </ul>
            </div>
            <div className="navbar-end">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                    Theme
                    <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
                    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Lofi" value="lofi"/></li>
                    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Forest" value="forest"/></li>
                    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cupcake" value="cupcake"/></li>
                    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine"/></li>
                    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Lemonade" value="lemonade"/></li>
                    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro"/></li>
                    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Synthwave" value="synthwave"/></li>
                </ul>
                </div>
                {!user ? <>
                <button onClick={() => navigate("/signin")} className="btn">Login</button>
                </> : <>
                <button onClick = {handleLogout} className="btn">Logout</button>
                </>}
            </div>
            </div>


    );
};

export default NavbarLogin;