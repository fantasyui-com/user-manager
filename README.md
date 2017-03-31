# user-manager
Simple user manager for the people.


## Creating the data store

```JavaScript

const userManager = new UserManager({storeLocation: '~/Tests/user-manager-store/',});

```

## Adding Alice
```JavaScript

await userManager.userAdd('alice', {password:'hunter2', notes:[`${new Date()}: Account Creation`]});

```

## Adding (Upserting) a Note to Alice's Account
```JavaScript

let alice = await userManager.userGet('alice');
alice.notes.push(`${new Date()}: Customer called tech-support on Christmas Day, said "Cats are little people" and hung up.`);
await userManager.userSet(alice);

```

## Account Modification, Adding a Field.
```JavaScript

await userManager.userMod('alice', {email:'alice@example.com'});

```

## LICENSE

GPLv3
