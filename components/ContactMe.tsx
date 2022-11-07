import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);

  return (
    <div className="h-screen flex flex-col relative text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-4 mt-32">
        <h4 className="text-3xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50">Let's Talk.</span>
        </h4>

        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-2xl">+1 (123) 456-7890</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-2xl">carlos_gomes1809@hotmail.com</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-2xl">123 Dev Lane</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <div className="flex flex-col space-y-2 w-fit mx-auto">
              <div className="flex space-x-2">
                <input
                  {...register("name", { required: true })}
                  className="contactInput"
                  type="text"
                  placeholder="Enter your name"
                />
                <input
                  {...register("email", { required: true })}
                  className="contactInput"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <input
                {...register("subject", { required: true })}
                className="contactInput"
                type="text"
                placeholder="Enter your subject"
              />
              <textarea
                {...register("message", { required: true })}
                className="contactInput resize-none"
                placeholder="Enter your message"
              />
              <button
                type="submit"
                className="bg-[#F7AB0A] py-3 px-6 rounded text-black font-bold text-lg"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
