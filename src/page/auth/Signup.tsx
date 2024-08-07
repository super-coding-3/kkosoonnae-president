import React from "react";

import AuthPageTitle from "../../components/auth/AuthPageTitle";
import SignupForm from "../../components/auth/SignupForm";

const Signup: React.FC = () => {
  return (
    <main className="h-dvh">
      <div className="h-2/4 bg-stone-500"></div>
      <div className="h-2/4 bg-stone-100">
        <section className="w-2/5 bg-white rounded-2xl shadow mx-auto relative -top-40 px-12 pt-4 pb-8 ">
          <AuthPageTitle subtitle="꼬순내 사장님" title="회원가입" />
          <SignupForm />
        </section>
      </div>
    </main>
  );
};

export default Signup;
