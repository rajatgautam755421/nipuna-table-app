import { AiOutlineCheck, AiOutlineMail } from "react-icons/ai";
import { BsGear, BsMoon, BsPlusCircle } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { GoCircle } from "react-icons/go";
import { HiOutlineClipboard, HiOutlineDocument } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { LiaSortSolid, LiaTasksSolid } from "react-icons/lia";
import { LuFilter } from "react-icons/lu";
import { MdDateRange, MdOutlineDashboard } from "react-icons/md";
import { PiSealCheckBold } from "react-icons/pi";
import { RiHome3Line } from "react-icons/ri";
import { RxDividerVertical } from "react-icons/rx";

export const TABS_INFO = [
  {
    title: "Dashboard",
    icon: MdOutlineDashboard,
  },
  {
    title: "Office Check-in",
    icon: RiHome3Line,
  },
  {
    title: "Enquiries",
    icon: HiOutlineClipboard,
  },
  {
    title: "Clients",
    icon: IoPersonOutline,
  },
  {
    title: "Services",
    icon: PiSealCheckBold,
  },
  {
    title: "Quotation",
    icon: HiOutlineDocument,
  },
  {
    title: "Tasks",
    icon: LiaTasksSolid,
  },
];

export const FILTER_OPTIONS = [
  {
    label: "Filter By Assigned",
    icon: LuFilter,
  },
  { label: "Date", icon: MdDateRange },
  { label: "Status", icon: AiOutlineCheck },
];

export const SECONDARY_FILTER_OPTIONS = [
  {
    label: "Filter",
    icon: LuFilter,
  },
  {
    label: "Sort",
    icon: LiaSortSolid,
  },
  {
    label: "Saved Filter",
    icon: LuFilter,
  },
];

export const DATA_TABLE_COULMNS = [
  {
    label: "Name",
    key: "name",
  },
  {
    label: "Added From",
    key: "addedFrom",
  },
  {
    label: "Tags",
    key: "tags",
    type: "array",
    options: ["Tag1", "Tag2", "Tag3"],
  },
  {
    label: "Internal Id",
    key: "internalId",
  },
  {
    label: "Email",
    key: "email",
  },
  {
    label: "Address",
    key: "address",
  },
  {
    label: "Licence Number",
    key: "licenceNumber",
  },
  {
    label: "Client Id",
    key: "clientId",
    disabled: true,
  },
  {
    label: "Phone",
    key: "phone",
  },
  {
    label: "Client Portal",
    key: "clientPortal",
  },
  {
    label: "Active",
    key: "active",
    type: "select",
    options: ["Yes", "No"],
  },
  {
    label: "Assignee",
    key: "assignee",
  },
];

export const HEADER_RIGHT_SIDE_ICONS = [
  {
    name: BsPlusCircle,
  },
  {
    name: FaRegBell,
  },
  {
    name: AiOutlineMail,
  },
  {
    name: BsGear,
  },
  {
    name: RxDividerVertical,
    divider: true,
    size: 6,
  },
  {
    name: BsMoon,
    size: 3.5,
  },
  {
    name: GoCircle,
    size: 5,
  },
  {
    name: IoIosArrowDown,
    marginLeft: 0,
  },
];

export const RANDOM_IMAGE =
  "https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D";
