import { Box, Text, Flex } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import GradientLayout from '../components/gradientLayout'
import { useMe } from '../lib/hooks'
import prisma from '../lib/prisma'

const Home = ({ artists }) => {
  const { user } = useMe()

  return (
    <GradientLayout
      roundImage
      color="gray"
      subtitle=" Your profile"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistsCount} public playlists`}
      image="https://i0.wp.com/blog.frontiersin.org/wp-content/uploads/2017/05/frontiers-in-psychology-group-music-depression.jpg?resize=940%2C627&ssl=1"
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artist this month
          </Text>
          <Text fontSize="md">only visible to you</Text>
        </Box>
        <Flex
          // make it responsive
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="40px"
        >
          {artists.map((artist) => (
            <Box
              // make it responsive
              width="200px"
              height="full"
              display="flex"
              marginBottom={20}
              alignItems="center"
              justifyContent="center"
              overflow="hidden"
              borderRadius="lg"
              // backgroundColor="gray.100"
            >
              {/* paddingX="10px"
              width="20%"
            > */}
              <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
                <Image
                  src="https://placekitten.com/300/300"
                  borderRadius="100%"
                />
                <Box marginTop="20px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  )
}

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({})

  return {
    props: { artists },
  }
}

export default Home
