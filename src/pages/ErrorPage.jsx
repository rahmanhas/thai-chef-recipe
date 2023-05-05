import React, { useContext } from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const { error, status } = useRouteError()

  console.log(error);
  return (
    <div className='flex items-center h-screen p-16'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto '>
        <div className='max-w-md text-center'>
          <div>
            <img src="https://st2.depositphotos.com/4323461/9818/v/950/depositphotos_98187808-stock-illustration-oops-problem-man-business-concept.jpg" className="h-[500px] " alt="" />
          </div>
          <h2 className="font-extrabold text-7xl text-red-600">ERROR: {status || 404}</h2>
          <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
            {error?.message}
          </p>
          <Link to='/' className='btn bg-green-700 hover:bg-green-900'>
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage