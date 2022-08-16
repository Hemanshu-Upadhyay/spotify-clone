import { Box, Flex, Text } from '@chakra-ui/layout'
import { useStoreState } from 'easy-peasy'
import { useSelector } from 'react-redux'
import Player from './player'

const PlayerBar = () => {
  // // Easy-peasy state
  // const songs = useStoreState((state: any) => state.activeSongs)
  // console.log('The active Songs', songs)
  // const activeSong = useStoreState((state: any) => state.activeSong)

  // Redux-toolkit state
  const activeSong = useSelector((state: any) => state.activeSong)
  console.log('The active Song', activeSong)
  const songs = useSelector((state: any) => state.activeSongs)

  return (
    <Box height="100px" width="100vw" bg="gray.900" padding="10px">
      <Flex align="center">
        {activeSong ? (
          <Box padding="20px" color="white" width="30%">
            <Text fontSize="large">{activeSong.name}</Text>
            <Text fontSize="sm">{activeSong.artist.name}</Text>
          </Box>
        ) : null}
        <Box width="40%">
          {activeSong ? (
            <Player songs={songs} activeSong={activeSong} />
          ) : (
            <Box color={'white'}>
              <Text fontSize="large">Select Songs from Playlist to listen</Text>
            </Box>
          )}
        </Box>
      </Flex>
    </Box>
  )
}

export default PlayerBar
