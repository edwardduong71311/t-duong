"use client";

import Hls from "hls.js";
import { useEffect, useRef } from "react";
import { Paper, Avatar, Button, Text, Anchor, ThemeIcon } from "@mantine/core";
import {
  IconBook,
  IconQuestionMark,
  IconStethoscope,
} from "@tabler/icons-react";

import classes from "./page.module.css";
import { sendGAEvent } from "@next/third-parties/google";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    const handlePlay = () => {
      sendGAEvent("event", "PLAY", { value: "record_1" });
    };

    const handlePause = () => {
      sendGAEvent("event", "PAUSE", { value: "record_1" });
    };

    if (video && videoRef.current) {
      const hls = new Hls();

      hls.loadSource("/logs/record_1/record_1.m3u8");
      hls.attachMedia(video);

      videoRef.current.addEventListener("play", handlePlay);
      videoRef.current.addEventListener("pause", handlePause);
    }

    return () => {
      if (video && videoRef.current) {
        videoRef.current.removeEventListener("play", handlePlay);
        videoRef.current.removeEventListener("pause", handlePause);
      }
    };
  }, []);

  return (
    <div className="flex flex-col gap-3 items-center p-4 xs:p-2">
      <Paper radius="md" withBorder p="lg" bg="var(--mantine-primary-color)">
        <Avatar src="/avatar.jpeg" size={120} radius={120} mx="auto" />

        <Text ta="center" fz="lg" fw={500} mt="md">
          Edward Duong
        </Text>
        <Text ta="center" c="dimmed" fz="sm">
          Senior Full-Stack Engineer
        </Text>
        <Text ta="center" c="dimmed" fz="sm">
          <Anchor href="mailto:edwardduong.work@gmail.com" target="_blank">
            edwardduong.work@gmail.com
          </Anchor>
        </Text>

        <Button
          variant="default"
          fullWidth
          mt="md"
          onClick={() =>
            window.open("https://www.linkedin.com/in/edward-duong/", "_blank")
          }
        >
          Find me here
        </Button>
      </Paper>
      <Paper
        withBorder
        radius="md"
        className={`${classes.card} ${classes.effect}`}
      >
        <ThemeIcon
          radius="md"
          variant="gradient"
          gradient={{ deg: 0, from: "blue", to: "green" }}
        >
          <IconQuestionMark size={28} stroke={1.5} />
        </ThemeIcon>
        <Text size="xl" fw={500} mt="md">
          Where am I?
        </Text>
        <pre className="max-w-[800px] text-pretty">{`In the world of code, we are always in search of our next destination. But where? For me, it's through the challenges we solve, the systems we build, and the impact we create that we truly understand our place in this ever-evolving tech landscape.`}</pre>
      </Paper>
      <Paper
        withBorder
        radius="md"
        className={`${classes.card} ${classes.effect}`}
      >
        <ThemeIcon
          size="xl"
          radius="md"
          variant="gradient"
          gradient={{ deg: 0, from: "blue", to: "green" }}
        >
          <IconBook size={28} stroke={1.5} />
        </ThemeIcon>
        <Text size="xl" fw={500} mt="md">
          What is next?
        </Text>
        <pre className="max-w-[800px] text-pretty">{`The future of convenience lies in the hands of those who dare to shape intelligent machines. By learning AI, we unlock the power to create robots that will not only lighten our workload but revolutionize the way we live, one task at a time.`}</pre>
      </Paper>
      <Paper withBorder radius="md" className={classes.card}>
        <ThemeIcon
          size="xl"
          radius="md"
          variant="gradient"
          gradient={{ deg: 0, from: "red", to: "orange" }}
        >
          <IconStethoscope size={28} stroke={1.5} />
        </ThemeIcon>
        <Text size="xl" fw={500} mt="md">
          Health Buddy
        </Text>
        <pre className="max-w-[800px] text-pretty">{`Empowering health through technology: Health Buddy bridges the gap between symptoms and care, providing users with a smart virtual agent that understands their needs and helps them take the next step toward wellness.`}</pre>
        <Text mt="md">Manage hospital:</Text>
        <Anchor
          href="https://github.com/edwardduong71311/hb-hospital-mgmt"
          target="_blank"
        >
          https://github.com/edwardduong71311/hb-hospital-mgmt
        </Anchor>
        <Text mt="md">Manage chatbot knowledge base:</Text>
        <Anchor
          href="https://github.com/edwardduong71311/hb-knowledge-base"
          target="_blank"
        >
          https://github.com/edwardduong71311/hb-knowledge-base
        </Anchor>
        <Text mt="md">Chatbot Interface:</Text>
        <Anchor
          href="https://github.com/edwardduong71311/hb-fe"
          target="_blank"
        >
          https://github.com/edwardduong71311/hb-fe
        </Anchor>
        <Text mt="md">Chatbot Logic:</Text>
        <Anchor
          href=" https://github.com/edwardduong71311/hb-be"
          target="_blank"
        >
          https://github.com/edwardduong71311/hb-be
        </Anchor>
      </Paper>
      <Paper withBorder radius="md" className={classes.card}>
        <pre className="text-wrap break-words">{`• Understand some basic intentions.
• Provide advices base on symptoms.
• Know how to query for more information.
• Summarize the conversation.`}</pre>
        <br />
        <video ref={videoRef} controls className="w-full " />
      </Paper>
    </div>
  );
}
