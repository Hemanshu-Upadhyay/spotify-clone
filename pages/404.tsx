import { Box, Flex, Input, Button } from '@chakra-ui/react'
import NextImage from 'next/image'
function Notfound() {
  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex
        justify="center"
        align="center"
        height="100px"
        borderBottom="white 1px solid"
      >
        <NextImage src="/Spotify_Logo.png" height={60} width={120} />
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <Box padding="50px" bg="gray.900" borderRadius="6px">
          <form>
            <p> OOPS ! </p>
            <p> This page does not exist </p>
            <Button
              bg="green.500"
              sx={{
                '&:hover': {
                  bg: 'green.300',
                },
              }}
            >
              <a href="/">"Go Back to HomePage"</a>
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  )
}

Notfound.authPage = true

export default Notfound
