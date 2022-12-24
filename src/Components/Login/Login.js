import React, { useContext } from 'react'
import {useForm} from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { authProvider } from '../../Contexts/UserContext';

const Login = () => {
    const {resetPassword} = useContext(authProvider);
    const navigate = useNavigate()
    const {userLogin} = useContext(authProvider)
    const {register, formState: { errors }, handleSubmit} = useForm();
    const handleLogin = (data)=>{
        console.log(data)
        userLogin(data.email, data.password)
        .then(result => {
            navigate('/home')
        })
        .catch(err => console.log(err))
    }

    const handleForgotPass = ()=>{
        resetPassword()
    }
  return (
    <div>
        
        <form className="mx-auto border-2 p-5 rounded-md mt-14 text-left w-1/2" onSubmit={handleSubmit(handleLogin)}>
        <h3 className='text-2xl font-semibold text-center my-3'>Login</h3>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email Address is required" })}
              type="email"
              className="input input-bordered w-full"
              aria-invalid={errors.email ? "true" : "false"} 
            />
            {errors.email && <p className="text-red-600" role="alert">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", { required: "Password is required",minLength: {value:6,message:"Password should be atleast 6 characters."} })}
              type="password"
              className="input input-bordered w-full"
              aria-invalid={errors.password ? "true" : "false"} 
            />
            {errors.password && <p className="text-red-600" role="alert">{errors.password?.message}</p>}
          </div>
          <a onClick={handleForgotPass} className='underline my-2 cursor-pointer'>Forgotten Password?</a>
          <button type="submit" className="btn btn-accent w-full mt-4">Login</button>
          <p className="text-center text-sm mt-[6px]">Don't have any account?<Link to='/register' className="text-secondary">Register</Link></p>
        </form>
    </div>
  )
}

export default Login