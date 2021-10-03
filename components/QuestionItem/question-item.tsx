import { QuestionItemProps } from './question-item.props';

export const QuestionItem = (item: QuestionItemProps): JSX.Element => {
    const dataTarget = '#faq' + (item.number + 1).toString();
    const ariaControls = "faq" + (item.number + 1).toString();
    return (
        <>
            <div
                data-bs-toggle="collapse"
                className="collapsed question"
                data-bs-target={dataTarget}
                aria-expanded="false"
                aria-controls={ariaControls}
            >
                {item.question}
                <i className="bi bi-chevron-down icon-show"></i>
                <i className="bi bi-chevron-up icon-close"></i>
            </div>
            <div id={ariaControls} className="accordion-body collapse" data-bs-parent=".faq-list">
                <p>{item.answer}</p>
            </div>
        </>
    );
};