import {BounceLoader} from "react-spinners"

const Loading: React.FC = () => {
  return (
    <div className="bg-white bg-opacity-50 flex justify-center items-center w-full h-svh fixed top-0 left-0 right-0 bottom-0 z-20">
      <BounceLoader  color="#704f2d" />
    </div>
  );
};

export default Loading;
