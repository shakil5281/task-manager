import DashboardIcon from '@mui/icons-material/Dashboard';
import AddTaskTwoToneIcon from '@mui/icons-material/AddTaskTwoTone';
import TaskAltTwoToneIcon from '@mui/icons-material/TaskAltTwoTone';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';





export const navLinks = [
    {
        id: '',
        title: 'Dashboard',
        icon: <DashboardIcon/>
    },
    {
        id: 'create',
        title: 'Create Task',
        icon: <AddTaskTwoToneIcon/>
    },
    {
        id: 'task/task',
        title: 'New Task',
        icon: <AddBoxOutlinedIcon/>
    },
    {
        id: 'progress/progress',
        title: 'Inprogress',
        icon: <PublishedWithChangesOutlinedIcon/>
    },
    {
        id: 'complite/complite',
        title: 'Complite',
        icon: <TaskAltTwoToneIcon/>
    },
    {
        id: 'cancel/canceled',
        title: 'Canceled',
        icon: <DeleteForeverTwoToneIcon/>
    },
]