import { posts } from '../factories/post';

export default function (server) {
  const getRamdom = (array) => array[Math.floor(Math.random() * array.length)];

  const positionsRecords = server.createList('post', posts.length);

  const questions = server.createList('question', 150);
  questions.forEach((question) => {
    question.post = getRamdom(positionsRecords);
    question.save();
  });

  server.createList('candidate', 10).forEach((candidate) => {
    candidate.post = getRamdom(positionsRecords);
    candidate.save();
    const getAnswers = (filteredQuestions) =>
      server.createList('answer', 5).map((candidateAnswer) => {
        candidateAnswer.question = getRamdom(filteredQuestions);
        return candidateAnswer;
      });

    const numberOfInterviews = getRamdom([0, 1, 2, 3]);

    for (let i = 0; i < numberOfInterviews; i++) {
      const interviewPost = getRamdom(positionsRecords);
      const questionsByInterviewPost = questions.filter(
        (question) =>
          question.post.title === interviewPost.title &&
          question.post.level === interviewPost.level
      );

      server.create('interview', {
        answers: getAnswers(questionsByInterviewPost),
        post: interviewPost,
        candidate,
      });
    }
  });
}
