import NavLinks from "./navLinks/navLinks";

const Links = () => {
    
    const links = [
        {
            title: "Dashbaord",
            path: "/dashboard",
        },
        {
            title: "Agents",
            path: "/agents",
        },
        {
            title: "Devices",
            path: "/devices",
        },
        {
            title: "Rooms",
            path: "/rooms",
        },
        {
            title: "Collectors",
            path: "/collectors",
        },


    ]

    return(
        <>
            {links.map((link)=>(
                <NavLinks item={link} key={link.title}/>
            ))}
        </>
    )
}

export default Links