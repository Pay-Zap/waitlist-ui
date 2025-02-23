"use client";

import { useRef, useState } from "react";
import { subscribe } from "@/app/actions/subscribe";
import Input from "../input";
import Button from "../button";
import PlaneIcon from "../svg/plane";
import Confetti from "../confetti";

const SubscribeForm: React.FunctionComponent = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("Submitting...");
    setIsVisible(false);
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    console.log(formData);

    const result = await subscribe(formData); // ✅ Call the Server Action

    if (result?.error) {
      setMessage(result.error);
    } else {
      setMessage("Subscribed successfully 🎉");
      setIsVisible(true);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 flex w-full max-w-[26.875rem] flex-col items-center justify-center gap-4"
    >
      <Input name="email" placeholder="Email" type="email" ariaLabel="Email" />

      <Button type="submit">
        <PlaneIcon /> Join Waitlist
      </Button>
      {message && <p className="text-center text-white">{message}</p>}
      {isVisible && <Confetti />}
    </form>
  );
};

export default SubscribeForm;
