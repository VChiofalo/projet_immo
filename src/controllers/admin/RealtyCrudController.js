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
        res.render('admin/realties/add', {realty:{}, contact: {}});
    }

    addRealtyProcess(req, res){
        if (req.body.contact) {
            let entityContact = new Contact();
            
            entityContact.setCivility(req.body.contact.civility)
                .setFirstName(req.body.contact.contactFirstName)
                .setLastName(req.body.contact.contactLastName)
                .setEmail(req.body.contact.contactEmail)
                .setPhoneNumber(req.body.contact.contactPhoneNumber)
                .setMobileNumber(req.body.contact.contactMobileNumber)
                .setInfoContact(req.body.contact.contactInfo);
            delete entityContact.id; 

            const ContactRepo = new ContactRepository();

            ContactRepo.add(entityContact).then((contact)=>{
                if (contact[0].insertId) {
                    let entityRealty = new Realty();
                    
                    entityRealty.setUserId(req.session.user.id)
                        .setContactId(contact[0].insertId)
                        .setAddress1(req.body.realty.address1)
                        .setAddress2(req.body.realty.address2)
                        .setCity(req.body.realty.city)
                        .setZipcode(req.body.realty.zipcode)
                        .setInfoAddress(req.body.realty.infoAddress)
                        .setType(req.body.realty.type || 1)
                        .setArea(req.body.realty.area || 0)
                        .setRoom(req.body.realty.room || 0)
                        .setPrice(req.body.realty.price || 0)
                        .setSold(req.body.realty.sold)
                        .setOnline(req.body.realty.online)
                        .setCreatedDate(new Date());

                    delete entityRealty.id

                    const RealtyRepo = new RealtyRepository();

                    RealtyRepo.add(entityRealty).then(()=>{
                        req.flash('notify', 'Votre bien a bien été créé.')
                        res.redirect('/admin75/realties')
                    })
                } else {
                    res.render('admin/realties/add', {realty: req.body.realty, contact: req.body.contact})
                }
    
            } ).catch(() => {
                res.render('admin/realties/add', {realty: req.body.realty, contact: req.body.contact})
            })
        } else {
            res.render('admin/realties/add', {realty: req.body.realty, contact: req.body.contact})
        }
    }

    deleteRealty(req, res){
        const RealtyRepo = new RealtyRepository();
        RealtyRepo.deleteRealtyById(req.params.id).then(()=>{
            req.flash("notify","La suppression du bien s'est correctement effectué");
            res.redirect('/admin75/realties');
        })
    }

    updateRealty(req, res){
        const RealtyRepo = new RealtyRepository();
        RealtyRepo.getRealtyById(req.params.id).then(realty => {
            const ContactRepo = new ContactRepository();
            ContactRepo.getContactById(realty.user_id).then(contact => {
                res.render('admin/realties/update', {id: req.params.id, realty: realty, contact: contact});
            })
        })
    }

    updateRealtyProcess(req, res){
        let entityContact = new Contact();
        
        entityContact.setCivility(req.body.contact.civility)
            .setFirstName(req.body.contact.contactFirstName)
            .setLastName(req.body.contact.contactLastName)
            .setEmail(req.body.contact.contactEmail)
            .setPhoneNumber(req.body.contact.contactPhoneNumber)
            .setMobileNumber(req.body.contact.contactMobileNumber)
            .setInfoContact(req.body.contact.contactInfo);

        const RealtyRepo = new RealtyRepository();
        RealtyRepo.getRealtyById(req.params.id).then(realty => {
            console.log(req.body);
            const ContactRepo = new ContactRepository();
            ContactRepo.getContactById(realty.user_id).then(contact => {
                ContactRepo.updateContactById(entityContact, realty.user_id).then(() => {
                    if (contact.id) {
                        let entityRealty = new Realty();
                        
                        entityRealty
                            .setAddress1(req.body.realty.address1)
                            .setAddress2(req.body.realty.address2)
                            .setCity(req.body.realty.city)
                            .setZipcode(req.body.realty.zipcode)
                            .setInfoAddress(req.body.realty.infoAddress)
                            .setType(req.body.realty.type || 1)
                            .setArea(req.body.realty.area || 0)
                            .setRoom(req.body.realty.room || 0)
                            .setPrice(req.body.realty.price || 0)
                            .setSold(req.body.realty.sold)
                            .setOnline(req.body.realty.online)

                        RealtyRepo.updateRealtyById(entityRealty, req.params.id).then(()=>{
                            req.flash('notify', 'Votre bien a bien été modifié.')
                            res.redirect('/admin75/realties')
                        })
                    } else {
                        res.render('admin/realties/update', {realty: req.body.realty, contact: req.body.contact})
                    }
                });
            })
        })
    }
}

module.exports = new RealtyCrudController();