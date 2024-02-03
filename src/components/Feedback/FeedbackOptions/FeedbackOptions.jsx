import { Btn } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, handleFeedback }) => {
    return (
        <>
            {options.map(option => (
                <Btn key={option} onClick={() => handleFeedback(option)} type={option}>
                    {option}
                </Btn>
            ))}
        </>
    )
}