import { Home, Video, Youtube } from "react-feather";

const menuItems={
    mainSection:[
        {Name:"Home",Icon:Home,path:"/home"},
        {Name:"Shorts",Icon:Video,path:"/shorts"},
        {Name:"SubScription",Icon:Youtube,path:"/shorts"},

    ],
    youSection:[
        {Name:"History",Icon:Video,path:"/library"},
        {Name:"Playlists",Icon:Video,path:"/history"},
        {Name:"Your Videos",Icon:Video,path:"/history"},
        {Name:"Watch Later",Icon:Video,path:"/history"},
        {Name:"Liked Videos",Icon:Video,path:"/history"},
        {Name:"Liked Videos",Icon:Video,path:"/history"},
        {Name:"Your Clips",Icon:Video,path:"/history"},

    ],
    subscriptionsSection:[
        {Name:"Subscriptions",Icon:Video,path:"/subscriptions"},
    ],
    helpers:[
        {Name:"Settings",Icon:Video,path:"/settings"},
        {Name:"Report history",Icon:Video,path:"/settings"},
        {Name:"Help",Icon:Video,path:"/settings"},
        {Name:"Send feedback",Icon:Video,path:"/settings"},


    ]
}
export default menuItems;