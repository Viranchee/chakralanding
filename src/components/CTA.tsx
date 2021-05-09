import { Link as ChakraLink, Button, Stack } from "@chakra-ui/react"
import React from "react"

export const CTA = () => (
  <Stack isInline py={2} position="fixed" marginTop="90vh">
    <ChakraLink isExternal href="https://chakra-ui.com" flexGrow={1} mx={2}>
      <Button width="100%" variant="outline" colorScheme="green">
        chakra-ui
      </Button>
    </ChakraLink>
    <ChakraLink
      isExternal
      href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui-typescript"
      flexGrow={3}
      mx={2}
    >
      <Button width="100%" variant="solid" colorScheme="green">
        LOL
      </Button>
    </ChakraLink>
  </Stack>
)
