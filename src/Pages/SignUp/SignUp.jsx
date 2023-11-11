import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { FcGoogle } from "react-icons/fc";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const SignUp = () => {
  const {createUser, googleSignIn} = useContext(AuthContext);
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handelgoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      console.log(result.user)
    })
    .catch(error => console.log(error))
    navigate(from, { replace: true } )
  };

    const hendelSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        console.log(name, email, password)

        createUser(email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
          // ..
        });

      };
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" w-1/2 lg:mr-10">
            <img src={login} alt="" />
          </div>
  
          <div className="card flex-shrink-0 w-1/2 max-w-sm border-slate-300 border-2 rounded-md">
            <h1 className="text-center text-2xl font-medium mt-5">Sign Up</h1>
  
            <form onSubmit={hendelSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
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
                <button className="btn bg-red-500 hover:bg-red-600 text-white" type="submit">
                Sign Up
                </button>
              </div>
            </form>
            <h1 className="text-center">Or Sign Up with</h1>
            <div className="avatar placeholder flex justify-center space-x-3">
              <div className="bg-slate-100 text-neutral-content rounded-full w-12">
                <span onClick={handelgoogleSignIn} className="text-xs"><FcGoogle size={20}/></span>
              </div>
              <div className="bg-slate-100 text-neutral-content rounded-full w-12">
                <span className="text-xs"><CiLinkedin color="0A66C2" size={20}/></span>
              </div>
              <div className="bg-slate-100 text-neutral-content rounded-full w-12">
                <span className="text-xs"><CiFacebook color="0A66C2" size={20}/></span>
              </div>
            </div>
            <h1 className="text-center">Already have an account? <Link to='/login' className="text-orange-500">Login</Link></h1>
          </div>
        </div>
      </div>

    );
};

export default SignUp;