import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineUpload, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import userIMG from "../assets/profile.jpg";
import './SideBar.css'
const SideBar = () => {
  return (
    <Sidebar aria-label="Sidebar with logo branding example" className="Sidebar h-screen" >
    <Sidebar.Logo href="#" img={userIMG} imgAlt="logo" className="logo" />
    <Sidebar.Items className="text-cyan-400 ">
        <Sidebar.ItemGroup className="sidebar-item-group gap-8">
            <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className="sidebar-item">
                Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineUpload} className="sidebar-item">
                Upload Book
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox} className="sidebar-item">
                Manage Books
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser} className="sidebar-item">
                Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag} className="sidebar-item">
                Products
            </Sidebar.Item>
            <Sidebar.Item href="/login" icon={HiArrowSmRight} className="sidebar-item">
                Sign In
            </Sidebar.Item>
            <Sidebar.Item href="/logout" icon={HiTable} className="sidebar-item">
                Log Out
            </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiSupport}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
    </Sidebar.Items>
</Sidebar>

  )
}
export default SideBar;



// import { Sidebar } from "flowbite-react";
// import { HiArrowSmRight, HiChartPie, HiOutlineUpload, HiInbox, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

// import userIMG from "../assets/profile.jpg";

// const SideBar = () => {
//   return (
//     <Sidebar aria-label="Sidebar with logo branding example" className="h-screen">
//       <Sidebar.Items>
//         <Sidebar.ItemGroup>
//           <div className="flex items-center justify-center p-4">
//             <img src={userIMG} alt="logo" className="w-20 h-20 rounded-full" />
//           </div>

//           <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
//             Dashboard
//           </Sidebar.Item>
//           <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineUpload}>
//             Upload Book
//           </Sidebar.Item>
//           <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
//             Manage Books
//           </Sidebar.Item>
//           <Sidebar.Item href="#" icon={HiUser}>
//             Users
//           </Sidebar.Item>
//           <Sidebar.Item href="#" icon={HiShoppingBag}>
//             Products
//           </Sidebar.Item>
//           <Sidebar.Item href="/login" icon={HiArrowSmRight}>
//             Sign In
//           </Sidebar.Item>
//           <Sidebar.Item href="/logout" icon={HiTable}>
//             Log Out
//           </Sidebar.Item>
//         </Sidebar.ItemGroup>

//         <Sidebar.ItemGroup>
//           <Sidebar.Item href="#" icon={HiChartPie}>
//             Upgrade to Pro
//           </Sidebar.Item>
//           <Sidebar.Item href="#" icon={HiViewBoards}>
//             Documentation
//           </Sidebar.Item>
//           <Sidebar.Item href="#" icon={HiSupport}>
//             Help
//           </Sidebar.Item>
//         </Sidebar.ItemGroup>
//       </Sidebar.Items>
//     </Sidebar>
//   );x
// };

// export default SideBar;
