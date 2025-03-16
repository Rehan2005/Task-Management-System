import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import TaskDetails from "./pages/TaskDetails";
import Tasks from "./pages/Tasks";
import Trash from "./pages/Trash";
import Users from "./pages/Users";
import Home from "./pages/homepage"; // Import Home page
import Signup from "./pages/Signup";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useRef, Fragment } from "react";
import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { setOpenSidebar } from "./redux/slices/authSlice";
import { IoClose } from "react-icons/io5";

// Layout Component
function Layout() {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  return user ? (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <aside className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
        <Sidebar />
      </aside>

      <MobileSidebar />

      <main className="flex-1 overflow-y-auto">
        <Navbar />
        <div className="p-4 2xl:px-10">
          <Outlet />
        </div>
      </main>
    </div>
  ) : (
    <Navigate to="/log-in" state={{ from: location }} replace />
  );
}

// Mobile Sidebar Component
const MobileSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.auth);
  const mobileMenuRef = useRef(null);
  const dispatch = useDispatch();

  const closeSidebar = () => dispatch(setOpenSidebar(false));

  return (
    <Transition
      show={isSidebarOpen}
      as={Fragment}
      enter="transition-opacity duration-700"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-700"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        ref={(node) => (mobileMenuRef.current = node)}
        className={clsx(
          "md:hidden w-full h-full bg-black/40 fixed inset-0",
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        )}
        onClick={closeSidebar}
      >
        <div className="bg-white w-3/4 h-full">
          <div className="w-full flex justify-end px-5 mt-4">
            <button onClick={closeSidebar} className="flex justify-end items-end">
              <IoClose size={25} />
            </button>
          </div>
          <Sidebar />
        </div>
      </div>
    </Transition>
  );
};

// Main App Component
function App() {
  return (
    <main className="w-full min-h-screen bg-[#f3f4f6]">
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page Route */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/completed/:status" element={<Tasks />} />
          <Route path="/in-progress/:status" element={<Tasks />} />
          <Route path="/todo/:status" element={<Tasks />} />
          <Route path="/team" element={<Users />} />
          <Route path="/trashed" element={<Trash />} />
          <Route path="/task/:id" element={<TaskDetails />} />
        </Route>
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-up" element={<Signup />}/>
      </Routes>
      <Toaster richColors />
    </main>
  );
}

export default App;
