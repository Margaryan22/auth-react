import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="select-none flex flex-col min-h-screen justify-center items-center">
        <b className="font-sans text-6xl mb-12 text-slate-500 hover:text-slate-600">
          Welcome to WhyIt
        </b>

        <div className="flex flex-col gap-4 mb-6">
          <input
            type="email"
            placeholder="email address"
            className="placeholder:text-slate-400  border-slate-200 border-2 rounded-xl p-3  hover:border-slate-300 transition  focus:border-slate-400 focus:outline-none focus:ring-0 required:*@gmail border-warning"
          />
          <input
            type="password"
            className="placeholder:text-slate-400 border-slate-200 border-2 rounded-xl p-3  hover:border-slate-300 transition focus:border-slate-400 focus:outline-none focus:ring-0"
            placeholder="password"
          />
        </div>

        <div className="flex flex-row gap-3">
          <Link
            to="/succesLogIn"
            onClick={() => navigate("/succesLogIn")}
            className="w-24 font-bold p-3 rounded-xl text-white text-xl
            hover:-translate-y-1 bg-slate-500 active:bg-slate-600 transition"
          >
            LogIn
          </Link>
          <Link
            to="/register"
            onClick={() => navigate("/register")}
            className="w-24 font-bold  p-3 rounded-xl text-white text-xl hover:-translate-y-1 bg-slate-500 active:bg-slate-600 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default Auth;
