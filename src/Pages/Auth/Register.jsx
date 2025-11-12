import React, { use, useState } from 'react';
import MyContainer from '../../Components/MyContainer';
import { Link, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth';
import { auth } from '../../Firebase/firebase.config';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthContext';

const googleProvider = new GoogleAuthProvider();


const Register = () => {
    const [show, setShow] = useState(false)
     const [user, setUser] = useState(null);
    const {createUserWithEmailAndPasswordFunc,updateProfileFunc} = use(AuthContext);

     const navigate = useNavigate();

     const handleGoogleLogin=()=>{
    signInWithPopup(auth, googleProvider)
    .then(res=>{
      console.log(res);
      setUser(res.user);
      toast.success("Google Login Successful");
       navigate('/');
    })
    .catch((e)=>{
      console.log(e);
      toast.error(e.message);
    })
   
  }
  // console.log(user);
  // from login 
   const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success('Logout Successful');
        setUser(null);
        navigate('/login');
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

    const handleRegister=(e)=>{
        e.preventDefault();
        
          const name = e.target.name?.value; 
    const photo = e.target.photo?.value; 
    const email = e.target.email?.value;  
    const password = e.target.password?.value;
    console.log('Register ok',{name, email, photo, password});

    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (!regExp.test(password)) {
      toast.error("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (@, $, !, %, *, ?, &).");
      return;
    }
    createUserWithEmailAndPasswordFunc(email, password)
    .then((res)=>{

      //update profile
      // updateProfile(res.user,
      updateProfileFunc(name, photo)
      .then((res)=>{
        console.log(res);
        toast.success("Update Successful")
      })
      .catch((error)=>{
        toast.error(error.message);
      })

        console.log(res);
        toast.success("Register Successfully");
        navigate("/")
    })
    .catch((error) => {
        // console.log(error)
        console.log(error.code) 
        
        if (error.code === "auth/invalid-email") {
          toast.error("Invalid email format!");
        }
        else if (error.code === "auth/user-not-found") {
          toast.error("No user found with this email!");
        }
        else if (error.code === "auth/wrong-password") {
          toast.error("Incorrect password!");
        }
        else if (error.code === "auth/too-many-requests") {
          toast.error("Too many failed attempts! Try again later.");
        }
        else if (error.code === "auth/user-disabled") {
          toast.error("This account has been disabled by admin.");
        }
        else if (error.code === "auth/network-request-failed") {
          toast.error("Network error. Please check your internet connection.");
        }
        else if (error.code === "auth/invalid-credential") {
          toast.error("Invalid credentials. Please check your email and password.");
        }
        else {
          toast.error("Something went wrong: " + error.message);
        }
      })
    }

    return (
        <div className="min-h-[96vh] flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 relative overflow-hidden">
      {/* Animated floating circles */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-pink-400/30 rounded-full blur-2xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <MyContainer>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
           {/* left side */}
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Create Your Account
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Join our community and unlock exclusive features. Your journey
              begins here!
            </p>
          </div>

          {/* right side */}
          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center text-white">
              Register Your account
            </h2>

            {/* Form */}
            <form onSubmit={handleRegister} className="space-y-4">
                {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              {/* Photo */}
              <div>
                <label className="block text-sm font-medium mb-1">Photo</label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Your Photo URL"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  // type="password"
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <span onClick={() => setShow(!show)} className="absolute right-[8px] top-[36px] cursor-pointer z-50 text-[black]">{show ? <FaEye /> : <FaEyeSlash />}</span>
              </div>

              <button type="submit" className="my-btn">
                Register
              </button>

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

              <div className="text-center mt-3">
                <p className="text-sm text-white/80">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-pink-300 hover:text-white font-medium underline"
                  >
                    Login
                  </Link>
                </p>
              </div>

              {/* logout btn */}
              {user && (
                <button
                  onClick={handleLogout}
                  type="button"
                  className="mt-3 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg w-full"
                >
                  Logout
                </button>
              )}
            </form>
          </div>
        </div>
      </MyContainer>
      
    </div>
    );
};

export default Register;