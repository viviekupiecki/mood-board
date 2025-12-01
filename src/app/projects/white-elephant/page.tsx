"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AiFillGift } from "react-icons/ai";
import {
  BsCheck2Circle,
  BsPlusCircle,
  BsTrash3Fill,
} from "react-icons/bs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface Participant {
  firstName: string;
  lastName: string;
  order: number;
  pickedGift?: string;
}

interface Gift {
  name: string;
  color: string;
  available: boolean;
}

const WhiteElephantGame = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [availableGifts, setAvailableGifts] = useState<Gift[]>([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const shuffleArray = (array: any[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const addParticipant = () => {
    setParticipants([
      ...participants,
      { firstName: "", lastName: "", order: participants.length + 1 },
    ]);
  };

  const removeParticipant = (index: number) => {
    const newParticipants = [...participants];
    newParticipants.splice(index, 1);
    setParticipants(newParticipants);
  };

  const generateGifts = (numGifts: number) => {
    const giftColors = [
      "text-red-600",
      "text-green-600",
      "text-blue-600",
      "text-yellow-600",
      "text-purple-600",
      "text-pink-600",
      "text-indigo-600",
    ];
    const gifts = [];

    for (let i = 0; i < numGifts; i++) {
      gifts.push({
        name: `Gift ${i + 1}`,
        color: giftColors[i % giftColors.length],
        available: true,
      });
    }

    return shuffleArray(gifts);
  };

  const startGame = () => {
    const shuffledParticipants = shuffleArray([...participants]);
    const generatedGifts = generateGifts(participants.length);
    setParticipants(shuffledParticipants);
    setAvailableGifts(generatedGifts);
  };

  const selectGift = (giftIndex: number) => {
    if (availableGifts[giftIndex].available) {
      const selectedGift = availableGifts[giftIndex];

      const updatedParticipants = [...participants];
      updatedParticipants[currentPlayerIndex] = {
        ...updatedParticipants[currentPlayerIndex],
        pickedGift: selectedGift.name,
      };
      setParticipants(updatedParticipants);

      const updatedGifts = [...availableGifts];
      updatedGifts[giftIndex] = {
        ...updatedGifts[giftIndex],
        available: false,
      };
      setAvailableGifts(updatedGifts);

      const nextPlayerIndex = (currentPlayerIndex + 1) % participants.length;
      setCurrentPlayerIndex(nextPlayerIndex);
    }
  };

  return (
    <div className="w-full min-w-0 p-6">
      <Card className="">
        <CardHeader>
        <CardTitle>
        <h1 className="font-semibold">White Elephant</h1>
        </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            {participants.map((participant, index) => (
              <div key={index} className="flex items-center space-x-4 mb-2">
                <Label>First Name</Label>
                <Input
                  type="text"
                  value={participant.firstName}
                  placeholder="First Name"
                  onChange={(e) => {
                    const newParticipants = [...participants];
                    newParticipants[index].firstName = e.target.value;
                    setParticipants(newParticipants);
                  }}
                />
                <Label>Last Name</Label>
                <Input
                  type="text"
                  value={participant.lastName}
                  placeholder="Last Name"
                  onChange={(e) => {
                    const newParticipants = [...participants];
                    newParticipants[index].lastName = e.target.value;
                    setParticipants(newParticipants);
                  }}
                />
                <Button
                  variant="link"
                  onClick={() => removeParticipant(index)}
                  className="text-red-500"
                >
                  <BsTrash3Fill />
                </Button>
              </div>
            ))}
            <div className="space-x-3">
              <Button onClick={addParticipant} className="mt-4">
                <BsPlusCircle className="text-accent" />
                Add Participant
              </Button>
              <Button onClick={startGame} variant="ghost" className="mb-4">
                <BsCheck2Circle />
                Start Game
              </Button>
            </div>
          </div>

          <div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-primary bg-muted-foreground/50">
                    First Name
                  </TableHead>
                  <TableHead className="text-primary bg-muted-foreground/50">
                    Last Name
                  </TableHead>
                  <TableHead className="text-primary bg-muted-foreground/50">
                    Picked Gift
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {participants.map((participant, index) => (
                  <TableRow className="bg-white" key={index}>
                    <TableCell>{participant.firstName}</TableCell>
                    <TableCell>{participant.lastName}</TableCell>
                    <TableCell>
                      {participant.pickedGift ?? "Not picked yet"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {availableGifts.length > 0 && (
              <div className="mx-4">
                <h2 className="py-2">
                  It’s {participants[currentPlayerIndex]?.firstName}’s turn!
                </h2>
                <div className="grid grid-cols-4 space-x-3">
                  {availableGifts.map((gift, index) => (
                    <div
                      key={index}
                      className={`p-4 mb-4 ${
                        gift.available ? "cursor-pointer" : "opacity-30 cursor-not-allowed"
                      }`}
                      onClick={() => gift.available && selectGift(index)}
                    >
                      <AiFillGift className={`${gift.color} w-10 h-10`} />
                      <span>{gift.name}</span>
                      {/* <Input type="text" /> */}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WhiteElephantGame;
