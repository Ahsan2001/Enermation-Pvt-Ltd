class UserDto {
    constructor(user){
        this._id = user._id;
        this.username = user.firstName + " " + user.lastName;
        this.email = user.email;
        this.phone = user.phone;
    }
}

module.exports = UserDto;