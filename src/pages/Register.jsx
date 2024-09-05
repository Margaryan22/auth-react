import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
      <div className="select-none flex flex-col min-h-screen justify-center items-center">
        <b className="font-sans text-5xl mb-8 text-slate-600">
          Register in WhyIt
        </b>
        <b className="font-sans text-3xl mb-4 text-slate-500">
          Please, fill in the fields
        </b>
        <div className="flex flex-col w-50">
          <input
            className="border-slate-300 border-2 mb-2 rounded-xl p-3 hover:border-slate-400 transition focus:border-slate-500 focus:outline-none focus:ring-0"
            placeholder="nickname"
          />
          <input
            className="border-slate-300 border-2 mb-4 rounded-xl p-3 hover:border-slate-400 transition focus:border-slate-500 focus:outline-none focus:ring-0"
            placeholder="password"
          />
          <input
            className="border-slate-300 border-2 mb-4 rounded-xl p-3 hover:border-slate-400 transition focus:border-slate-500 focus:outline-none focus:ring-0"
            placeholder="email address"
          />

          <Link to="/choose_your_path">
            <button className="w-52 font-bold bg-slate-500 p-3 rounded-xl text-white text-xl hover:bg-slate-600 active:bg-slate-700 transition border-none">
              Register
            </button>
          </Link>
        </div>
        <Link to="/">
          <button className="mt-4 font-bold text-slate-400">
            Back to Welcome
          </button>
        </Link>
      </div>
    </>
  );
};

export default Register;
