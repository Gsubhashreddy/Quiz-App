import questions from '../questions';
export default function Quiz() {
  return (
    <div id='quiz'>
      <div id='question-overview'>
        {questions.map((eachQuestion) => (
          <h2>{eachQuestion.text}</h2>
        ))}
      </div>
    </div>
  );
}
