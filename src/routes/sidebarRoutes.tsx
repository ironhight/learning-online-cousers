import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import CategoryIcon from '@material-ui/icons/Category';
import PersonIcon from '@material-ui/icons/Person';
import ListAltIcon from '@material-ui/icons/ListAlt';

const sidebarRoutes = [
  {
    path: '/dashboard',
    nameVi: 'Bảng điều khiển',
    nameEn: 'Dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    path: '/cousers',
    nameVi: 'Khóa học',
    nameEn: 'Cousers',
    title: 'Cousers',
    icon: <ChromeReaderModeIcon />,
    childrens: [
      { path: '/cousers', nameEn: 'List', icon: <ListAltIcon /> },
      {
        path: '/cousers/categories',
        nameEn: 'Categories',
        icon: <CategoryIcon />,
      },
    ],
  },
  {
    path: '/users',
    nameVi: 'Người dùng',
    nameEn: 'Users',
    title: 'Users',
    icon: <AssignmentIndIcon />,
    childrens: [{ path: '/users', nameEn: 'Member', icon: <PersonIcon /> }],
  },
];

export default sidebarRoutes;
