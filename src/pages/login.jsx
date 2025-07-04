import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState(false)
  const [showForgot, setShowForgot] = useState(false)

  const handleJaybotsLogin = async () => {
    const res = await signIn('credentials', {
      username,
      password,
      callbackUrl: '/',
      redirect: false,
    })
    if (res?.error) {
      setLoginError(true)
    } else {
      setLoginError(false)
    }
  }

  return (
    <div className="p-10">
      <button
        onClick={() => signIn('google')}
        className="rounded bg-blue-500 p-2 text-white"
      >
        Sign in with Google
      </button>

      <div className="mt-6 flex flex-col gap-2">
        <input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2"
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2"
        />
        <button
          onClick={handleJaybotsLogin}
          className="rounded bg-green-600 p-2 text-white"
        >
          Jaybots Login
        </button>
        {loginError && (
          <div className="mt-2 flex flex-col items-start">
            <span className="font-semibold text-red-400">
              Incorrect password
            </span>
            <button
              className="mt-1 text-blue-400 underline hover:text-blue-600"
              onClick={() => setShowForgot(true)}
            >
              Forgot password?
            </button>
            {showForgot && (
              <span className="mt-1 text-sm text-gray-200">
                Contact anika@jaybots.org for more info.
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
