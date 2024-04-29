import { Box, Link } from "@mui/material";
const App = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={100}
      >
        <Link href="#">HOME</Link>
        <Link href="#">ABOUT US</Link>
        <Link href="#">SERVICES</Link>
        <Link href="#">PAGES</Link>
        <Link href="#">CONTACT US</Link>
      </Box>
    </>
  );
};

export default App;
