const Login = () => {
  return (
    <div className="  realtive h-200 w-auto bg-red-500 flex justify-center items-center">
      <div className="bg-white p-10  opacity-90 shadow-lg shadow-lg rounded-lg p-6">
      <h1>Log in</h1>
      <div>
        <h2>Email</h2>
        <input type="text" placeholder="example@example.com" />

        <h2>Password</h2>
        <input type="password" placeholder="Password"></input>
 
        <h2>forget Password?</h2>
        <button className="border border-red-500">Log in </button>
        <h3>or countinue with</h3>
      </div>
      </div>
    </div>
  );
};
export default Login;
