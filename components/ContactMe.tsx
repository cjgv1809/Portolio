import React, { useRef, useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
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
    console.log("formData", formData);
    console.log("errors", errors);

    try {
      const result = await emailjs.send(
        "service_mut0c2q",
        "template_thakryh",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Carlos",
          to_email: "carlos.gomes.1809@gmail.com",
        },
        "EGA3c3SScoEOK7aOz"
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
      <div className="h-screen flex flex-col relative md:max-w-7xl px-5 md:px-10 justify-evenly items-center mx-auto">
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

          <div className="flex items-center">
            <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col">
              <div className="hidden group cursor-pointer p-2 space-x-2 transition-all duration-200 ease-in-out bg-slate-200/20 rounded-t xl:flex xl:items-center relative hover:rounded-tr-none">
                <PhoneIcon className="h-5 w-5 md:h-7 md:w-7 text-[#F7AB0A] animate-pulse" />
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: -8 }}
                  transition={{ duration: 0.5 }}
                  className="hidden text-sm whitespace-nowrap text-white font-semibold absolute left-full transform -translate-y-1/2 xl:group-hover:block bg-slate-200/20 p-3 rounded-l-none rounded"
                >
                  +54 9 11 2386-6593
                </motion.p>
              </div>
              <div className="hidden group cursor-pointer p-2 space-x-2 transition-all duration-200 ease-in-out bg-slate-200/20 xl:flex xl:items-center relative">
                <EnvelopeIcon className="h-5 w-5 md:h-7 md:w-7 text-[#F7AB0A] animate-pulse" />
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: -8 }}
                  transition={{ duration: 0.5 }}
                  className="hidden text-sm whitespace-nowrap text-white font-semibold absolute left-full transform -translate-y-1/2 xl:group-hover:block bg-slate-200/20 p-3 rounded-l-none rounded"
                >
                  carlos_gomes1809@hotmail.com
                </motion.p>
              </div>
              <div className="hidden group cursor-pointer p-2 space-x-2 transition-all duration-200 ease-in-out bg-slate-200/20 rounded-b xl:flex xl:items-center relative hover:rounded-br-none">
                <MapPinIcon className="h-5 w-5 md:h-7 md:w-7 text-[#F7AB0A] animate-pulse" />
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: -8 }}
                  transition={{ duration: 0.5 }}
                  className="hidden text-sm whitespace-nowrap text-white font-semibold absolute left-full transform -translate-y-1/2 xl:group-hover:block bg-slate-200/20 p-3 rounded-l-none rounded"
                >
                  Buenos Aires, Argentina
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
                    <input
                      {...register("name")}
                      className={`contactInput ${
                        errors?.name && `border-red-500`
                      }`}
                      name="name"
                      type="text"
                      placeholder="Enter your name (required)"
                      required
                    />
                    {errors?.name && (
                      <p className="text-sm font-medium text-red-400">
                        {errors?.name?.message}
                      </p>
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      {...register("email")}
                      className={`contactInput mt-2 xl:mt-0 ${
                        errors?.email && `border-red-500`
                      }`}
                      name="email"
                      type="email"
                      placeholder="Enter your email (required)"
                      required
                    />
                    {errors?.email && (
                      <p className="text-sm font-medium text-red-400">
                        {errors?.email?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <textarea
                    {...register("message")}
                    className={`contactInput mt-2 resize-none scrollbar-thin ${
                      errors?.message && `border-red-500`
                    }`}
                    name="message"
                    placeholder="Enter your message (required)"
                    required
                  />
                  {errors?.message && (
                    <p className="text-sm font-medium text-red-400">
                      {errors?.message?.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-[#F7AB0A] mt-4 py-3 px-6 rounded text-black font-bold text-lg disabled:bg-slate-400 disabled:text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send"}
                </button>
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
