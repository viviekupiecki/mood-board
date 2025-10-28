import React , { useState } from "react";
import { AiOutlineSun, AiOutlineMoon, AiOutlineArrowUp } from "react-icons/ai";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
type AvatarProps = React.ComponentProps<typeof Card>;
import "./avatar.css";

const Avatar: React.FC<AvatarProps> = ({ className, ...props }) => {
  return (
    <Card className="bg-muted-foreground/70 h-3/4">
      <CardHeader>
        <CardTitle className="pb-2">Vivienne Kupiecki</CardTitle>
      </CardHeader>
      <CardContent className="grid col-span-3 gap-3 items-center">
        <div className="inline-flex">
          <div className="pb-2 pl-1">23</div>
          <div className="px-1">|</div>
          <div>UI Designer, Front-end Developer</div>
        </div>
        <div className="grid grid-cols-3 gap-3 items-center">
          <div className="inline-flex">
            <AiOutlineSun />
            Taurus
          </div>
          <div className="inline-flex">
            <AiOutlineMoon /> Aries
          </div>
          <div className="inline-flex">
            <AiOutlineArrowUp /> Cancer{" "}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Avatar;
