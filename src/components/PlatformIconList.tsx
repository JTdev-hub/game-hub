import { iconMap, Platform } from "../services/game-service";
import { HStack, Icon } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  return (
    <>
      <HStack marginY={"10px"}>
        {platforms.map((platform) => (
          <Icon as={iconMap[platform.slug]} color="gray.500" />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
