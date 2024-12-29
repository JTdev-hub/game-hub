import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useData from "../hooks/useData";
import platformsService, { Platforms } from "../services/platform-service";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platforms: Platforms | null) => void;
  selectedPlatform: Platforms | null;
}
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data: platforms, error } = useData<Platforms>(platformsService);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
