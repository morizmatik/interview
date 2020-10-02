import { Response } from 'miragejs';

export default function () {
  this.urlPrefix = 'https://interview-system';
  this.namespace = '/api';
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.get('/posts');
  this.get('/posts/:id');
  this.get('/answers/:id');

  this.get('/candidates');
  this.post('/candidates');
  this.get('/candidates/:id');
  this.patch('/candidates/:id');
  this.del('/candidates/:id');

  this.resource('questions');
  this.get('questions', (schema, request) => {
    const { post, sortBy } = request.queryParams;
    let questions = schema.questions.all();
    if (post) {
      questions = questions.filter((question) => question.postId === post);
    }
    if (sortBy) {
      const isReverse = sortBy.includes('-');
      const sortedModels = questions.models.sortBy(sortBy.replace('-', ''));
      questions.models = isReverse ? sortedModels.reverse() : sortedModels;
      return questions;
    }
    return questions;
  });
  this.resource('interviews');

  this.get('/base64', async () => {
    return new Response(200, { 'Content-Type': 'plain/text' }, btoa('12345'));
  });

  this.get('/binary', async () => {
    const content = new Uint8Array(
      new TextEncoder().encode('some arbitrary binary')
    );

    return new Response(
      200,
      { 'Content-Type': 'application/octet-stream' },
      new Blob([content])
    );
  });
}
