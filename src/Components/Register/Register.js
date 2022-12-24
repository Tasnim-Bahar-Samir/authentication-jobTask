import React, { useContext } from 'react'
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom'
import { authProvider } from '../../Contexts/UserContext'

const Register = () => {
    const {createUser} = useContext(authProvider)
    const {register, handleSubmit, formState:{errors}} = useForm();


    const handleRegister  = (data)=>{
        console.log(data)
        console.log(data.email,data.password)
        createUser(data.email , data.password)
        .then(result => {
            console.log(result.user)
        })
        .catch(err => console.error(err))
    }

  return (
    <div>
        <form className="mx-auto border-2 p-5 rounded-md mt-14 text-left w-1/2" onSubmit={handleSubmit(handleRegister)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              className="input input-bordered w-full"
              aria-invalid={errors.name ? "true" : "false"} 
            />
            {errors.name && <p className="text-red-600" role="alert">{errors.name?.message}</p>}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              {...register("phone", { required: "Phone is required" })}
              type="text"
              className="input input-bordered w-full"
              aria-invalid={errors.phone ? "true" : "false"} 
            />
            {errors.phone && <p className="text-red-600" role="alert">{errors.phone?.message}</p>}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              {...register("address", { required: "Address is required" })}
              type="text"
              className="input input-bordered w-full"
              aria-invalid={errors.address ? "true" : "false"} 
            />
            {errors.address && <p className="text-red-600" role="alert">{errors.address?.message}</p>}
          </div>
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
          
          <button type="submit" className="btn btn-accent w-full mt-4">Register</button>
          <p className="text-center text-sm mt-[6px]">Already have an account?<Link to='/login' className="text-secondary">Login</Link></p>
        </form>
    </div>
  )
}

export default Register