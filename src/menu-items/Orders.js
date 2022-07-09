import { useRoutes } from 'react-router-dom';

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const orders = {
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Orders',
            type: 'collapse',

            children: [
                {
                    id: 'login3',
                    title: 'Action1',
                    type: 'item',
                    url: 'pages/sample-page/index.js',
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

export default orders;
