// import React, { useState } from 'react';
// import {
//   CDBSidebar,
//   CDBSidebarHeader,
//   CDBSidebarMenuItem,
//   CDBSidebarContent,
//   CDBSidebarMenu,
//   CDBSidebarFooter,
//   CDBBadge,
// } from 'cdbreact';

// const SideBar = () => {
//   const [submenuOpen, setSubmenuOpen] = useState(false);

//   const toggleSubmenu = () => {
//     setSubmenuOpen(!submenuOpen);
//   };

//   return (
//     <CDBSidebar textColor="#fff" backgroundColor="#333">
//       <CDBSidebarHeader>
//         Contrast Multi Level
//       </CDBSidebarHeader>

//       <CDBSidebarContent>
//         <CDBSidebarMenu>
//           <CDBSidebarMenuItem
//             suffix={
//               <CDBBadge color="danger" size="small" borderType="pill">
//                 new
//               </CDBBadge>
//             }
//           >
//             Dashboard
//           </CDBSidebarMenuItem>
//           <CDBSidebarMenuItem
//             suffix={
//               <CDBBadge color="danger" size="small" borderType="pill">
//                 new
//               </CDBBadge>
//             }
//           >
//             Components
//           </CDBSidebarMenuItem>
//           <CDBSidebarMenuItem onClick={toggleSubmenu}>
//             Sidemenu2
//             {submenuOpen && (
//               <div style={{ marginLeft: '20px' }}>
//                 <CDBSidebarMenuItem>submenu 1</CDBSidebarMenuItem>
//                 <CDBSidebarMenuItem>submenu 2</CDBSidebarMenuItem>
//                 <CDBSidebarMenuItem>submenu 3</CDBSidebarMenuItem>
//               </div>
//             )}
//           </CDBSidebarMenuItem>
//         </CDBSidebarMenu>
//       </CDBSidebarContent>

//       <CDBSidebarFooter style={{ textAlign: 'center' }}>
//         <div
//           className="sidebar-btn-wrapper"
//           style={{
//             padding: '20px 5px',
//           }}
//         >
//           Sidebar Footer
//         </div>
//       </CDBSidebarFooter>
//     </CDBSidebar>
//   );
// };

// export default SideBar;
