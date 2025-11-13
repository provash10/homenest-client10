import React, { use, useState } from 'react';
import MyContainer from '../../Components/MyContainer';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthContext';


const Login = () => {
  const [show, setShow] = useState(false);
  const {signInWithEmailAndPasswordFunc,signInWithEmailFunc,signOutUserFunc,user,setUser,setLoading} =use(AuthContext)
  
  //location
  const location = useLocation();
  console.log(location);
  const from = location.state || "/";

  const navigate = useNavigate();

  if(user){
    navigate("/");
    return;
  }

  const handleLogin = (e)=>{
    e.preventDefault();
     const email = e.target.email?.value;  
    const password = e.target.password?.value;
    console.log({email,password});

    signInWithEmailAndPasswordFunc(email,password)
    .then(res=>{
      console.log(res);
      setLoading(false);
      setUser(res.user);
      toast.success("Login Successful");
      // navigate('/')
       navigate(from, { replace: true });
    })
    .catch((e)=>{
      console.log(e);
      toast.error(e.message);
      
    });

  }

  const handleGoogleLogin=()=>{
    signInWithEmailFunc()
    .then(res=>{
      console.log(res);
      setLoading(false);
      setUser(res.user);
      toast.success("Google Login Successful");
       navigate(from, { replace: true });
    })
    .catch((e)=>{
      console.log(e);
      toast.error(e.message);
    })
  }

  //  console.log(user);
   const handleLogout = ()=>{
    // signOut(auth)
    signOutUserFunc()
    .then(()=>{
      toast.success("logOut Successfull");
      setLoading(false);
      setUser(null)
    })
    .catch((e)=>{
      console.log(e);
      toast.error(e.message);
    })
   }

  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 relative overflow-hidden">
      {/* Animated glow orbs */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-blue-400/30 rounded-full blur-xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <MyContainer>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
          {/* Left section */}
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Welcome Back
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Log in to continue your journey. Manage your account, explore new
              features, and more.
            </p>
          </div>

          {/* Login card  right side*/}
          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            
            {user?(<div className="text-center space-y-3">
              <img src={user?.photoURL || "https://via.placeholder.com/88"} 
              className='border h-20 w-20 rounded-full mx-auto' alt="image" />
              <h2 className='text-xl font-semibold'>{user?.displayName}</h2>
              <p className='text-white/80'>{user?.email}</p>
              <button onClick={handleLogout} className='my-btn'>
                Logout
              </button>
            </div>
              ) : (
              <form onSubmit={handleLogin} className="space-y-5">
              <h2 className="text-2xl font-semibold mb-2 text-center text-white">
                Login Your Account
              </h2>

              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="relative">
                <label className="block text-sm mb-1">Password</label>
                <input
                  // type="password"
                    type={show? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <span onClick={() => setShow(!show)} className="absolute right-[8px] top-[36px] cursor-pointer z-50 text-[black]">{show ? <FaEye /> : <FaEyeSlash />}</span>
                {/* forget password */}
                <button type="button" className=" flex justify-start font-bold hover:underline hover:text-black cursor-pointer">
                Forget Password ?</button>
              </div>

              

              <button type="submit" className="my-btn">
                  Login
                </button>

              {/* Divider */}
              <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px w-16 bg-white/30"></div>
                <span className="text-sm text-white/70">or</span>
                <div className="h-px w-16 bg-white/30"></div>
              </div>

              {/* Google Signin */}
              <button onClick={handleGoogleLogin}
                type="button" 
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>

              <p className="text-center text-sm text-white/80 mt-3">
                Don’t have an account?{" "}
                <Link
                  to="/register"
                  className="text-pink-300 hover:text-white underline"
                >
                  Register
                </Link>
              </p>
            </form>
            )
            }
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Login;