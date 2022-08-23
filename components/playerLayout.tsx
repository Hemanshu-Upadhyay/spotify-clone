import { Box } from '@chakra-ui/layout'
import Sidebar from './sidebar'
import PlayerBar from './playerBar'

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box
        // Hide the sidebar on mobile
        display={['none', 'block', 'block']}
        flexDirection="column"
        position="fixed"
        top="0"
        width="250px"
        left="0"
      >
        <Sidebar />
      </Box>
      <Box
        // Remove margin on mobile
        marginLeft={['0', '250px', '250px']}
        // marginLeft="250px"
        marginBottom="100px"
      >
        <Box height="calc(100vh - 100px)">{children}</Box>
      </Box>
      <Box position="absolute" left="0" bottom="0">
        <PlayerBar />
      </Box>
    </Box>
  )
}

export default PlayerLayout
