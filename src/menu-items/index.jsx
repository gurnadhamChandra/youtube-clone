import { Clock, Flag, HelpCircle, Home, Menu, MessageCircle, Scissors, Settings, ThumbsUp, Video, Youtube } from "react-feather";

const menuItems={
    mainSection:[
        {Name:"Home",Icon:Home,path:"/home"},
        {Name:"Shorts",Icon:Video,path:"/shorts"},
        {Name:"SubScription",Icon:Youtube,path:"/shorts"},

    ],
    youSection:[
        {Name:"History",Icon:Clock,path:"/library"},
        {Name:"Playlists",Icon:Menu,path:"/history"},
        {Name:"Your Videos",Icon:Youtube,path:"/history"},
        {Name:"Watch Later",Icon:Clock,path:"/history"},
        {Name:"Liked Videos",Icon:ThumbsUp,path:"/history"},
        // {Name:"Liked Videos",Icon:Video,path:"/history"},
        {Name:"Your Clips",Icon:Scissors,path:"/history"},

    ],
    subscriptionsSection:[
        {Name:"Subscriptions",Icon:Video,path:"/subscriptions"},
    ],
    helpers:[
        {Name:"Settings",Icon:Settings,path:"/settings"},
        {Name:"Report history",Icon:Flag,path:"/settings"},
        {Name:"Help",Icon:HelpCircle,path:"/settings"},
        {Name:"Send feedback",Icon:MessageCircle,path:"/settings"},


    ]
}
export default menuItems;