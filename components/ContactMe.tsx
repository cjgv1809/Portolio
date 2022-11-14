import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";

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
    <div className="h-screen flex flex-col relative text-left md:max-w-7xl px-5 md:px-10 justify-evenly items-center mx-auto">
      <h3 className="absolute top-14 md:top-20 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-4 mt-20 md:mt-32 lg:mt-24 max-w-sm sm:max-w-lg">
        <h4 className="hidden md:flex md:flex-col text-base md:text-3xl font-semibold text-center">
          I have got just what you need. <br />
          <span className="underline decoration-[#F7AB0A]/50">Let's Talk.</span>
        </h4>

        <div className="space-y-4">
          {/* <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="h-5 w-5 md:h-7 md:w-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-base md:text-2xl">+1 (123) 456-7890</p>
          </div> */}

          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="h-5 w-5 md:h-7 md:w-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-base md:text-2xl font-medium ">
              carlos_gomes1809@hotmail.com
            </p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="h-5 w-5 md:h-7 md:w-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-base md:text-2xl font-medium">
              Buenos Aires, Argentina
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col"
          >
            <div className="flex flex-col space-y-2 w-full xl:w-fit md:mx-auto">
              <div className="flex flex-col xl:flex xl:flex-row xl:space-x-2">
                <input
                  {...register("name", { required: true })}
                  className="contactInput"
                  type="text"
                  placeholder="Enter your name"
                />
                <input
                  {...register("email", { required: true })}
                  className="contactInput mt-2 xl:mt-0"
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
          </motion.form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
