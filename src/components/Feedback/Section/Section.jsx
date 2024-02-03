import { SectionEl, SectionTitle } from "./Section.styled";

export const Section = ({ 
    title, 
    children 
}) => {
    return (
        <SectionEl>
            <SectionTitle>{title}</SectionTitle>
            {children}
        </SectionEl>
    )
}