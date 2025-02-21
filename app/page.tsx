import Typography from "@components/typography";
import LogoSvg from "@components/svg/logo";
import OnlineSvg from "@components/svg/online";
import ZapSvg from "@components/svg/zap";
import Input from "@components/input";
import Button from "@components/button";
import PlaneIcon from "@components/svg/plane";
import SubscribeForm from "@/components/subscribeform";

export default function Home() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const email = formData.get("email") as string;

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name: email }),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <section className="relative flex items-center justify-center">
      <ZapSvg className="absolute left-1/2 top-1/2 z-0 max-h-full w-screen max-w-[33.5625rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden" />

      <div className="container z-10 flex h-screen max-w-[47rem] flex-col items-center justify-center pl-4 pr-4">
        <div className="flex flex-col items-center justify-center">
          <LogoSvg className="max-w-[40px] md:max-w-[3.375rem]" />
          <div className="z-10 mt-6 flex flex-row items-center justify-center gap-2">
            <OnlineSvg />
            <Typography type="h6" classes="text-white">
              Available in 2026
            </Typography>
          </div>
        </div>
        <Typography
          type="h1"
          classes="mt-2 text-center text-white md:text-[4rem] md:leading-[64px]"
        >
          Be the first to experience{" "}
          <span className="text-brand-300">cashless freedom!</span>
        </Typography>
        <Typography classes="text-white text-center mt-6 text-grey-200 pl-4 pr-4 max-w-[36rem]">
          <span className="font-normal text-white">Join the waitlist</span> and
          take the first step towards seamless and secure digital transactions.
          <span className="font-normal text-white">
            Your journey to a cashless lifestyle starts here!
          </span>
        </Typography>

        <SubscribeForm />

        <Typography classes="text-grey-500 text-base font-normal leading-normal mt-3">
          Join <span className="text-brand-300">3,500+ </span>others on the
          waitlist
        </Typography>
      </div>
    </section>
  );
}
