const objectStore = require('multiprocess-store');
class UserManager {
  constructor(configuration) {
    let defaults = {
      storeLocation: '~/.user-manager-store',
    };
    this.options = Object.assign({}, defaults, configuration);
   }
   async userAdd (_id, data){
     let store = await objectStore.createStore(this.options.storeLocation);
     let userObject = Object.assign({_id}, data);
     await store.createObject(userObject);
   }
   async userGet (_id){
     let store = await objectStore.createStore(this.options.storeLocation);
     let userObject = await store.getObject(_id);
     return userObject;
   }
   async userSet (data){
     let store = await objectStore.createStore(this.options.storeLocation);
     await store.upsertObject(data);
   }
   async userMod (_id, data){
     let store = await objectStore.createStore(this.options.storeLocation);
     let userObject = await store.getObject(_id);
     Object.assign(userObject, data);
     await store.updateObject(userObject);
   }
   async userDel (_id){
     let store = await objectStore.createStore(this.options.storeLocation);
     await store.deleteObject(_id);
   }
}

module.exports = UserManager;
