import {
    Card,
    Button,
    Typography,
  } from "@material-tailwind/react";
  
  export function ContactForm() {
    return (
      <Card color="transparent" shadow={false}>
        <form className="relative mt-8 mb-2 sm:w-128 main-font">
          <div className="mb-1 flex flex-col gap-3 lg:gap-6">
            <Typography
              color="white"
              className="-mb-3 second-font-bold text-lg tracking-wider"
            >
              Name
            </Typography>
            <input
                type="text"
              placeholder="Your name..."
              className="p-3 text-lg border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-rightBar focus:border-rightBar placeholder-gray-600"
            />
            <Typography
              color="white"
              className="-mb-3 second-font-bold text-lg tracking-wider"
            >
              Email
            </Typography>
            <input
                type="email"
              placeholder="example@gmail.com"
              className="p-3 text-lg border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-rightBar focus:border-rightBar placeholder-gray-600"
            />
            <Typography
              color="white"
              className="-mb-3 second-font-bold text-lg tracking-wider"
            >
              Message
            </Typography>
            <textarea
              rows="4"
              placeholder="Your message here..."
              className="p-3 text-lg border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-rightBar focus:border-rightBar placeholder-gray-600"
            ></textarea>
          </div>
          <Button className="mt-6 bg-white px-12 py-4 rounded-full cursor-pointer no-underline text-black second-font-black letter-spacing-5 transition-colors duration-400 hover:bg-rightBar hover:text-white">
            Send Email
          </Button>
        </form>
      </Card>
    );
  }
  