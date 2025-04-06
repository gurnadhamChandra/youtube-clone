// import { BrowserRouter as Router } from "react-router-dom";
// import AppContent from "./AppContent";
// import { useEffect, useState } from "react";

// function Routing(){
//     const [isSidebarPOpen, setIsSidebarOpen] = useState(true);
//     const [isLoading, setIsLoading] = useState(true);
//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarPOpen);
//     }

//     useEffect(()=>{
//         const timer = setTimeout(() => {
//             setIsLoading(false);
//         }, 2000); // Simulate a 2-second loading time

//         return () => clearTimeout(timer); // Cleanup the timer on component unmount
//     })
//     return (
//         <Router>
//             <AppContent 
//                 isSidebarPOpen={isSidebarPOpen} 
//                 isLoading={isLoading}
//                 setIsLoading={setIsLoading}
//             toggleSidebar={toggleSidebar}
//             setIsSidebarOpen={setIsSidebarOpen}/>
//         </Router>
//     );
// }
// export default Routing;