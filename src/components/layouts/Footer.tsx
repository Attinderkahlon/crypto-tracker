import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-40 w-full bg-black">
      <div className="mx-auto max-w-6xl justify-evenly px-4">
        <div className="my-4 grid gap-2">
          <span>Tools & Libraries used:</span>
          <div className="flex gap-4 [&>div>img]:h-8 [&>div>span]:absolute [&>div>span]:-bottom-5 [&>div>span]:hidden [&>div>span]:animate-pulse [&>div>span]:whitespace-nowrap [&>div>span]:text-xs">
            <div className="group relative">
              <img src={"/images/react.svg"} alt="React" />
              <span className="group-hover:block">React</span>
            </div>
            <div className="group relative">
              <img src={"/images/tailwind.svg"} alt="Tailwind" />
              <span className="group-hover:block">Tailwind</span>
            </div>
            <div className="group relative">
              <img src={"/images/typescript.svg"} alt="TypeScript" />
              <span className="group-hover:block">TypeScript</span>
            </div>
            <div className="group relative">
              <img src={"/images/vs-code.png"} alt="VS Code" />
              <span className="group-hover:block">VS Code</span>
            </div>
            <div className="group relative">
              <img src={"/images/date-fns.png"} alt="Date FNS" />
              <span className="group-hover:block">Date FNS</span>
            </div>
            <div className="group relative">
              <img src={"/images/chartjs-2.svg"} alt="ChartJS 2" />
              <span className="group-hover:block">ChartJS 2</span>
            </div>
            <div className="group relative">
              <img src={"/images/axios.svg"} alt="Axios" className="w-20" />
              <span className="group-hover:block">Axios</span>
            </div>
            <div className="group relative">
              <img src={"/images/aws-s3.svg"} alt="AWS S3" />
              <span className="group-hover:block">AWS S3</span>
            </div>
            <div className="group relative">
              <img src={"/images/coinGecko.png"} alt="Coin Gecko" />
              <span className="group-hover:block">Coin Gecko</span>
            </div>
          </div>
        </div>

        <div className="ml-auto flex flex-col items-end gap-2">
          <Link
            to="/"
            className="flex w-min flex-nowrap items-center space-x-2"
          >
            <FaCoins className="h-6 w-6 text-purple-600" />
            <span className="flex flex-nowrap font-semibold">
              COIN <span className="text-purple-600">TRACE</span>
            </span>
          </Link>
          <small>© 2022 Attinder Singh</small>
        </div>
      </div>
    </div>
  );
};
export default Footer;
