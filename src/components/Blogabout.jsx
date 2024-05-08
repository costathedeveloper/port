import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FingerPrintIcon } from "@heroicons/react/24/solid";

const BlogAbout = () => {
  return (
    <section className="-mt-32 bg-black px-4 pb-20 pt-4">
      <div className="container mx-auto">
        <div className="mt-32 flex flex-wrap items-center">
          <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-black p-2 text-center shadow-lg">
              <FingerPrintIcon className="h-8 w-8 text-white" />
            </div>
            <Typography
              variant="h3"
              className="mb-3 font-bold text-white"
            >
              Working with us is a pleasure
            </Typography>
            <Typography className="mb-8 font-normal text-white">
              Don't let your users guess by attaching tooltips and popovers to
              any element. Just make sure you enable them first via JavaScript.
              <br />
              <br />
              The kit comes with three pre-built pages to help you get started
              faster. You can change the text and images, and you're good to
              go. Just make sure you enable them first via JavaScript.
            </Typography>
            <Button variant="filled">Read more</Button>
          </div>
          <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
            <Card className="shadow-lg border shadow-zinc-500/10 rounded-lg bg-black p-4">
              <CardHeader floated={false} className="relative h-56">
                <img
                  alt="Card Image"
                  src="/assets/images/about.jpg"
                  className="h-full w-full"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="small" color="white" className="font-normal">Enterprise</Typography>
                <Typography
                  variant="h5"
                  color="white"
                  className="mb-3 mt-2 font-bold"
                >
                  Top Notch Services
                </Typography>
                <Typography className="font-normal text-white">
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogAbout;
