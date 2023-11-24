module.exports = class Realty {
    /** 
    * @var id integer
    **/

        getId(){
            return this.id;
        }

    /** 
    * @var img string
    **/

        getImg(){
            return this.img;
        }

        setImg(img){
            this.email = img;
            return this;
        }

    /** 
    * @var user_id integer
    **/

        getUserId(){
            return this.user_id;
        }
    
        setUserId(user_id){
            this.user_id = user_id;
            return this;
        }

    /** 
    * @var contact_id integer
    **/

        getContactId(){
            return this.contact_id;
        }
    
        setContactId(contact_id){
            this.contact_id = contact_id;
            return this;
        }

    /** 
    * @var address_1 string
    **/

        getAddress1(){
            return this.address_1;
        }
    
        setAddress1(address_1){
            this.address_1 = address_1;
            return this;
        }

    /** 
    * @var address_2 string
    **/

        getAddress2(){
            return this.address_2;
        }
    
        setAddress2(address_2){
            this.address_2 = address_2;
            return this;
        }

    /** 
    * @var city string
    **/

        getCity(){
            return this.city;
        }
    
        setCity(city){
            this.city = city;
            return this;
        }

    /** 
    * @var zipcode string
    **/

        getZipcode(){
            return this.zipcode;
        }
    
        setZipcode(zipcode){
            this.zipcode = zipcode;
            return this;
        }

    /** 
    * @var info_address string
    **/

        getInfoAddress(){
            return this.info_address;
        }
    
        setInfoAddress(info_address){
            this.info_address = info_address;
            return this;
        }

    /** 
    * @var type enum
    **/

        getType(){
            return this.type;
        }
    
        setType(type){
            this.type = type;
            return this;
        }

    /** 
    * @var area integer
    **/

        getArea(){
            return this.area;
        }
    
        setArea(area){
            this.area = area;
            return this;
        }

    /** 
    * @var room integer
    **/

        getRoom(){
            return this.room;
        }
    
        setRoom(room){
            this.room = room;
            return this;
        }

    /** 
    * @var price integer
    **/

        getPrice(){
            return this.price;
        }
    
        setPrice(price){
            this.price = price;
            return this;
        }

    /** 
    * @var sold tinyint
    **/

        getSold(){
            return this.sold;
        }
    
        setSold(sold){
            this.sold = sold;
            return this;
        }

    /** 
    * @var online tinyint
    **/

        getOnline(){
            return this.online;
        }
    
        setOnline(online){
            this.online = online;
            return this;
        }

    /** 
    * @var created_date datetime
    **/

        getCreatedDate(){
            return this.created_date;
        }
    
        setCreatedDate(created_date){
            this.created_date = created_date;
            return this;
        }
}