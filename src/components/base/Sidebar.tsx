import styled from "styled-components";
import { Button, Drawer, ListItem } from "@mui/material";
import RocketOutlinedIcon from '@mui/icons-material/RocketOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';

const Navigation = styled.nav`
  width: 250px;
  padding: 40px 0;
`;

const LinkTitle = styled.span`
  margin-left: 10px;
`;

interface ILink {
  id: number;
  title: string;
  Icon: React.ElementType;
}

const links: ILink[] = [
  { id: 1, title: "Cosmos", Icon: RocketOutlinedIcon },
  { id: 2, title: "Advices", Icon: ExtensionOutlinedIcon },
  { id: 3, title: "Countries", Icon: PublicOutlinedIcon },
];

const LinkContent = ({ title, Icon }: ILink): JSX.Element => (
  <Button component="a" sx={{ width: "100%", justifyContent: "flex-start" }}>
    {Icon && <Icon width={16} fill="#ffffff" />}
    <LinkTitle>{title}</LinkTitle>
  </Button>
);

const Sidebar = (): JSX.Element => {
  const renderLinks = () => links.map((link: ILink) => (
    <ListItem key={link.id}>
      <LinkContent {...link} />
    </ListItem>
  ));

  return (
    <Drawer
      open={true}
      anchor={"left"}
      variant="permanent"
    >
      <Navigation>
        {renderLinks()}
      </Navigation>
    </Drawer>
  );
};

export default Sidebar;