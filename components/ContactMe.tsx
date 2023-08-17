import React, { useRef, useState } from "react";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PageInfo } from "../typings";
import { formatPhoneNumber } from "../utils/formatPhoneNumber";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
};

function ContactMe({ pageInfo }: Props) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    message: Yup.string().required("Message is required"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(validationSchema),
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    setIsLoading(true);

    try {
      const result = await emailjs.send(
        `${process.env.NEXT_PUBLIC_EMAILJS_SERV}`,
        `${process.env.NEXT_PUBLIC_EMAILJS_TEMP}`,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Carlos",
          to_email: "carlos.gomes.1809@gmail.com",
        },
        `${process.env.NEXT_PUBLIC_EMAILJS_API}`
      );
      console.log("result", result);
      toast.success("The message has been sent.");
      toast.info("I will get back to you as soon as possible. Thank you!");
      formRef.current!.reset();
      reset();
    } catch (error: any) {
      console.error(error.text);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] px-5 xl:px-10  justify-center xl:space-y-7 mx-auto items-center">
        <h3 className="absolute top-14 md:top-16 uppercase tracking-[20px] text-center text-gray-500 text-lg md:text-2xl">
          Contact
        </h3>

        <div className="flex flex-col space-y-4 mt-20 md:mt-32 lg:mt-24 w-full">
          <h4 className="hidden md:flex md:flex-col text-base md:text-3xl font-semibold text-center">
            I have got just what you need. <br />
            <span className="underline decoration-[#F7AB0A]/50">
              Let's Talk.
            </span>
          </h4>

          <div className="flex items-center 3xl:relative 5xl:relative">
            <div className="fixed 3xl:absolute 5xl:absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col z-50">
              <div className="hidden group cursor-pointer p-2 space-x-2 transition-all duration-200 ease-in-out bg-slate-200/20 rounded-t xl:flex xl:items-center relative hover:rounded-tr-none">
                <PhoneIcon className="h-5 w-5 md:h-7 md:w-7 text-[#F7AB0A] animate-pulse" />
                <motion.p
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: -8 }}
                  transition={{ duration: 0.5 }}
                  className="hidden text-sm whitespace-nowrap text-white font-medium absolute left-full transform -translate-y-1/2 xl:group-hover:block bg-slate-200/20 p-3 rounded-l-none rounded"
                >
                  {formatPhoneNumber({ phoneNumber: pageInfo?.phoneNumber })}
                </motion.p>
              </div>
              <div className="hidden group cursor-pointer p-2 space-x-2 transition-all duration-200 ease-in-out bg-slate-200/20 xl:flex xl:items-center relative">
                <EnvelopeIcon className="h-5 w-5 md:h-7 md:w-7 text-[#F7AB0A] animate-pulse" />
                <motion.p
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: -8 }}
                  transition={{ duration: 0.5 }}
                  className="hidden text-sm whitespace-nowrap text-white font-medium absolute left-full transform -translate-y-1/2 xl:group-hover:block bg-slate-200/20 p-3 rounded-l-none rounded"
                >
                  {pageInfo?.email}
                </motion.p>
              </div>
              <div className="hidden group cursor-pointer p-2 space-x-2 transition-all duration-200 ease-in-out bg-slate-200/20 rounded-b xl:flex xl:items-center relative hover:rounded-br-none">
                <MapPinIcon className="h-5 w-5 md:h-7 md:w-7 text-[#F7AB0A] animate-pulse" />
                <motion.p
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: -8 }}
                  transition={{ duration: 0.5 }}
                  className="hidden text-sm whitespace-nowrap text-white font-medium absolute left-full transform -translate-y-1/2 xl:group-hover:block bg-slate-200/20 p-3 rounded-l-none rounded"
                >
                  {pageInfo?.address}
                </motion.p>
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col mx-auto mt-10 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl space-y-4 w-full"
              ref={formRef}
            >
              <div className="flex flex-col w-full">
                <div className="flex flex-col xl:flex xl:flex-row xl:space-x-2">
                  <div className="flex-1">
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      {...register("name")}
                      className={`contactInput ${
                        errors?.name && `border-red-500`
                      }`}
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name (required)"
                    />
                    {errors?.name && (
                      <p className="text-sm text-left font-medium text-red-400">
                        {errors?.name?.message}
                      </p>
                    )}
                  </div>
                  <div className="flex-1">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      {...register("email")}
                      className={`contactInput mt-2 xl:mt-0 ${
                        errors?.email && `border-red-500`
                      }`}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email (required)"
                    />
                    {errors?.email && (
                      <p className="text-sm text-left font-medium text-red-400">
                        {errors?.email?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    className={`contactInput mt-2 resize-none scrollbar-thin ${
                      errors?.message && `border-red-500`
                    }`}
                    id="message"
                    name="message"
                    placeholder="Enter your message (required)"
                  />
                  {errors?.message && (
                    <p className="text-sm text-left font-medium text-red-400">
                      {errors?.message?.message}
                    </p>
                  )}
                </div>
                <motion.button
                  type="submit"
                  className="bg-[#F7AB0A] group mt-4 py-3 px-6 rounded text-[#242424] font-bold text-lg flex items-center justify-center disabled:bg-slate-400 disabled:text-white hover:bg-[#F7AB0A]/40 duration-300 ease-in-out"
                  disabled={isLoading}
                  whileHover={{ color: "#FFF" }}
                >
                  {isLoading ? "Sending..." : "Send"}
                  <span className="group-hover:translate-x-5 transform transition-transform duration-300 ease-in-out">
                    <PaperAirplaneIcon className="h-5 w-5 ml-2" />
                  </span>
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default ContactMe;
