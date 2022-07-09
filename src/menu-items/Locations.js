// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const locations = {
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Locations',
            type: 'collapse',

            children: [
                {
                    id: 'login3',
                    title: 'Action1',
                    type: 'item',
                    url: '/pages/login/login3',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'Action2',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                }
            ]
        }
    ]
};

export default locations;
