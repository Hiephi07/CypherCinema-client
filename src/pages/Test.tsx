import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

const Test = () => {
  return (
    <div >
      <Card >
        <CardHeader>
        <CardTitle className="font-black text-23.04px">Đăng ký</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
        <div className="grid gap-1 pb-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="grid gap-1 pb-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        </CardContent>
        <CardFooter>
          <Button>Thêm</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Test;
