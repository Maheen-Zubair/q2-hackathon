'use client'
import Image from "next/image";
import image from "../../../public/Group 124.png";
import image2 from "../../../public/Group 100.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
const formSchema = z.object({
   username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(1, {
    message: "Subject is required.",
  }),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
})

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      subject: "",
      message: "",    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <div>
      <div className="lg:h-[286px] mt-5 sm:mb-16 mb-7 h-[120px] md:h-[220px] w-full bg-[#F6F5FF] flex flex-col items-start justify-center">
        <div className=" flex flex-col items-start justify-center lg:pl-28 pl-10 md:pl-16">
          <h1 className="lg:text-[36px] text-[20px] md:text-[28px] font-bold text-[#101750]">
            Contact Us
          </h1>
          <p className="text-black lg:text-[16px] text-[12px] md:text-[14px] ">
            Home . Pages <span className="text-[#FB2E86]">. Contact Us</span>
          </p>
        </div>
      </div>
      <div className="h-full pb-24 bg-white flex flex-col justify-center items-center p-4">
        <div className="max-w-5xl w-full bg-white  rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-bold text-[#151875] mb-4">
                Information About Us
              </h2>
              <p className="text-[#8A8FB9]">
                Learn more about our services and collaboration offerings. We
                aim to provide top-notch solutions and build strong client
                relationships.
              </p>
              <div className="flex space-x-3 mt-4">
                <span className="w-6 h-6 bg-[#5625DF] rounded-full"></span>
                <span className="w-6 h-6 bg-[#FF27B7] rounded-full"></span>
                <span className="w-6 h-6 bg-[#37DAF3] rounded-full"></span>
              </div>
            </div>

            <div className="lg:pl-[100px] md:pl-[130px]">
              <h2 className="text-2xl font-bold text-[#151875] mb-4">
                Contact Way
              </h2>
              <div className="space-y-3">
                <Image src={image2} alt="image2" />
              </div>
            </div>
          </div>
          <div className="md:flex-row flex-col flex justify-between">
            <div className="mt-10 ">
              <h2 className="text-2xl font-bold text-[#151875] mb-6">
                Get In Touch
              </h2>
              <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 p-2 md:grid-cols-2 gap-4"
        >
          {/* Username Field */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel className="text-[#151875] font-semibold">Username</FormLabel>
                <FormControl>
                  <input
                    placeholder="Your Name"
                    {...field}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel className="text-[#151875] font-semibold">Email</FormLabel>
                <FormControl>
                  <input
                    type="email"
                    placeholder="Your Email"
                    {...field}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Subject Field */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel className="text-[#151875] font-semibold">Subject</FormLabel>
                <FormControl>
                  <input
                    placeholder="Subject"
                    {...field}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
                    />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel className="text-[#151875] font-semibold" >Message</FormLabel>
                <FormControl>
                  <textarea
                    placeholder="Type Your Message"
                    {...field}
                    rows={4}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
                  ></textarea>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="col-span-2 h-[44px] w-[157px] bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition duration-300"
          >
            Send Mail
          </Button>
        </form>
      </Form>
            </div>

            <div className="mt-10 flex md:justify-center md:items-center">
              <Image src={image} alt="networkImage" width={400} height={300} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
