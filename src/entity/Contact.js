module.exports = class Contact {
    /** 
    * @var id integer
    **/

        getId(){
            return this.id;
        }

    /** 
    * @var civility enum
    **/

        getCivility(){
            return this.civility;
        }

        setCivility(civility){
            this.civility = civility;
            return this;
        }

    /** 
    * @var first_name enum
    **/

        getFirstName(){
            return this.first_name;
        }

        setFirstName(first_name){
            this.first_name = first_name;
            return this;
        }

    /** 
    * @var last_name enum
    **/

        getLastName(){
            return this.last_name;
        }

        setLastName(last_name){
            this.last_name = last_name;
            return this;
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
    * @var phone_number string
    **/

        getPhoneNumber(){
            return this.phone_number;
        }

        setPhoneNumber(phone_number){
            this.phone_number = phone_number;
            return this;
        }

    /** 
    * @var mobile_number string
    **/

        getMobileNumber(){
            return this.mobile_number;
        }

        setMobileNumber(mobile_number){
            this.mobile_number = mobile_number;
            return this;
        }

    /** 
    * @var info_contact string
    **/

        getInfoContact(){
            return this.info_contact;
        }

        setInfoContact(info_contact){
            this.info_contact = info_contact;
            return this;
        }
}