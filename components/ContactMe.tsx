import React, { useRef, useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./Modal";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    setIsLoading(true);
    console.log("formData", formData);
    console.log("errors", errors);

    emailjs
      .send(
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
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
          toast.success("The message has been sent.");
          toast.info("I will get back to you as soon as possible. Thank you!");
          formRef.current!.reset();
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
        }
      );
  };

  return (
    <>
      <div className="h-screen flex flex-col relative md:max-w-7xl px-5 md:px-10 justify-evenly items-center mx-auto">
        <h3 className="absolute top-14 md:top-16 uppercase tracking-[20px] text-center text-gray-500 text-lg md:text-2xl">
          Contact
        </h3>

        <div className="flex flex-col space-y-4 mt-20 md:mt-32 lg:mt-24 max-w-sm sm:max-w-lg">
          <h4 className="hidden md:flex md:flex-col text-base md:text-3xl font-semibold text-center">
            I have got just what you need. <br />
            <span className="underline decoration-[#F7AB0A]/50">
              Let's Talk.
            </span>
          </h4>

          <div className="space-y-4 pb-3">
            <div className="flex items-center justify-center space-x-5">
              <PhoneIcon className="h-5 w-5 md:h-7 md:w-7 text-[#F7AB0A] animate-pulse" />
              <p className="text-base md:text-2xl">+5491123866593</p>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <EnvelopeIcon className="h-5 w-5 md:h-7 md:w-7 text-[#F7AB0A] animate-pulse" />
              <p className="text-base md:text-xl font-medium ">
                carlos_gomes1809@hotmail.com
              </p>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <MapPinIcon className="h-5 w-5 md:h-7 md:w-7 text-[#F7AB0A] animate-pulse" />
              <p className="text-base md:text-xl font-medium">
                Buenos Aires, Argentina
              </p>
            </div>

            <form
              // initial={{ opacity: 0, y: 100 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
              // transition={{ duration: 1.2 }}
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col"
              ref={formRef}
            >
              <div className="flex flex-col space-y-2 w-full xl:w-fit md:mx-auto">
                <div className="flex flex-col xl:flex xl:flex-row xl:space-x-2">
                  <div>
                    <input
                      {...register("name", { required: true })}
                      className="contactInput"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                    {errors?.name && errors?.name?.type === "required" && (
                      <Modal
                        isOpen={isOpen}
                        closeModal={() => setIsOpen(false)}
                      />
                    )}
                  </div>
                  <div>
                    <input
                      {...register("email", {
                        required: true,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "invalid email address",
                        },
                      })}
                      className="contactInput mt-2 xl:mt-0"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                    {(errors?.email && errors?.email?.type === "required" && (
                      <Modal
                        isOpen={isOpen}
                        closeModal={() => setIsOpen(false)}
                      />
                    )) ||
                      (errors?.email && errors?.email?.type === "pattern" && (
                        <Modal
                          isOpen={isOpen}
                          closeModal={() => setIsOpen(false)}
                        />
                      ))}
                  </div>
                </div>
                <div>
                  <textarea
                    {...register("message", { required: true })}
                    className="contactInput resize-none"
                    name="message"
                    placeholder="Enter your message"
                    required
                  />
                  {errors?.message && errors?.message?.type === "required" && (
                    <Modal
                      isOpen={isOpen}
                      closeModal={() => setIsOpen(false)}
                    />
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-[#F7AB0A] py-3 px-6 rounded text-black font-bold text-lg disabled:bg-slate-500 disabled:text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
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
