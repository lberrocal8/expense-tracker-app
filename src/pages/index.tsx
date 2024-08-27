import React from "react";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Image } from "@nextui-org/image";
import { Tabs, Tab } from "@nextui-org/tabs";

import DefaultLayout from "@/layouts/default";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/icons";

function LoginForm() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex flex-col gap-6 justify-between pt-12 px-4">
      <div>
        <h1 className="text-gray-800 font-bold text-xl">Log in into your account</h1>
        <p className="text-gray-900 text-sm">Welcome back!</p>
      </div>
      <div className="flex flex-col gap-2 pt-6">
        <Input className="max-w-xs" isClearable label="Email" placeholder="Enter your email" type="email" variant="bordered" />
        <Input className="max-w-xs" label="Password" variant="bordered" placeholder="Enter your password" type={isVisible ? "text" : "password"} endContent={
          <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
          { isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
          </button>
        }/>
      </div>
      <div className="pt-6 w-full">
        <Button className="w-full" color="primary">Log in</Button>
      </div>
    </div>
  );
}
function SignupForm() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex flex-col gap-6 justify-between pt-12 px-4">
      <div>
        <h1 className="text-gray-800 font-bold text-xl">Register in our app</h1>
        <p className="text-gray-900 text-sm">and tracker easily your expenses!</p>
      </div>
      <div className="flex flex-col gap-2 pt-6">
        <Input className="max-w-xs" isClearable label="Username" placeholder="Enter your username" type="text" variant="bordered" />
        <Input className="max-w-xs" isClearable label="Email" placeholder="Enter your email" type="email" variant="bordered" />
        <Input className="max-w-xs" label="Password" variant="bordered" placeholder="Enter your password" type={isVisible ? "text" : "password"} endContent={
          <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
          { isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
          </button>
        }/>
      </div>
      <div className="pt-6 w-full">
        <Button className="w-full" color="primary">Log in</Button>
      </div>
    </div>
  );
}

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="w-3/4">
          <div className="flex gap-2">
            <Card className="w-5/12">
              <CardBody>
                <Tabs aria-label="login/register form" color={"primary"} fullWidth>
                  <Tab key="login" title="Log in">
                    <LoginForm />
                  </Tab>
                  <Tab key="signup" title="Sign up">
                    <SignupForm />
                  </Tab>
                </Tabs>
              </CardBody>
            </Card>
            <Image alt="NextUI hero Image" src="../src/files/expense.jpg" width={600} />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}