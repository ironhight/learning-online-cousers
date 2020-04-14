import React, { Suspense, lazy } from 'react';
import clsx from 'clsx';
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

import routes from '../../routes/sidebarRoutes';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

import { Switch, Route, Link, Redirect } from 'react-router-dom';

//component
const ContainerCourses = lazy(() =>
  import('../../components/courses/ContainerCourses')
);
const ContainerDashboard = lazy(() =>
  import('../../components/dashboard/ContainerDashboard')
);
const ContainerUsers = lazy(() =>
  import('../../components/users/ContainerUsers')
);

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);

type Props = {
  history: any;
};

const AppLayout: React.FC<Props> = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [openList, setOpenList] = React.useState({});

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleToggleList = (e: any): void => {
    setOpenList({ [e]: !openList[e] });
    console.log(e);
  };

  const activeMenu = routes.filter(
    (route) => props.history.location.pathname.indexOf(route.path) > -1
  );

  // console.log('activeMenu', props);
  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {activeMenu.length > 0 ? activeMenu[0].title : ''}
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <MenuOpenIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {routes.map((route: any, index: number) =>
            !route.childrens ? (
              <ListItem
                button
                key={route.nameEn}
                component={Link}
                to={route.path}
              >
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText primary={route.nameEn} />
              </ListItem>
            ) : (
              <div key={index}>
                <ListItem
                  button
                  key={route.nameEn}
                  component={Link}
                  to={route.path}
                  onClick={() => handleToggleList(route.nameEn)}
                >
                  <ListItemIcon>{route.icon}</ListItemIcon>
                  <ListItemText primary={route.nameEn} />
                  {openList[route.nameEn] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse
                  in={openList[route.nameEn]}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {route.childrens.map((routeChild: any, index: number) => (
                      <ListItem
                        button
                        className={classes.nested}
                        component={Link}
                        to={routeChild.path}
                        key={index}
                      >
                        <ListItemIcon>{routeChild.icon}</ListItemIcon>
                        <ListItemText primary={routeChild.nameEn} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </div>
            )
          )}
        </List>

        <List style={{ position: 'absolute', bottom: '0', width: '100%' }}>
          <ListItem button key="Setting" component={Link} to="/setting">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItem>
        </List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/dashboard" exact component={ContainerDashboard} />
            <Route
              path={['/courses', '/courses/categories']}
              exact
              component={ContainerCourses}
            />
            <Route path="/users" exact component={ContainerUsers} />
          </Switch>
        </Suspense>
      </main>
    </div>
  );
};

export default AppLayout;
