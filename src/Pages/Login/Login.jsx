import login from '../../assets/images/login/login.svg'
const Login = () => {
    const hendelLogin = event => {
        event.preventDefault();
    }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-1/2 lg:mr-10">
            <img src={login} alt="" />
        </div>

        <div className="card flex-shrink-0 w-1/2 max-w-sm border-slate-300 border-2 rounded-md">
            <h1 className='text-center text-2xl font-medium mt-5'>Login</h1>
            
          <form onSubmit={hendelLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name='email'
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name='password'
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">Login</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
