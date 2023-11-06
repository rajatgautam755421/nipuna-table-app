import { AiOutlineCheck } from "react-icons/ai";
import { HiOutlineClipboard, HiOutlineDocument } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { LiaSortSolid, LiaTasksSolid } from "react-icons/lia";
import { LuFilter } from "react-icons/lu";
import { MdDateRange, MdOutlineDashboard } from "react-icons/md";
import { PiSealCheckBold } from "react-icons/pi";
import { RiHome3Line } from "react-icons/ri";

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
  },
  {
    label: "Assignee",
    key: "assignee",
  },
];
