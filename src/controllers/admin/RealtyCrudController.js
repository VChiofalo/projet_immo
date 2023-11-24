const Contact = require('../../entity/Contact.js');
const Realty = require('../../entity/Realty.js');
const RealtyRepository = require('../../repository/RealtyRepository.js');
const ContactRepository = require('../../repository/ContactRepository.js')
class RealtyCrudController{
    index(req, res){
        const RealtiesRepo = new RealtyRepository();
        RealtiesRepo.getAllRealties().then(realties => {
            res.render('admin/realties/index', {realties: realties});
        })  
    }

    addRealty(req, res){
        res.render('admin/realties/add');
    }

    addRealtyProcess(req, res){
        let entityContact = new Contact();
        let entityRealty = new Realty();
        const ContactRepo = new ContactRepository();
        const RealtyRepo = new RealtyRepository();

        entityContact.setCivility(req.body.civility)
            .setFirstName(req.body.contactFirstName)
            .setLastName(req.body.contactLastName)
            .setEmail(req.body.contactEmail)
            .setPhoneNumber(req.body.contactPhoneNumber)
            .setMobileNumber(req.body.contactMobileNumber)
            .setInfoContact(req.body.contactInfo);

        ContactRepo.add(entityContact).then((contact)=>{
            entityRealty.setUserId(req.session.user.id)
                .setContactId(contact[0].insertId)
                .setAddress1(req.body.address1)
                .setAddress2(req.body.address2)
                .setCity(req.body.city)
                .setZipcode(req.body.zipcode)
                .setInfoAddress(req.body.infoAddress)
                .setType(req.body.type || 1)
                .setArea(req.body.area || 0)
                .setRoom(req.body.room || 0)
                .setPrice(req.body.price || 0)
                .setSold(req.body.sold)
                .setOnline(req.body.online)
                .setCreatedDate(new Date());

                RealtyRepo.add(entityRealty).then(()=>{
                    req.flash('notify', 'Votre bien a bien été créé.')
                    res.redirect('/admin75/realties')
                })
        })
    }
}

module.exports = new RealtyCrudController();