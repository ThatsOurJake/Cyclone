import DB from './index';

export const findRepoDB = (search) => {
  return new Promise((resolve, reject) => {
    DB.repos.find(search, (err, docs) => {
      if (err) {
        return reject(err)
      }

      return resolve(docs);
    });
  });
};
