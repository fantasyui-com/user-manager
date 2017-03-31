
const UserManager = require('./index.js');

const myApp = async function() {

  console.log('\n\nAdd Test (adding alice)')
  const userManager = new UserManager({storeLocation: '~/Tests/user-manager-store/',});
  await userManager.userDel('alice');
  await userManager.userAdd('alice', {password:'hunter2', notes:[`${new Date()}: Account Creation`]});
  console.log(await userManager.userGet('alice'));

  console.log('\n\nSet/Upsert Test (adding note to alice)')
  let alice = await userManager.userGet('alice');
  alice.notes.push(`${new Date()}: Customer called tech-support on Christmas Day, said "Cats are little people" and hung up.`);
  await userManager.userSet(alice);
  console.log(await userManager.userGet('alice'));

  console.log('\n\nMod Test (adding email to alice)')
  await userManager.userMod('alice', {email:'alice@example.com'});
  console.log(await userManager.userGet('alice'));

  let result = await userManager.userGet('alice');
  if(
    (result.password==='hunter2') &&
    (result.notes.length === 2) &&
    (result.email==='alice@example.com')
  ){
    console.log("TESTS PASSED")
    process.exit();
  }else{
    console.error("TESTS FAILED");
    process.exit(1)
  }

};

myApp();
