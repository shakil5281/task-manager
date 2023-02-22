import DashboardIcon from '@mui/icons-material/Dashboard';
import AddTaskTwoToneIcon from '@mui/icons-material/AddTaskTwoTone';
import TaskAltTwoToneIcon from '@mui/icons-material/TaskAltTwoTone';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Person4Icon from '@mui/icons-material/Person4';
import { FcSettings } from 'react-icons/fc';
import { FaAddressCard } from 'react-icons/fa';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ContactsIcon from '@mui/icons-material/Contacts';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';






export const navLinks = [
    {
        id: '',
        title: 'Dashboard',
        icon: <DashboardIcon />
    },
    {
        id: 'create',
        title: 'Create Task',
        icon: <AddTaskTwoToneIcon />
    },
    {
        id: 'task/task',
        title: 'New Task',
        icon: <AddBoxOutlinedIcon />
    },
    {
        id: 'progress/progress',
        title: 'Inprogress',
        icon: <PublishedWithChangesOutlinedIcon />
    },
    {
        id: 'complite/complite',
        title: 'Complite',
        icon: <TaskAltTwoToneIcon />
    },
    {
        id: 'cancel/canceled',
        title: 'Canceled',
        icon: <DeleteForeverTwoToneIcon />
    },
]


export const manuLinks = [
    {
        id: '/profile/dashboard',
        title: 'profile',
        icon: <Person4Icon />
    },
    {
        id: '/profile/logout',
        title: 'Logout',
        icon: <LogoutOutlinedIcon />
    },
]

export const profileLinks = [

    {
        id: '/profile/dashboard',
        title: 'User Profile',
        icon: <Person4Icon />
    },
    {
        id: '/profile/address',
        title: 'Address',
        icon: <FaAddressCard />
    },
    {
        id: '/profile/contact',
        title: 'Contact',
        icon: <ContactsIcon />
    },
    {
        id: '/profile/password',
        title: 'Change Password',
        icon: <LockRoundedIcon />
    },
    {
        id: '/profile/notifications',
        title: 'Notifications',
        icon: <NotificationsIcon />
    },

]