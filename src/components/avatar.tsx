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
    <Card className="min-h-[187px]">
      <CardHeader>
        <CardTitle>Vivienne Kupiecki</CardTitle>
      </CardHeader>
      <CardContent className="grid col-span-3 gap-3 items-center">
        <div className="flex items-center gap-x-2">
          <div>23</div>
          <div>|</div>
          <div>UI Designer, Front-end Developer</div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="flex items-center gap-x-2">
            <AiOutlineSun />
            Taurus
          </div>
          <div className="flex items-center gap-x-2">
            <AiOutlineMoon /> Aries
          </div>
          <div className="flex items-center gap-x-2">
            <AiOutlineArrowUp /> Cancer{" "}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Avatar;
