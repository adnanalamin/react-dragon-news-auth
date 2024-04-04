import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
    const handelLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        console.log(form.get('password'))
    }
  return (
    <div>
      <Navbar></Navbar>
      <div>
      <h2 className="text-3xl my-10 text-center">Please Login</h2>
        <form onSubmit={handelLogin} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              name="password"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-4">Do not have a account <Link className="text-blue-600 font-semibold" to='/register'>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
