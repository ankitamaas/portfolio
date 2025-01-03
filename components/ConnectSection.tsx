"use client"

import React, { FC, useMemo, useState } from "react"
import { IoCopyOutline } from "react-icons/io5"
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillGithub,
} from "react-icons/ai"
import { SiLeetcode } from "react-icons/si"
import { FaLinkedinIn } from "react-icons/fa"
import { Button, FormField } from "."
import { MdKeyboardArrowRight } from "react-icons/md"
import { useFormik } from "formik"
import Link from "next/link"
import ContactSchema from "../models/ContactSchema"
import { createNewContact } from "../sanity"
import Reveal from "./Reveal"
import { toast } from "react-hot-toast"
import { useTheme } from "next-themes"
import { twMerge } from "tailwind-merge"

interface ConnectFormState {
  name: string
  email: string
  message: string
}

const initialState: ConnectFormState = {
  name: "",
  email: "",
  message: "",
}

const ConnectSection: FC = () => {
  const [loading, setLoading] = useState(false)
  const { theme } = useTheme()

  const socialData = useMemo(() => {
    return [
      {
        url: "https://github.com/ankitamaas?tab=repositories",
        icon: (
          <AiFillGithub className="text-xl cursor-pointer hover:text-primary transition-all" />
        ),
      },
      {
        url: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQG-nsqXnHV7GwAAAZQWDnm4PCrBa2XPMCCQEeU71Nb1qZ9TwDZ-X5jI69FZx0Oig4VIKs-FlaW-lDJWkLddpgXQYNeCvpRXhb9Z3AKCQMtrOP2ny3vthwU9PY33btCSebXapWI=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fankita-priyadarshinee-0b4750280%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app",
        icon: (
          <FaLinkedinIn className="text-xl cursor-pointer hover:text-primary transition-all" />
        ),
      },
      
    ]
  }, [])

  const { values, errors, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: initialState,
    validationSchema: ContactSchema,
    onSubmit: async (values) => {
      setLoading(true)
      try {
        await createNewContact(values)
        resetForm()
        toast.success("Thank you for reaching out to me!", {
          className: twMerge("rounded-lg"),
        })
      } catch (err) {
        // @ts-ignore
        toast.error("Something unexpected thing happen, please try again", {
          className: twMerge("rounded-lg"),
        })
      }
      setLoading(false)
    },
  })

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("ankitapriyadarshinee1111@gmail.com")
    toast.success("Email address copied successfully", {
      className: twMerge("rounded-lg"),
    })
  }

  return (
    <section
      id="connect"
      className="relative pt-28 pb-12 text-secondary dark:text-white"
    >
      <div className="flex flex-row-reverse items-center gap-4">
        <Reveal>
          <h1 className="text-4xl md:text-5xl  font-bold">
            Contact Me
            <span className="text-primary"> .</span>
          </h1>
        </Reveal>
        <div className="w-full flex-1 h-[0.2em] bg-gray-100 dark:bg-secondaryVarient"></div>
      </div>

      <div className="flex items-center mt-12">
        <div className="flex gap-4 flex-col md:flex-row w-full">
          <div className="flex-1 w-full ">
            <Reveal>
              <h1 className="font-opensans font-bold text-2xl w-full sm:w-[60%]">
                Let's work together on the next project
              </h1>
            </Reveal>

            <Reveal width="w-full sm:w-[70%]">
              <p className="font-opensans mt-2 leading-loose w-full">
                I will be always happy to work with you on your next project.
                You can email me or fill out the form. I will reach you as soon
                as possible.
              </p>
            </Reveal>

            <div className="mt-4">
              <Reveal>
                <span className="font-opensans font-semibold mb-2 inline-block">
                  Contact via email
                </span>
              </Reveal>

              <Reveal width="w-full md:max-w-[350px]">
                <div className="bg-gray-100 dark:bg-secondaryVarient text-secondary dark:text-white w-full md:max-w-[350px] py-3 px-2 rounded-md flex items-center justify-between">
                  <input
                    type="text"
                    className="bg-transparent w-full h-full outline-none"
                    readOnly
                    value="ankitapriyadarshinee1111@gmail.com"
                  />
                  <IoCopyOutline
                    onClick={handleEmailCopy}
                    className="text-xl cursor-pointer"
                  />
                </div>
              </Reveal>
            </div>

            <div className="mt-4">
              <Reveal>
                <span className="font-opensans font-semibold mb-3 inline-block">
                  Check out my socials
                </span>
              </Reveal>

              <Reveal>
                <div className="flex items-center gap-4">
                  {socialData.map(({ url, icon }) => (
                    <Link legacyBehavior passHref href={url}>
                      <a
                        className="no-underline outline-none text-secondaryVarient dark:text-white"
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {icon}
                      </a>
                    </Link>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          <div className="flex-1 mt-4 md:mt-0">
            <form onSubmit={handleSubmit} action="">
              <Reveal width="w-full">
                <FormField
                  onChange={handleChange}
                  name="name"
                  value={values.name}
                  label="Name"
                  parentclass="mb-4"
                  error={errors.name}
                  placeholder="john doe"
                />
              </Reveal>

              <Reveal width="w-full">
                <FormField
                  onChange={handleChange}
                  name="email"
                  value={values.email}
                  label="Email address"
                  parentclass="mb-4"
                  error={errors.email}
                  placeholder="abc@gmail.com"
                />
              </Reveal>

              <Reveal width="w-full">
                <FormField
                  onChange={handleChange}
                  name="message"
                  value={values.message}
                  multiline
                  label="Message"
                  parentclass="mb-4"
                  error={errors.message}
                  rows={4}
                />
              </Reveal>

              <Reveal width="w-full">
                <Button
                  disabled={loading}
                  loading={loading}
                  title="Reach out to me"
                  className="bg-primary text-black w-full sm:w-fit sm:ml-auto"
                  icon={<MdKeyboardArrowRight className="text-xl" />}
                />
              </Reveal>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConnectSection
