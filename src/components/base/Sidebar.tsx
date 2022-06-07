import styled from "styled-components";
import { NavLink, NavLinkProps } from "react-router-dom";
import { Button, Drawer, ListItem } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import { forwardRef } from "react";

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
  link: string;
}

const links: ILink[] = [
  { id: 1, title: "Popular", Icon: StarBorderIcon, link: "/" },
  { id: 2, title: "Latest", Icon: ExtensionOutlinedIcon, link: "/latest" },
  { id: 3, title: "Upcoming", Icon: PublicOutlinedIcon, link: "/upcoming" },
];

const Link = forwardRef((props: NavLinkProps, ref): JSX.Element => <NavLink {...props} />);

const LinkContent = ({ title, Icon, link }: ILink): JSX.Element => (
  <Button component={Link} to={link} sx={{ width: "100%", justifyContent: "flex-start", "&.active": { color: "#10B981", backgroundColor: "rgba(255,255,255, 0.08)" } }}>
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