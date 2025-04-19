
"use client";

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const questionsPerPage = 6;
const totalQuestions = 30;

const questions = Array.from({ length: totalQuestions }, (_, i) => `Question ${i + 1}`);

export default function Home() {
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState(Array(totalQuestions).fill(""));

  const start = page * questionsPerPage;
  const end = start + questionsPerPage;
  const currentQuestions = questions.slice(start, end);

  const progress = ((page * questionsPerPage) / totalQuestions) * 100;

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[start + index] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (page < Math.ceil(totalQuestions / questionsPerPage) - 1) {
      setPage(page + 1);
    }
  };

  const handleBack = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-4">
      <h1 className="text-3xl font-bold mb-4">QuizWhiz</h1>

      <div className="w-full max-w-2xl mb-4">
        <progress className="w-full h-2" value={progress} max="100" />
        <p className="text-sm text-muted-foreground mt-1">
          {page * questionsPerPage + 1} - {Math.min((page + 1) * questionsPerPage, totalQuestions)} of {totalQuestions} Questions
        </p>
      </div>

      <div className="space-y-4 w-full max-w-2xl">
        {currentQuestions.map((question, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{question}</CardTitle>
            </CardHeader>
            <CardContent>
              <Input
                type="text"
                value={answers[start + index] || ""}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
                placeholder="Your answer"
              />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-between w-full max-w-2xl mt-4">
        <Button variant="lavender" onClick={handleBack} disabled={page === 0}>
          Back
        </Button>
        <Button variant="lavender" onClick={handleNext} disabled={page === Math.ceil(totalQuestions / questionsPerPage) - 1}>
          Next
        </Button>
      </div>
    </div>
  );
}
