import { Box, Text, Flex } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import GradientLayout from '../components/gradientLayout'
import { useMe, usePlaylist } from '../lib/hooks'
import prisma from '../lib/prisma'
import NextLink from 'next/link'
import { LinkOverlay } from '@chakra-ui/layout'

const Home = ({ artists }) => {
  const { user } = useMe()
  const { playlists } = usePlaylist()

  return (
    <>
      <GradientLayout
        roundImage
        color="gray"
        subtitle=" Your profile"
        title={`${user?.firstName} ${user?.lastName}`}
        description={`${user?.playlistsCount} public playlists`}
        image="https://i0.wp.com/blog.frontiersin.org/wp-content/uploads/2017/05/frontiers-in-psychology-group-music-depression.jpg?resize=940%2C627&ssl=1"
      >
        <Box
          display={['none', 'block', 'block']}
          marginLeft={['50px', '0px', '0px']}
          color="white"
          paddingX="40px"
        >
          <Box marginBottom="40px">
            <Text fontWeight="bold">Top artist this month</Text>
            <Text fontSize="md">only visible to you</Text>
          </Box>
          <Flex
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="center"
            marginBottom="40px"
          >
            {artists.map((artist) => (
              <Box
                width="200px"
                height="full"
                display="flex"
                marginBottom={20}
                alignItems="center"
                justifyContent="center"
                overflow="hidden"
                marginRight={['0', '20px', '20px']}
              >
                <Box
                  bg="gray.900"
                  borderRadius="4px"
                  padding="15px"
                  width="100%"
                >
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
        <Box display={['block', 'none', 'none']}>
          <Text color={'white'}>Your Playlists</Text>
          <Flex flexWrap="wrap">
            {playlists.map((playlist) => (
              <Box
                margin={['0', '20px', '20px']}
                // Make it Grid and responsive
              >
                <Box
                  margin={['0', '20px', '20px']}
                  width="100px"
                  height="full"
                  display="grid"
                  marginBottom={5}
                  alignItems="center"
                  justifyContent="center"
                  overflow="hidden"
                >
                  <NextLink
                    href={{
                      pathname: '/playlist/[id]',
                      query: { id: playlist.id },
                    }}
                    passHref
                  >
                    <LinkOverlay color={'white'}>
                      {`Playlist ${playlist.id}`}{' '}
                    </LinkOverlay>
                  </NextLink>
                  {/* <Text color={'white'}>{`Playlist ${playlist.id}`}</Text> */}
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>
      </GradientLayout>
    </>
  )
}

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({})

  return {
    props: { artists },
  }
}

export default Home
