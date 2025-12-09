interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
}[];

const menu_data: MenuItem[] = [

  
    {
        id: 1,
        has_dropdown: true,
        title: "Home",
        link: "#",
        sub_menus: [
            // { link: "/", title: "Home One" },
            // { link: "/home-two", title: "Home Two" },
            // { link: "/home-three", title: "Home Three" },
        ],
    },
  
    {
        id: 2,
        has_dropdown: true,
        title: "services",
        link: "#",
        sub_menus: [
            { link: "#", title: "Washroom Consumables" },
            { link: "#", title: "Hygiene Rental" },
            { link: "#", title: "Deep Cleaning" },
            { link: "#", title: "Window Cleaning" },
            { link: "#", title: "High Level Cleaning" },
        ],
    },
     

    {
        id: 3,
        has_dropdown: true,
        title: "Sectors",
        link: "#",
        sub_menus: [
            { link: "#", title: "Facilities Management" },
            { link: "#", title: "Industrial" },
            { link: "#", title: "Education" }
        ],
    },
     {
        id: 4,
        has_dropdown: false,
        title: "Locations",
        link: "#",
        sub_menus: [
            { link: "#", title: "About" },
            // { link: "/causes-slider", title: "Causes Slider" },
            // { link: "/causes-details", title: "Causes Details" },
        ],
    },
    {
        id: 5,
        has_dropdown: true,
        title: "Contact",
        link: "#",
        sub_menus: [
            // { link: "/about", title: "About Us" },
            // { link: "/contact", title: "Contact Us" },
            // { link: "/volunteers", title: "Volunteers" },
            // { link: "/become-volunteers", title: "Become Volunteer" },
            // { link: "/faqs", title: "FAQ Page" },
            // { link: "/not-found", title: "404 Error" },
        ],
    },
    {
        id: 6,
        has_dropdown: true,
        title: "Blog",
        link: "#",
        sub_menus: [
            { link: "#", title: "Blog" },
            { link: "#", title: "Blog Clasic" },
            { link: "#", title: "Blog Slider" },
            { link: "#", title: "Blog Details" },
        ],
    },
];
export default menu_data;
