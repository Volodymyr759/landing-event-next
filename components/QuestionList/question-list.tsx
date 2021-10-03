import { QuestionItem } from '../QuestionItem/question-item';
import { QuestionListProps } from './question-list.props';

export const QuestionList = ({ questions }: QuestionListProps): JSX.Element => {
    return (
        <ul className="faq-list">
            {
                questions.map((item, index) =>
                    <li key={index} >
                        <QuestionItem question={item.question} answer={item.answer} number={index} />
                    </li>
                )
            }
        </ul>
    );
};