import { JSONAPISerializer } from 'ember-cli-mirage';
import { isArray } from '@ember/array';

function paginate(json, request) {
  const pageNumber = Number(request.queryParams['page']);
  const pageSize = Number(request.queryParams['perPage']);

  if (!pageNumber || !pageSize) {
    return;
  }

  const minIndex = (pageNumber - 1) * pageSize;
  const maxIndex = pageNumber * pageSize;
  const totalRecords = json.data.length;
  json.data = json.data.slice(minIndex, maxIndex);
  json.meta = json.meta || {};
  json.meta.totalPages =
    json.meta.totalPages || Math.ceil(totalRecords / pageSize);
  json.meta.page = pageNumber;
  json.meta.perPage = pageSize;
  json.meta.count = totalRecords;

  return json;
}

export default JSONAPISerializer.extend({
  alwaysIncludeLinkageData: true,
  serialize(response, request) {
    let json = JSONAPISerializer.prototype.serialize.apply(this, arguments);

    if (isArray(response)) {
      paginate(json, request);
    }

    return json;
  },
});
