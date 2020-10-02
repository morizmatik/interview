import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id) {
    const data = id ? payload.data || {} : payload.data || [];
    const isNotEmptyList = !id && data.length;
    const isCandidates =
      isNotEmptyList && data.firstObject.type === 'candidates';
    if (isCandidates) {
      payload.data.map((candidate) => {
        candidate.relationships.interviews = candidate.relationships.interview;
      });
    }

    if (payload.data?.type === 'candidates' && payload.data.relationships) {
      payload.data.relationships.interviews =
        payload.data.relationships.interview;
    }

    return super.normalizeResponse(...arguments);
  }
}
