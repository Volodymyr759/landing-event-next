import { QuestionItem } from '../QuestionItem/question-item';
import { QuestionListProps } from './question-list.props';

export const QuestionList = ({ questions }: QuestionListProps): JSX.Element => {
    return (
        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-9">
                <ul className="faq-list">
                    {
                        questions.map((item, index) =>
                            <li key={index} >
                                <QuestionItem question={item.question} answer={item.answer} number={index} />
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};