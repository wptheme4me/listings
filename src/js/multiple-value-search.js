var app0 = new Vue({
    el: '#app0',
    data: {
        search: {
            title: "1",
            gyvenviete: "",
            gatve: "",
            kaina: "",
            bukle: "",
            kambariu_sk: "",
            plotas: "",
            aukstas: ""
        }
    },
    computed: {
        test: function() {
            return this.search;
        },
        filterData: function () {
           var paieskosZodziaiObj = this.search; // reikia visada iskelti, nes funkcijos viduje nemato sio variable.
           return duomenys.filter(function(objektas, index) {
                var ats = true; 
                
                for (const key in paieskosZodziaiObj) {
                    if (paieskosZodziaiObj.hasOwnProperty(key) && paieskosZodziaiObj[key] !== '') {
                        if (key in objektas) {
                            if (objektas[key].indexOf(paieskosZodziaiObj[key]) == -1) return false
                        } else {
                            return false;
                        }
                    }
                }
                return ats;    
            })
        } 
    }
})