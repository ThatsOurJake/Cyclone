import Datastore from 'nedb';
import path from 'path';

export default {
  repos: new Datastore({
    filename: `${path.join(__dirname, 'storage')}/repos.db`,
    autoload: true
  }),
  // settings: new Datastore({
  //   filename: `${path.join(__dirname, 'storage')}/settings.db`,
  //   autoload: true
  // })
};
