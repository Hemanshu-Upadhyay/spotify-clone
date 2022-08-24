import { Box } from '@chakra-ui/layout'
import {
  Table,
  Thead,
  Td,
  Tr,
  Tbody,
  Th,
  IconButton,
  Button,
} from '@chakra-ui/react'
import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { useStoreActions } from 'easy-peasy'
import { formatDate, formatTime } from '../lib/formatters'
import { changeActiveSongs, changeActiveSong } from '../features/song'
import { useDispatch } from 'react-redux'

const SongTable = ({ songs }) => {
  const dispatch = useDispatch()
  const Redirect = () => {
    window.location.href = '/'
  }

  // // Easy-peasy actions
  // const playSongs = useStoreActions((store: any) => store.changeActiveSongs)
  // const setActiveSong = useStoreActions((store: any) => store.changeActiveSong)

  const handlePlay = (activeSong?) => {
    // setActiveSong(activeSong || songs[0])
    // playSongs(songs)
    dispatch(changeActiveSong(activeSong || songs[0]))
    dispatch(changeActiveSongs(songs))
  }

  return (
    <Box bg="transparent" color="white">
      <Box padding="10px" marginBottom="20px">
        <Box marginBottom="30px">
          <IconButton
            icon={<BsFillPlayFill fontSize="30px" />}
            aria-label="play"
            colorScheme="green"
            size="lg"
            isRound
            onClick={() => handlePlay()}
          />
        </Box>
        <Table variant="unstyled">
          <Thead borderBottom="1px solid" borderColor="rgba(255,255,255,0.2)">
            <Tr>
              <Th display={['none', 'block', 'block']}>#</Th>
              <Th>Title</Th>
              <Th>Date Added</Th>
              <Th>
                <AiOutlineClockCircle />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {songs.map((song, i) => (
              <Tr
                sx={{
                  transition: 'all .3s ',
                  '&:hover': {
                    bg: 'rgba(255,255,255, 0.1)',
                  },
                }}
                key={song.id}
                cursor="pointer"
                onClick={() => handlePlay(song)}
              >
                <Td display={['none', 'block', 'block']}> {i + 1}</Td>
                <Td>{song.name}</Td>
                <Td>{formatDate(song.createdAt)}</Td>
                <Td>{formatTime(song.duration)}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      {/* Make a Centered Button */}
      <Box display={['block', 'none', 'none']}>
        <Button
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg={'green.500'}
          variant="solid"
          size="lg"
          margin="20px"
          onClick={() => Redirect()}
        >
          Return to Home
        </Button>
      </Box>
    </Box>
  )
}

export default SongTable
