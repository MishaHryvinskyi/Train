import { StatisticParagraph } from "./Statistics.styled";

export const Statistics = ({ 
    bad,
    good, 
    neutral,  
    total, 
    countPositiveFeedbackPercentage 
}) => {
    return (
        <>
            <StatisticParagraph>Good: {good}</StatisticParagraph>
            <StatisticParagraph>Neutral: {neutral}</StatisticParagraph>
            <StatisticParagraph>Bad: {bad}</StatisticParagraph>
            <StatisticParagraph>Total: {total}</StatisticParagraph>
            <StatisticParagraph>Positive feedback: {countPositiveFeedbackPercentage} %</StatisticParagraph>
        </>
    )
}