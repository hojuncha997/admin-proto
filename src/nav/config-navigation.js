// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import Label from "../../../components/label";
import Iconify from "../../../components/iconify";
import SvgColor from "../../../components/svg-color";

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const ICONS = {
  blog: icon("ic_blog"),
  cart: icon("ic_cart"),
  chat: icon("ic_chat"),
  mail: icon("ic_mail"),
  user: icon("ic_user"),
  file: icon("ic_file"),
  lock: icon("ic_lock"),
  label: icon("ic_label"),
  blank: icon("ic_blank"),
  kanban: icon("ic_kanban"),
  folder: icon("ic_folder"),
  banking: icon("ic_banking"),
  booking: icon("ic_booking"),
  invoice: icon("ic_invoice"),
  calendar: icon("ic_calendar"),
  disabled: icon("ic_disabled"),
  external: icon("ic_external"),
  menuItem: icon("ic_menu_item"),
  ecommerce: icon("ic_ecommerce"),
  analytics: icon("ic_analytics"),
  dashboard: icon("ic_dashboard"),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    // subheader: '일반',
    subheader: " ",
    items: [
      {
        title: "대시보드",
        path: PATH_DASHBOARD.general.app,
        icon: ICONS.dashboard,
      },
    ],
  },
  {
    subheader: "회원관리",
    items: [
      {
        title: "회원목록",
        path: PATH_DASHBOARD.orgManagement.root,
        icon: ICONS.banking,
        children: [
          { title: "개인회원", path: PATH_DASHBOARD.orgManagement.managerList },
          { title: "법인회원", path: PATH_DASHBOARD.orgManagement.list },
          // { title: '기관별 검증내역', path: PATH_DASHBOARD.orgManagement.veriList },
        ],
      },
      {
        title: "회원사목록",
        path: PATH_DASHBOARD.orgManagement.root,
        icon: ICONS.dashboard,
      },
      {
        title: "기사목록",
        path: PATH_DASHBOARD.orgManagement.root,
        icon: ICONS.dashboard,
      },
    ],
  },
  {
    subheader: "등록매물",
    items: [
      {
        title: "팝니다 등록",
        path: PATH_DASHBOARD.orgManagement.root,
        icon: ICONS.banking,
        children: [
          { title: "개인소형", path: PATH_DASHBOARD.orgManagement.managerList },
          { title: "개인중형", path: PATH_DASHBOARD.orgManagement.list },
          { title: "개인대형", path: PATH_DASHBOARD.orgManagement.list },
          { title: "법인매매", path: PATH_DASHBOARD.orgManagement.veriList },
          { title: "법인임대", path: PATH_DASHBOARD.orgManagement.veriList },
          { title: "주선면허", path: PATH_DASHBOARD.orgManagement.veriList },
        ],
      },
      {
        title: "삽니다 등록",
        path: PATH_DASHBOARD.orgManagement.root,
        icon: ICONS.banking,
        children: [
          { title: "개인소형", path: PATH_DASHBOARD.orgManagement.managerList },
          { title: "개인중형", path: PATH_DASHBOARD.orgManagement.list },
          { title: "개인대형", path: PATH_DASHBOARD.orgManagement.list },
          { title: "법인매매", path: PATH_DASHBOARD.orgManagement.veriList },
          { title: "법인임대", path: PATH_DASHBOARD.orgManagement.veriList },
          { title: "주선면허", path: PATH_DASHBOARD.orgManagement.veriList },
        ],
      },
    ],
  },
];

export default navConfig;
