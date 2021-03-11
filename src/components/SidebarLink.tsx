import { Box, Link, Text } from "@chakra-ui/layout";
import { NavLink, useLocation } from "react-router-dom";
import { IoMdArrowForward as ArrowIcon } from "react-icons/io";

type Props = {
  path: string;
  text: string;
};

const SidebarLink = ({ path, text }: Props) => {
  const location = useLocation();
  return (
    <Link
      display="flex"
      alignItems="flex-end"
      justifyContent="space-between"
      as={NavLink}
      to={path}
      pl="24"
      pb="1"
      h="14"
      _hover={{ textDecoration: "none" }}
      activeStyle={{ color: "white", borderLeft: "4px solid #ffc91a" }}
    >
      <Text>{text}</Text>
      {location.pathname === path && <Box as={ArrowIcon} size="20" />}
    </Link>
  );
};

export default SidebarLink;
