import Image from "next/image";
import Link from "next/link";
import Identity from "./Identity";
import AnimText from "../typing/AnimText";

const Main = () => {
  return (
    <main className="container flex flex-col mx-auto flex-1 max-w-3xl px-6 justify-center">
      <div className="mb-2">
        <Image
          className="rounded-full transition-all duration-100"
          src="/images/icon.jpg"
          alt="my favourite photo"
          width={130}
          height={130}
          priority
        />
      </div>
      <h1 className="font-bold mb-8 text-2xl heading-text">Zechen Yang (Young)</h1>

      <div className="mb-8">
        <Identity />
      </div>

      <ul className="list-disc list-inside leading-7">
        <li>
        Computer Science student at{" "}
        <Link
        href="https://unsw.edu.au"
        target="_blank"
        rel="noopener noreferrer"
        className="border-b border-b-white"
        >
        UNSW
        </Link>
        , specializing in Artificial Intelligence, completed a three-year degree in two years.
        </li>
        <li>
        Currently focused on enhancing professional skills and gaining practical work experience.
        </li>
        <li>
        Proficient in C, Python, Java, JavaScript, and TypeScript, with experience in front-end (React) and back-end development.
        </li>
        <li>
        Fluent in English and Mandarin.
        </li>
        <li>
        Strong in leadership, communication, learning, and teamwork.
        </li>
        
        <a
          href="/ZechenYang Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline hover:text-gray-300"
        >
          Download my resume
        </a>
      
        </ul>

      {/* two lines height */}
      <div className="mt-8 leading-7 h-14">
        <AnimText delay={0} />
      </div>
    </main>
  );
};

export default Main;