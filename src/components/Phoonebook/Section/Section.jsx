import { SectionEl, Title } from "./Section.styled";

const Section = ({ title, children }) => {
    return (
        <SectionEl>
            <Title>{title}</Title>
            {children}
        </SectionEl>
    )
}

export default Section;