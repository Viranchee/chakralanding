import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import { CTA } from "../components/CTA";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

export default function Index() {
  return (
    <Stack alignSelf="center" alignItems="center" textAlign="center">
      <CTA />

      <DarkModeSwitch />
    </Stack>
  );
}
