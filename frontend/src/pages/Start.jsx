import React from 'react'
import { Link } from 'react-router-dom'


const Start = () => {
    return (
        <div>
            <div className='h-screen pt-6 w-full bg-cover bg-center  bg-[url(https://plus.unsplash.com/premium_photo-1731842686156-74895c29a87b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D)] flex justify-between flex-col'>
            <div className='w-full flex justify-start items-end'>
                <img className='w-20 ml-5' src="https://imgs.search.brave.com/4ATIxs0SwT-DsZ4ajF7jlixEaXFqw5Ys2I5OFQa8JEM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="" />   
                <img className='w-7 ml-1' src="https://imgs.search.brave.com/GdHwOqtWpOsrMrn40RRsmQNX9rl3YRvMALto5Xz51ck/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvY2FyLTEtMS81/MC82My02NC5wbmc" alt="" />
            </div>
                <div className='bg-[#fdffffb9] py-4 px-4 pb-7'>
                    <h2 className='text-[1.4rem] font-bold'>Get Started With Uber</h2>
                    <Link to='/login' className='flex items-center justify-center text-lg font-semibold w-full bg-black text-white py-3 rounded mt-3'>Continue</Link>
                </div>

            </div>
        </div>
    )
}

export default Start