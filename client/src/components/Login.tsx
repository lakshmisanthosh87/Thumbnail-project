import React from 'react'
import SoftBackdrop from './SoftBackdrop';

const Login = () => {
 const [state, setState] = React.useState("login")

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

    }
    const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // Later: connect Firebase / OAuth here
}


    return (
        <>
        <SoftBackdrop />
        <div className='min-h-screen flex items-center justify-center'>
            <form
                onSubmit={handleSubmit}
                className="w-full sm:w-87.5 text-center bg-white/6 border border-white/10 rounded-2xl px-8">
                <h1 className="text-white text-3xl mt-10 font-medium">
                    {state === "login" ? "Login" : "Sign up"}
                </h1>

                <p className="text-gray-400 text-sm mt-2">Please sign in to continue</p>

                {state !== "login" && (
                    <div className="flex items-center mt-6 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-pink-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <circle cx="12" cy="8" r="5" /> <path d="M20 21a8 8 0 0 0-16 0" /> </svg>
                        <input type="text" name="name" placeholder="Name" className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none " value={formData.name} onChange={handleChange} required />
                    </div>
                )}

                <div className="flex items-center w-full mt-4 bg-white/5 ring-2 ring-white/10 focus-within:ring-pink-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /> <rect x="2" y="4" width="20" height="16" rx="2" /> </svg>
                    <input type="email" name="email" placeholder="Email id" className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none " value={formData.email} onChange={handleChange} required />
                </div>

                <div className=" flex items-center mt-4 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-pink-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /> <path d="M7 11V7a5 5 0 0 1 10 0v4" /> </svg>
                    <input type="password" name="password" placeholder="Password" className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none" value={formData.password} onChange={handleChange} required />
                </div>

                <div className="mt-4 text-left">
                    <button className="text-sm text-pink-400 hover:underline">
                        Forget password?
                    </button>
                </div>
                <button
    type="button"
    onClick={handleGoogleLogin}
    className="mt-3 w-full h-11 rounded-full flex items-center justify-center gap-3
               bg-white text-black hover:bg-gray-200 transition"
>
    <svg width="18" height="18" viewBox="0 0 48 48">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.7 1.22 9.2 3.22l6.85-6.85C35.9 2.34 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.2C12.43 13.3 17.74 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.5 24c0-1.54-.14-3.02-.4-4.45H24v8.45h12.7c-.55 2.9-2.2 5.36-4.7 7.02l7.27 5.64C43.87 36.14 46.5 30.6 46.5 24z"/>
        <path fill="#FBBC05" d="M10.54 28.42c-.48-1.45-.76-2.99-.76-4.42s.27-2.97.76-4.42l-7.98-6.2C.92 16.46 0 20.12 0 24s.92 7.54 2.56 10.62l7.98-6.2z"/>
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.14 15.9-5.84l-7.27-5.64c-2.02 1.36-4.6 2.16-8.63 2.16-6.26 0-11.57-3.8-13.46-9.12l-7.98 6.2C6.51 42.62 14.62 48 24 48z"/>
    </svg>
    Continue with Google
</button>


                <button type="submit" className="mt-2 w-full h-11 rounded-full text-white bg-pink-600 hover:bg-pink-500 transition " >
                    {state === "login" ? "Login" : "Sign up"}
                </button>

                <p onClick={() => setState(prev => prev === "login" ? "register" : "login")} className="text-gray-400 text-sm mt-3 mb-11 cursor-pointer" >
                    {state === "login" ? "Don't have an account?" : "Already have an account?"}
                    <span className="text-pink-400 hover:underline ml-1">click here</span>
                </p>
            </form>
        </div>
          
        </>
    )
}

export default Login