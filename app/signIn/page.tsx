const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="w-full max-w-sm p-6 border">
                <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
                <form className="space-y-4">
                    <input
                        type="email"
                        placeholder="email"
                        className="w-full border rounded px-3 py-2"
                    />

                    <input
                        type="password"
                        placeholder="password"
                        className="w-full border rounded px-3 py-2"
                    />

                    <button
                        type="submit"
                        className="w-full text-white py-2 cursor-pointer bg-gray-400"
                    >Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
