module.exports = class User {
    /** 
    * @var id integer
    **/

        getId(){
            return this.id;
        }

    /** 
    * @var email string
    **/

        getEmail(){
            return this.email;
        }

        setEmail(email){
            this.email = email;
            return this;
        }

    /** 
    * @var password string
    **/

        getPassword(){
            return this.password;
        }
    
        setPassword(password){
            this.password = password;
            return this;
        }

    /** 
    * @var gender enum
    **/

        getGender(){
            return this.gender;
        }
    
        setGender(gender){
            this.gender = gender;
            return this;
        }

    /** 
    * @var first_name string
    **/

        getFirstName(){
            return this.first_name;
        }
    
        setFirstName(first_name){
            this.first_name = first_name;
            return this;
        }

    /** 
    * @var last_name string
    **/

        getLastName(){
            return this.last_name;
        }
    
        setLastName(last_name){
            this.last_name = last_name;
            return this;
        }

    /** 
    * @var phone_number string
    **/

        getPhoneNumber(){
            return this.phone_number;
        }
    
        setPhoneNumber(phone_number){
            this.phone_number = phone_number;
            return this;
        }
}