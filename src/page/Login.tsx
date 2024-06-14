import React from "react";

import LoginTitle from "../components/login/LoginTitle";
import LoginForm from "../components/login/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="h-dvh">
      <div className="h-2/4 bg-stone-500"></div>
      <div className="h-2/4 bg-stone-100">
        <section className="w-1/3 bg-white rounded-2xl shadow mx-auto relative -top-40 px-12 pt-4 pb-8">
          <LoginTitle />
          <LoginForm />
        </section>
      </div>
    </div>
  );
};

export default Login;
