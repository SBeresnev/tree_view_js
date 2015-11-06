/**
 * Created by beresnev on 02.11.2015.
 */

'use strict';

angular.module('treeViewApp').factory('addressmsg', function()
  {
    var addressService = this;

    this.fullAddressMsg = {address_id:'', adr_num: '', soato:'', adr :'' };

     this.setfullAddressMsg = function(data){

       this.fullAddressMsg.address_id = data.address_id;

       this.fullAddressMsg.adr_num = data.adr_num;

       this.fullAddressMsg.soato = data.soato;

       this.fullAddressMsg.adr = data.adr;

  }

    this.getfullAddressMsg = function() {

      return JSON.stringify(this.fullAddressMsg) ;

  }

    return addressService;
  });
