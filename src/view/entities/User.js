import React from 'react'

class User {
    constructor(userData) {
        this.id = userData.login.uuid;
        this.name = `${userData.name.first} ${userData.name.last}`;
        this.dob = new Date(userData.dob.date).toJSON().slice(0,10).split('-').reverse().join('.');
        
        this.email = userData.email;
        this.image = userData.picture.medium;
    }
}


export default User;








