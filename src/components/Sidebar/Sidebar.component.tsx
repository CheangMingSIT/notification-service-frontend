import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
  Tooltip,
  useTheme,
} from "@mui/material";
import { forwardRef } from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

const drawerWidth = 230;

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

const Link = forwardRef<HTMLAnchorElement, RouterLinkProps>(function Link(
  itemProps,
  ref
) {
  return <RouterLink ref={ref} {...itemProps} role={undefined} />;
});

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to } = props;

  return (
    <li>
      <ListItem button component={Link} to={to}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

const openedMixin = (theme: Theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export function SideBarComponent() {
  const theme = useTheme();
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <Tooltip title="Logo">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              //   onClick={handleDrawerToggle}
              sx={{ mr: 2, ml: 1, mb: 3, display: { sm: "display" } }}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <ListItemLink
            to="/Overview"
            primary="Overview"
            icon={
              <HomeOutlinedIcon
                sx={{ color: theme.palette.primary.contrastText }}
              />
            }
          />
          <ListItemLink
            to="/NotificationLog"
            primary="Notification log"
            icon={
              <DescriptionOutlinedIcon
                sx={{ color: theme.palette.primary.contrastText }}
              />
            }
          />
          <ListItemLink
            to="/Analytics"
            primary="Analytics"
            icon={
              <BarChartOutlinedIcon
                sx={{ color: theme.palette.primary.contrastText }}
              />
            }
          />
          <ListItemLink
            to="/Users"
            primary="Users"
            icon={
              <PeopleAltOutlinedIcon
                sx={{ color: theme.palette.primary.contrastText }}
              />
            }
          />
          <ListItemLink
            to="/ApiKeys"
            primary="Api keys"
            icon={
              <HttpsOutlinedIcon
                sx={{ color: theme.palette.primary.contrastText }}
              />
            }
          />
        </List>
      </Drawer>
    </>
  );
}
