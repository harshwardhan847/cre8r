import VideoExample from "./VideoExample";
import WhatsAppButton from "./WhatsAppButton";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="w-full mx-auto mt-24 flex flex-col items-center justify-start px-4 md:pt-12 relative md:min-h-[80vh]">
      <div className="w-full absolute -top-20 left-0 scale-100 hue-rotate-180 h-full z-0">
        <img
          src="/header_bg.png"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-contain 2xl:object-cover object-bottom-left opacity-100"
        />
      </div>
      <div className="flex flex-col gap-4 z-10 items-center justify-center">
        {/* header heading */}
        <h1 className="h1 text-center">
          End-to-End Influencer Marketing <br className="hidden sm:block" />
          Powered by AI
        </h1>
        <h2 className="body-lg max-w-lg text-center">
          From first brief to final conversion. Discover, execute, track affiliates, and generate leads — All in one place.
        </h2>
        <div className="flex items-center justify-center">

          <WhatsAppButton />
        </div>
      </div>
      <VideoExample />
    </header>
  );
};

export default Header;
