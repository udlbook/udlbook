import {
    CloseIcon,
    Icon,
    SidebarContainer,
    SidebarLink,
    SidebarMenu,
    SidebarWrapper,
} from "@/components/Sidebar/SidebarElements";

export default function Sidebar({ isOpen, toggle }) {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="Notebooks" onClick={toggle}>
                            Notebooks
                        </SidebarLink>
                        <SidebarLink to="Instructors" onClick={toggle}>
                            Instructors
                        </SidebarLink>
                        <SidebarLink to="Media" onClick={toggle}>
                            Media
                        </SidebarLink>
                        <SidebarLink to="More" onClick={toggle}>
                            More
                        </SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    );
}
